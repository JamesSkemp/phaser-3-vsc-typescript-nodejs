import Preloader from "./Preloader";

export default class Boot extends Phaser.Scene {
	/**
	 * Unique name of the scene.
	 */
	public static Name: string = "Boot";

	preload(): void {
	}

	create(): void {
		console.log((new Date).toISOString() + ' : Entered Boot create()');

		this.scene.start(Preloader.Name);
	}
}