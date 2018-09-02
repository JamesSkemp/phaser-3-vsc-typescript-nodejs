import * as phaser from "phaser";
import MainMenu from "./Scenes/MainMenu";

const gameConfig: GameConfig = {
	width: 800,
	height: 600,
	type: Phaser.AUTO,
	parent: "content",
	title: "Battle INF, done with Visual Studio Code, TypeScript, and NodeJS"
};

export default class Game extends Phaser.Game {
	constructor(config: GameConfig) {
		console.log((new Date).toISOString() + ' : Entered Game constructor()');

		super(config);

		this.scene.add(MainMenu.Name, MainMenu);
		this.scene.start(MainMenu.Name);
	}
};

window.onload = () => {
	var game = new Game(gameConfig);
};