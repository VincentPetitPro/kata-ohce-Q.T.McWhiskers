const prompt = require("prompt-sync")();
const reverse = require("./ohce").reverse;

class ConsoleInteractor {
	readInput() {
		return prompt("");
	}

	printMessage(message, isTest) {
		if (isTest) {
			console.log("printMessage", message);
			return message;
		} else {
			console.log(message);
		}
	}
}

class UI {
	constructor() {
		this.interactor = new ConsoleInteractor();
	}

	mainLoop() {
		this.mainLoopImpl(this.interactor.readInput(), false);
	}

	mainLoopTest(testInput) {
		this.mainLoopImpl(testInput, true);
	}

	mainLoopImpl(sInput, isTest) {
		do {
			const input = sInput;
			if (input === "quit") {
				break;
			}
			const reversed = reverse(input);
			this.interactor.printMessage(reversed, isTest);
			if (input === reversed) {
				this.interactor.printMessage("That was a palindrome!", isTest);
			}
		} while (!isTest);
	}
}

module.exports = { UI };
