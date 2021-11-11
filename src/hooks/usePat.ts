import React, { useEffect } from 'react';
import { IApplicationOptions } from 'pixi.js'
import { Application } from '@pixi/app';
import { Renderer } from '@pixi/core';
import { Ticker, TickerPlugin } from '@pixi/ticker';
import { InteractionManager } from '@pixi/interaction';
import { Live2DModel, InternalModel } from 'pixi-live2d-display';

// register the Ticker to support automatic updating of Live2D models
Application.registerPlugin(TickerPlugin);
Live2DModel.registerTicker(Ticker);

// register the InteractionManager to support automatic interaction of Live2D models
Renderer.registerPlugin('interaction', InteractionManager);


interface Options extends Omit<IApplicationOptions, 'view'> {
  modelUrl?: string;
  onLoad?: (ls: Live2DModel<InternalModel>) => void
}
const deafaultUrl = 'model/tororo.model.json'
export function useLiveWidget(ref: React.RefObject<HTMLCanvasElement>, options: Options) {
  const {
    modelUrl,
    onLoad,
    ...rest
  } = options
  useEffect(() => {
    if (!ref.current) {
      return
    }
    async function init() {
      const app = new Application({
        ...rest,
        view: ref.current
      })
      const live2dSprite = await Live2DModel.from(modelUrl || deafaultUrl);
      (live2dSprite as any).scale.set(0.08);
      (live2dSprite as any).position.set(30, 5)
      app.stage.addChild(live2dSprite as any);
      onLoad && onLoad(live2dSprite)
    }
    init()
  }, [ref, rest, modelUrl, onLoad])
}
