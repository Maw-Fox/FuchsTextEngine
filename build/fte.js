/**
 * Text-game parser: Global interfaces
 * Reqs: Vue.js [Data-binding DOM library]
 * @author: Kali@F-list.net (MawFox on GitHub)
 * Protected under MIT Licence.
 */
/**
 * Text-game parser: Parser interfaces
 * Reqs: Vue.js [Data-binding DOM library]
 * @author: Kali@F-list.net (MawFox on GitHub)
 * Protected under MIT Licence.
 */
/**
 * Text-game parser: Parser module
 * Reqs: Vue.js [Data-binding DOM library]
 * @author: Kali@F-list.net (MawFox on GitHub)
 * Protected under MIT Licence.
 */
///<reference path="interfaces" />
///<reference path="../app.d.ts" />
var Game;
(function (Game) {
    Game.Scenes = {};
})(Game || (Game = {}));
/**
 * Text-game parser: Parser classes
 * Reqs: Vue.js [Data-binding DOM library]
 * @author: Kali@F-list.net (MawFox on GitHub)
 * Protected under MIT Licence.
 */
///<reference path="../app.d.ts" />
///<reference path="interfaces" />
var Game;
(function (Game) {
    var Class;
    (function (Class) {
        var Scene = (function () {
            function Scene(options) {
            }
            return Scene;
        })();
        Class.Scene = Scene;
    })(Class = Game.Class || (Game.Class = {}));
})(Game || (Game = {}));
/**
 * Text-game parser: View model interfaces
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
