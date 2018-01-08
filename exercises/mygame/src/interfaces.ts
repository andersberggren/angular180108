export interface Adventure {
    gameName: string
    initialGameState: GameState
    scenes: {
        [index: string]: Scene
    }
}

export interface Scene {
    title: string
    imgUrl: string
    desc: string
    opts: string[]
}

export interface GameState {
    currentSceneId: string
}
