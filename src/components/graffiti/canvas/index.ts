import { GraffitiLine } from './line';
import Konva from 'konva'
import type { StageConfig } from 'konva/lib/Stage'
import { v4 as uuid } from 'uuid'
import { Emitter } from './emmiter';
import { GraffitiShape } from './shaps';
import { ActionType } from './types';

const {
  Stage,
  Layer,
  Line
} = Konva

export class GraffitiBoard extends Emitter {
  id: string;
  stage: Konva.Stage;
  layers: Konva.Layer[];
  activeLayer: Konva.Layer;
  action: ActionType;
  cursor: string;
  shapes: GraffitiShape[];
  constructor(container: HTMLDivElement | string, config: Omit<StageConfig, 'container'>) {
    super();
    this.stage = new Stage({
      container,
      ...config
    });
    this.id = uuid();
    this.activeLayer = new Layer();
    this.layers = [this.activeLayer];
    this.action = ActionType.NONE;
    this.cursor = 'grab';
    this.stage.add(this.activeLayer);
    this.setCursor();
    this.shapes = [
      new GraffitiLine(this)
    ]
    this.initShapes();
    this.autoResize();
  }

  setCursor(cursor?: string) {
    document.body.style.cursor = cursor || this.cursor;
    if (cursor) {
      this.cursor = cursor;
    }
  }

  setAction(action: ActionType) {
    this.action = action;
    switch(this.action) {
      case ActionType.NONE:
        this.cursor = 'grab';
        break;
      case ActionType.PEN:
        this.cursor = 'pointer';
        break;
      default:
        break;
    }
    this.emit('action:change', this.action);
    this.setCursor();
  }

  addShape(node: Konva.Group | Konva.Shape) {
    this.activeLayer.add(node);
  }

  private initShapes() {
    this.shapes.forEach(shape => {
      shape.init()
    })
  }

  autoResize() {
    window.addEventListener('resize', () => {
      this.stage.width(window.innerWidth);
      this.stage.height(window.innerHeight);
    })
  }
}