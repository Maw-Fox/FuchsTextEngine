/**
 * Text-game parser: Parser classes
 * Reqs: Vue.js [Data-binding DOM library]
 * @author: Kali@F-list.net (MawFox on GitHub)
 * Protected under MIT Licence.
 */

///<reference path="../app.d.ts" />
///<reference path="interfaces" />

namespace Game.Class {
  export class Scene {
    public actions: IAction[];
    public template: HTMLElement;
    public sceneData: any;
    public toScene: any;

    constructor(options: ISceneOptions) {
    	
    }
  }
}
