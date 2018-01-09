import {Adventure} from "./interfaces";

export const myAdventure:Adventure = {
    gameName: "The Exciting Quest!",
    initialGameState: {
        currentSceneId: "corridor",
        gameOver: false
    },
    scenes: {
        corridor: {
            title: "A dark hallway",
            imgUrl: "https://static.pexels.com/photos/186181/pexels-photo-186181.jpeg",
            desc:
                `The corridor extends into eternity in front of you.
                A few meters down a heavy oak door is set in the left wall.`,
            opts: [
                {targetSceneId: "roomOfDeath", desc: "Open the door"},
                {targetSceneId: "corridor", desc: "Walk down the corridor"},
                {targetSceneId: "corridorDeadEnd", desc: "Turn back"}
            ],
        },
        corridorDeadEnd: {
            title: "Dead end",
            imgUrl: "https://farm9.static.flickr.com/8689/27858822403_d8c7b35e30_b.jpg",
            desc:
                `There is nothing here. Just a dead end.`,
            opts: [
                {targetSceneId: "corridor", desc: "Turn back"}
            ]
        },
        roomOfDeath: {
            title: "The room of death",
            imgUrl: "https://static.brusheezy.com/system/resources/previews/000/047/667/non_2x/fireball-explosion-psd-photoshop-psds.jpg",
            desc:
                `You open the door, triggering a bomb. The entire building explodes.`,
            opts: []
        }
    }
}
