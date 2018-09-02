This directory could include any scenes (previously states) the game might have.

This project includes the following scenes:

- Boot:
	- Adds default settings for the game, including multitouch and device-specific settings.
	- Could also preload any assets need to display a progress bar during asset preloading.
- Preloader:
	- Used to preload any assets that might be used by the game.
- MainMenu:
	- Could display a main menu to move to additional scenes.

While the scenes log basic information to the console during these scenes, these can of course be removed without issue.

**Game.ts** is where these scenes are defined for use by the game.
