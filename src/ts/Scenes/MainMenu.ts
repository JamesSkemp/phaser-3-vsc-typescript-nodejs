import Utilities from "../Utilities";
import MainGame from "./MainGame";
import MainSettings from "./MainSettings";

export default class MainMenu extends Phaser.Scene {
	/**
	 * Unique name of the scene.
	 */
	public static Name = "MainMenu";

	public preload(): void {
		// Preload as needed.
	}

	public create(): void {
		Utilities.LogSceneMethodEntry("MainMenu", "create");
		const textYPosition = this.cameras.main.height / 3;

		const newGameText = this.add.text(this.cameras.main.centerX, textYPosition, "Start");
		newGameText
			.setFontFamily("monospace")
			.setFontSize(40)
			.setFill("#fff")
			.setAlign("center")
			.setOrigin(0.5);
		newGameText.setInteractive();
		newGameText.on("pointerdown", () => { this.scene.start(MainGame.Name); }, this);

		const settingsText = this.add.text(this.cameras.main.centerX, textYPosition * 2, "Settings");
		settingsText.setOrigin(0.5);
		settingsText.setFontFamily("monospace").setFontSize(30).setFill("#fff");
		settingsText.setInteractive();
		settingsText.on("pointerdown", () => { this.scene.start(MainSettings.Name); }, this);
	}

	public update(): void {
		// Update logic, as needed.
	}
}
