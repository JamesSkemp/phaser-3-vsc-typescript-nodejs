import Utilities from "../Utilities";

export default class MainMenu extends Phaser.Scene {
	/**
	 * Unique name of the scene.
	 */
	public static Name: string = "MainMenu";

	public preload(): void {
		// Preload as needed.
	}

	public create(): void {
		Utilities.LogSceneMethodEntry("MainMenu", "create");

		this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, "Phaser-Logo-Small");
	}

	public update(): void {
		// Update logic, as needed.
	}
}
