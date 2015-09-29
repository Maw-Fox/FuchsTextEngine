/**
 * Text-game parser: Parser classes
 * Reqs: Vue.js [Data-binding DOM library]
 * @author: Kali@F-list.net (MawFox on GitHub)
 * Protected under MIT Licence.
 */
///<reference path="interfaces" />
///<reference path="../app.d.ts" />
/**
 * Text-game parser: Parser module
 * Reqs: Vue.js [Data-binding DOM library]
 * @author: Kali@F-list.net (MawFox on GitHub)
 * Protected under MIT Licence.
 */
///<reference path="interfaces" />
///<reference path="../app.d.ts" />
/**
 * Text-game parser: View model module
 * Reqs: Vue.js [Data-binding DOM library]
 * @author: Kali@F-list.net (MawFox on GitHub)
 * Protected under MIT Licence.
 */
///<reference path="interfaces" />
///<reference path="../app.d.ts" />
var Game;
(function (Game) {
    var Model;
    (function (Model) {
        Model.x = 'test';
    })(Model = Game.Model || (Game.Model = {}));
    Game.ViewModel = new Vue({
        el: '#app',
        data: {
            Model: Model
        },
        components: {},
        methods: {}
    });
})(Game || (Game = {}));
