import Konva from 'konva';
import { Node, NodeConfig } from 'konva/lib/Node'
import type { GraffitiBoard } from './index';
import { GraffitiShape } from "./shaps";
import { v4 as uuid } from 'uuid';
import { ActionType } from './types';

export class GraffitiTransformer extends GraffitiShape {
  renderer: GraffitiBoard;
  id: string;
  private transformer: Konva.Transformer;
  private selectionRectangle: Konva.Rect;
  private transformerID: string;
  private selectionRectangleID: string;
  rect: {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
  }
  constructor(renderer: GraffitiBoard) {
    super();
    this.renderer = renderer;
    this.id = uuid();
    this.rect = {
      x1: 0,
      y1: 0,
      x2: 0,
      y2: 0
    };
    this.transformerID = `selection-t-${this.id}`;
    this.selectionRectangleID = `selection-r-${this.id}`;
  }
  
  init() {
    const renderer = this.renderer;
    this.transformer = new Konva.Transformer({
      id: this.transformerID,
      borderDash: [3, 3],
      borderStroke: 'blue',
      anchorFill: 'red'
    });
    this.selectionRectangle = new Konva.Rect({
      id: this.selectionRectangleID,
      fill: 'rgba(0, 0, 255, 0.5)',
      visible: false
    });
    renderer.addShape(this.transformer, this.selectionRectangle);
    this.initListeners();
  }

  initListeners() {
    const renderer = this.renderer;
    const stage = renderer.stage;
    stage.on('click tab', (e) => {
      const action  = renderer.action;
      if (action !== ActionType.NONE) {
        return;
      }

      if (this.selectionRectangle.visible()) {
        return;
      }
  
      // if click on empty area - remove all selections
      if (e.target === stage) {
        this.transformer.nodes([]);
        return;
      }
      if (e.target.nodeType !== 'Shape') {
        return;
      }
      // do we pressed shift or ctrl?
      const metaPressed = e.evt.shiftKey || e.evt.ctrlKey || e.evt.metaKey;
      const isSelected = this.transformer.nodes().indexOf(e.target) >= 0;
      if (!metaPressed && !isSelected) {
        // if no key pressed and the node is not selected
        // select just one
        this.transformer.nodes([e.target]);
      } else if (metaPressed && isSelected) {
        // if we pressed keys and node was selected
        // we need to remove it from selection:
        const nodes = this.transformer.nodes().slice(); // use slice to have new copy of array
        // remove node from array
        nodes.splice(nodes.indexOf(e.target), 1);
        this.transformer.nodes(nodes);
      } else if (metaPressed && !isSelected) {
        // add the node into selection
        const nodes = this.transformer.nodes().concat([e.target]);
        this.transformer.nodes(nodes);
      }
    })
    stage.on('mousedown touchstart', e => {
      const action  = renderer.action;
      if (action !== ActionType.NONE) {
        return;
      }
      if (e.target !== stage) {
        return;
      }
      e.evt.preventDefault();
      this.rect = {
        x1: stage.getPointerPosition().x,
        x2: stage.getPointerPosition().x,
        y1: stage.getPointerPosition().y,
        y2: stage.getPointerPosition().y
      };
      this.selectionRectangle.visible(true);
      this.selectionRectangle.width(0);
      this.selectionRectangle.height(0);
    })
    stage.on('mousemove touchmove', (e) => {
      const action  = renderer.action;
      if (action !== ActionType.NONE) {
        return;
      }
      // do nothing if we didn't start selection
      if (!this.selectionRectangle.visible()) {
        return;
      }
      e.evt.preventDefault();
      this.rect.x2 = stage.getPointerPosition().x;
      this.rect.y2 = stage.getPointerPosition().y;
      const {
        x1, x2, y1, y2
      } = this.rect;
      this.selectionRectangle.setAttrs({
        x: Math.min(x1, x2),
        y: Math.min(y1, y2),
        width: Math.abs(x2 - x1),
        height: Math.abs(y2 - y1),
      });
    });
    stage.on('mouseup touchend', (e) => {
      const action  = renderer.action;
      if (action !== ActionType.NONE) {
        return;
      }
      // do nothing if we didn't start selection
      if (!this.selectionRectangle.visible()) {
        return;
      }
      e.evt.preventDefault();
      // update visibility in timeout, so we can check it in click event
      setTimeout(() => {
        this.selectionRectangle.visible(false);
      });
      const shapes = stage.find('Shape');
      const box = this.selectionRectangle.getClientRect();
      const selected = shapes.filter((shape) => {
        const shapeID = shape.id();
        if (shapeID === this.transformerID || shapeID === this.selectionRectangleID) {
          return false
        }
        return Konva.Util.haveIntersection(box, shape.getClientRect())
      });
      this.transformer.nodes(selected);
    });
  }

  destroy() {
    const renderer = this.renderer;
    const stage = renderer.stage;
    stage.off('click tab');
    stage.off('mouseup touchend');
    stage.off('mousemove touchmove');
    stage.off('mousedown touchstart');
  }

  addNodes(nodes: Node<NodeConfig>[]) {
    this.transformer.nodes(nodes);
  }
}
