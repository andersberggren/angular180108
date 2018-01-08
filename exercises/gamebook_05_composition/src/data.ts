import { Adventure } from './interfaces'

export const strangeJourney: Adventure = {
  title: "A strange journey!",
  startState: {
    atScene: 'beginning'
  },
  scenes: {
    beginning: {
      title: "The journey begins",
      imgUrl: "http://kaijupop.com/wp-content/uploads/2013/11/dark-room-1094x520.jpg",
      desc: "You wake up in a strange room, with no recollection on how you got here. An opening leads out into whatever house this is.",
      opts: [{
        text: "Stay in the room",
        to: "beginning"
      },{
        text: "Walk through the opening",
        to: "hallway"
      }]
    },
    hallway: {
      title: "A dark hallway",
      imgUrl: "http://orig11.deviantart.net/8271/f/2012/114/d/9/dark_hallway_by_deathshadow3-d4xh6ba.jpg",
      desc: "The corridor extends into eternity in front of you. A few meters down a heavy oak door is set in the left wall.",
      opts: [{
        text: "Open the door",
        to: "room"
      },{
        text:"Walk down the corridor",
        to: "beginning"
      },{
        text: "Turn back",
        to: "beginning"
      }]
    },
    room: {
      title: "A room ...?",
      imgUrl: "http://managing4excellence.com/wp-content/uploads/2013/07/Stepping-off-the-Cliff.jpg",
      desc: "You open the door and enter the room. Or, rather, you step off a cliff and crash into the void!",
      opts: []
    }
  }
}