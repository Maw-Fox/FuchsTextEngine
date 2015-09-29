/**
 * Example scene
 * @author: Kali@F-list.net (MawFox on GitHub)
 */
///<reference path="fte.d.ts" />
var Intro = new Game.Class.Scene({
    id: "Intro",
    toScene: "Finish_a",
    sequences: {
        intro1: {
            template: "You're staring at a void in space.",
            actions: [
                {
                    displayText: "Fap",
                    hoverText: "Grab your dick and double-click.",
                    toSequence: "intro2_a"
                },
                {
                    displayText: "Sleep",
                    hoverText: "You're too lazy to care.",
                    toSequence: "intro2_b",
                    onClick: function () {
                        Intro.sceneData.isSleeping = true;
                    }
                },
                {
                    displayText: "Do Nothing",
                    hoverText: "Do fuck-all.",
                    toSequence: "intro2_b"
                }
            ]
        },
        intro2_a: {
            template: "",
        },
        intro2_b: {
            template: ""
        }
    },
    onFinish: function () {
        if (Intro.sceneData.isSleeping) {
            Intro.toScene = "Finish_b";
        }
    }
});
