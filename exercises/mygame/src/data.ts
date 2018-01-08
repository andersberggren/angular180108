import {Adventure} from "./interfaces";

export const myAdventure:Adventure = {
    gameName: "The Exciting Quest!",
    scenes: {
        start: {
            title: "A dark hallway",
            imgUrl: "https://static.pexels.com/photos/186181/pexels-photo-186181.jpeg",
            desc:
                `The corridor extends into eternity in front of you.
                A few meters down a heavy oak door is set in the left wall.`,
            opts: ["Open the door", "Walk down the corridor", "Turn back"]
        }
        // TODO More scenes
    }
}
