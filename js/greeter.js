class SystemClock {
	currentHour() {
		const date = new Date();
		return date.getHours();
	}
}

class Greeter {
	constructor() {
		this.clock = new SystemClock();
	}

	greetImpl(sCurrentHour) {
		const currentHour = sCurrentHour;
		if (currentHour >= 6 && currentHour < 12) {
			return "Good morning";
		}
		if (currentHour >= 12 && currentHour <= 19) {
			return "Good afternoon";
		}
		if (currentHour >= 20 || currentHour < 6) {
			return "Good night";
		}
	}

	greet() {
		return this.greetImpl(this.clock.currentHour());
	}

	greetTest(hour) {
		return this.greetImpl(hour);
	}
}

module.exports = { Greeter };
