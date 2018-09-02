import MainMenu from "./MainMenu";

export default class Preloader extends Phaser.Scene {
	/**
	 * Unique name of the scene.
	 */
	public static Name: string = "Preloader";

	preload(): void {
		this.load.path = 'assets/';
	}

	create(): void {
		console.log((new Date).toISOString() + ' : Entered Preloader create()');

		this.scene.start(MainMenu.Name);
	}

	update(): void {
	}
}