import { display } from './dom-interaction/display.mjs'
import { toggleTheme } from './dom-interaction/toggle-theme.mjs'

class Main {
	static main() {
		display()
		toggleTheme()
	}
}

Main.main()
