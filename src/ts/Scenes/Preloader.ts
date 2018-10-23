import SplashScreen from "./SplashScreen";
import Utilities from "../Utilities";

export default class Preloader extends Phaser.Scene {
	/**
	 * Unique name of the scene.
	 */
	public static Name: string = "Preloader";

	public preload(): void {
		this.load.path = "assets/";
		this.load.image("phaser_pixel_medium_flat");
	}

	public create(): void {
		Utilities.LogSceneMethodEntry("Preloader", "create");

		this.scene.start(SplashScreen.Name);
	}

	public update(): void {
	}
}
