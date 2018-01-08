export interface Adventure {
    gameName: string
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
