import { Injectable } from "@angular/core";
import { myAdventure } from "./data";
import { Scene, GameState, Option } from "./interfaces";

@Injectable()
export class StateHandler {
    private adventure = myAdventure;
    private gameState: GameState;
    private listeners: Function[] = [];

    constructor() {
        this.reset();
    }

    get gameName(): string {
        return this.adventure.gameName;
    }

    get currentScene(): Scene {
        return this.adventure.scenes[this.gameState.currentSceneId];
    }

    listen(func: Function) {
        this.listeners.push(func);
        this.notifyListener(func);
    }

    private notifyListeners() {
        this.listeners.forEach(callback => this.notifyListener(callback));
    }

    private notifyListener(func: Function) {
        func(this.gameState, this.currentScene);
    }

    reset() {
        this.gameState = {...this.adventure.initialGameState};
        this.notifyListeners();
    }

    changeScene(option: Option) {
        this.gameState.currentSceneId = option.targetSceneId;
        var currentScene = this.adventure.scenes[this.gameState.currentSceneId];
        this.gameState.gameOver = currentScene.opts.length == 0;
        this.notifyListeners();
    }
}
