const test = require("tape");
const UI = require("../ui").UI;

test("main loop", (t) => {
	/* TODO
    Given the following inputs:
    - hello
    - oto
    - quit

    Check that the following messages are printed:
    - olleh
    - oto
    - That was a palindrome!
   */
	const ui = new UI();

	const hello = ui.mainLoopTest("hello");
	const oto = ui.mainLoopTest("oto");
	const quit = ui.mainLoopTest("quit");

	console.log(hello, oto, quit);

	if (hello === "olleh") {
		t.pass("Test passed");
	} else {
		t.fail("Test failed");
	}
	t.end();
});
