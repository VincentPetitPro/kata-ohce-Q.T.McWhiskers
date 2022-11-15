const test = require("tape");
const Greeter = require("../greeter").Greeter;

test('should say "good night" at midnight', (t) => {
	const greeter = new Greeter();
	const greeting = greeter.greetTest(0);
	console.log(greeting);
	if (greeting === "Good night") {
		t.pass("Did say Good night");
	} else {
		t.fail("Did not say Good night at midnight");
	}
	t.end();
});

test("should never return undefined", (t) => {
	// TODO : for each hour from 0 to 23, check that Greeter.greet() never returns undefined
	for (let i = 0; i < 23; i++) {
		const greeter = new Greeter();
		const greeting = greeter.greetTest(i);
		if (greeting === undefined) {
			t.fail("Returned undefined at hour  " + i);
		}
	}
	t.pass("Did not return undefined");
	t.end();
});
