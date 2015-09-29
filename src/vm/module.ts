/**
 * Text-game parser: View model module
 * Reqs: Vue.js [Data-binding DOM library]
 * @author: Kali@F-list.net (MawFox on GitHub)
 * Protected under MIT Licence.
 */

///<reference path="interfaces" />
///<reference path="../app.d.ts" />

module Game {
  export module Model {
    export const x: string = 'test';
  }

  export const ViewModel = new Vue({
    el: '#app',
    data: {
      Model: Model
    },
    components: {},
    methods: {}
  });
}
