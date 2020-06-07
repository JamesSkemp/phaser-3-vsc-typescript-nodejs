import Utilities from "../Utilities";

export default class MainGame extends Phaser.Scene {
	/**
	 * Unique name of the scene.
	 */
	public static Name = "MainGame";

	public preload(): void {
		// Preload as needed.
	}

	public create(): void {
		Utilities.LogSceneMethodEntry("MainGame", "create");

		this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, "Phaser-Logo-Small");
	}
}
