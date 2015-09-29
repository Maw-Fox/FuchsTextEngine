/**
 * Text-game parser: Global interfaces
 * Reqs: Vue.js [Data-binding DOM library]
 * @author: Kali@F-list.net (MawFox on GitHub)
 * Protected under MIT Licence.
 */

interface ISequence {
  template: string;
  actions?: IAction[];
}

interface IAction {
  displayText: string;
  hoverText?: string;
  toSequence: string;
  checkRequirements?: ICallback<void, boolean>;
  onClick?: ICallback<void, void>;
}

interface ICallback<I, R> {
  <I>(options: I): R;
}

interface ISceneOptions {
  id: string;
  toScene: any;
  sequences: {
    [key: string]: ISequence;
  };
  onFinish?: ICallback<void, void>;
}

declare module Game {
  module Class {
    class Scene {
      public actions: IAction[];
      public template: HTMLElement;
      public sceneData: any;
      public toScene: any;

      constructor(options: ISceneOptions)
    }
  }
}
