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
    opts: Option[]
}

export interface Option {
    targetSceneId: string
    desc: string
}

export interface GameState {
    currentSceneId: string
    gameOver: boolean
}
