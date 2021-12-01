import Konva from 'konva'
import type { StageConfig } from 'konva/lib/Stage'
import { v4 as uuid } from 'uuid'

export enum ActionType {
  NONE,
  PEN
}

const {
  Stage,
  Layer,
  Line
} = Konva

export class GraffitiBoard {
  id: string;
  stage: Konva.Stage;
  layers: Konva.Layer[];
  activeLayer: Konva.Layer;
  action: ActionType;
  lines: Konva.Line[];
  painting: boolean;
  cursor: string;
  constructor(container: HTMLDivElement | string, config: Omit<StageConfig, 'container'>) {
    this.stage = new Stage({
      container,
      ...config
    });
    this.id = uuid();
    this.activeLayer = new Layer();
    this.layers = [this.activeLayer];
    this.action = ActionType.NONE;
    this.lines = [];
    this.painting = false;
    this.cursor = 'grab';
    this.stage.add(this.activeLayer);
    this.listenersInit();
    this.setCursor();
  }

  setCursor(cursor?: string) {
    document.body.style.cursor = cursor || this.cursor;
    if (cursor) {
      this.cursor = cursor;
    }
  }

  setAction(action: ActionType) {
    if (this.action === ActionType.PEN && this.painting) {
      this.painting = false;
    }
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
    this.setCursor();
  }

  listenersInit() {
    // mousedown
    this.stage.addEventListener('mousedown touchstart', () => {
      switch(this.action) {
        case ActionType.NONE:
          break;
        case ActionType.PEN:
          {
            const line = new Line({
              fill: 'red',
              stroke: 'red',
              strokeWidth: 2
            });
            this.lines.push(line);
            this.activeLayer.add(line);
            this.painting = true
          }
          break;
        default:
          break;
      }
    })
    // mouseup
    this.stage.addEventListener('mouseup touchend', () => {
      switch(this.action) {
        case ActionType.NONE:
          break;
        case ActionType.PEN:
          this.painting = false;
          break;
        default:
          break;
      }
    })
    // mouse move
    this.stage.addEventListener('mousemove touchmove', (e) => {
      switch(this.action) {
        case ActionType.NONE:
          break;
        case ActionType.PEN:
          if (this.painting) {
            const line = this.lines[this.lines.length - 1];
            const point = [
              (e as MouseEvent).clientX,
              (e as MouseEvent).clientY
            ];
            line.points(line.points().concat(point));
          }
          break;
        default:
          break;
      }
    })
  }
}