export default class MainMenuScene extends Phaser.Scene {
	/**
	 * Unique name of the scene.
	 */
	public static Name: string = "MainMenuScene";

	preload(): void {
		this.load.path = 'assets/';
		this.load.image('Phaser-Logo-Small');
	}

	create(): void {
		console.log((new Date).toISOString() + ' : Entered MainMenu create()');

		this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'Phaser-Logo-Small');
	}

	update() : void {

	}
}