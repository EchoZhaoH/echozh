import Konva from 'konva';
import type { GraffitiBoard } from './index'
import { ActionType } from './types';
import { v4 as uuid } from 'uuid';
import { GraffitiShape } from './shaps';

export class GraffitiLine extends GraffitiShape {
  renderer: GraffitiBoard;

  lines: Konva.Line[];
  painting: boolean;
  constructor(stage: GraffitiBoard) {
    super()
    this.renderer = stage;
    this.lines = [];
    this.painting = false;
  }
  init() {
    this.initStageListeners();
    this.initRendererEvents();
  }

  initStageListeners() {
    const stage = this.renderer.stage;
    // mousedown
    stage.addEventListener('mousedown touchstart', () => {
      if (!this.isPenAction) {
        return;
      }
      const line = new Konva.Line({
        id: uuid(),
        fill: 'red',
        stroke: 'red',
        strokeWidth: 2
      });
      this.lines.push(line);
      this.renderer.addShape(line);
      this.painting = true
    });
    // mouseup
    stage.addEventListener('mouseup touchend', () => {
      if (!this.isPenAction) {
        return
      }
      this.painting = false;
    });
    // mouse move
    stage.addEventListener('mousemove touchmove', (e) => {
      if (!this.isPenAction || !this.painting) {
        return
      }
      const line = this.lines[this.lines.length - 1];
      const point = [
        (e as MouseEvent).clientX,
        (e as MouseEvent).clientY
      ];
      line.points(line.points().concat(point));
    })
  }

  initRendererEvents() {
    const renderer = this.renderer;
    renderer.on<ActionType>('action:change', (action) => {
      if (action !== ActionType.PEN) {
        this.painting = false;
      }
    })
  }

  get isPenAction() {
    return this.renderer.action === ActionType.PEN;
  }
}
