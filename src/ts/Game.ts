import * as phaser from "phaser";
import MainMenu from "./Scenes/MainMenu";
import Preloader from "./Scenes/Preloader";

const gameConfig: GameConfig = {
	width: 800,
	height: 600,
	type: Phaser.AUTO,
	parent: "content",
	title: "Starter Project for Phaser 3 with Visual Studio Code, TypeScript, and NodeJS"
};

export default class Game extends Phaser.Game {
	constructor(config: GameConfig) {
		console.log((new Date).toISOString() + ' : Entered Game constructor()');

		super(config);

		this.scene.add(Preloader.Name, Preloader);
		this.scene.add(MainMenu.Name, MainMenu);
		this.scene.start(Preloader.Name);
	}
};

window.onload = () => {
	var game = new Game(gameConfig);
};