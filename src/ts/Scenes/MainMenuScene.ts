export default class MainMenuScene extends Phaser.Scene {
	/**
	 * Unique name of the scene.
	 */
	public static Name: string = "MainMenuScene";

	preload(): void {
	}

	create(): void {
		console.log((new Date).toISOString() + ' : Entered MainMenu create()');
	}

	update() : void {

	}
}