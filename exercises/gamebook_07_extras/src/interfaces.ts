export interface Adventure {
  title: string,
  startState: GameState,
  scenes: {
    [index: string]: Scene
  }
}

export interface Scene {
  title: string
  imgUrl: string
  desc: string
  opts: Option[]
}

export interface Option {
  text: string,
  to: string
}

export interface GameState {
  atScene?: string,
  name?: string
}
