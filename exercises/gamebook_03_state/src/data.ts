import { Adventure } from './interfaces'

export const strangeJourney:Adventure = {
  title: "A strange journey",
  startState: {
    atScene: 'corridor'
  },
  scenes: {
    corridor: {
      title: "A dark hallway",
      imgUrl: "http://orig11.deviantart.net/8271/f/2012/114/d/9/dark_hallway_by_deathshadow3-d4xh6ba.jpg",
      desc: "The corridor extends into eternity in front of you. A few meters down a heavy oak door is set in the left wall.",
      opts: ["Open the door","Walk down the corridor","Turn back"]
    }
  }
}
