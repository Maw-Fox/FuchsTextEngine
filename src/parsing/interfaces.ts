/**
 * Text-game parser: Parser interfaces
 * Reqs: Vue.js [Data-binding DOM library]
 * @author: Kali@F-list.net (MawFox on GitHub)
 * Protected under MIT Licence.
 */

interface ISceneOptions {
  id: string;
  toScene: any;
  sequences: {
    [key: string]: ISequence;
  };
  onFinish?: ICallback<void, void>;
}
