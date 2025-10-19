import { Console } from "@woowacourse/mission-utils";

class App {
    async run() {
        try {
            const input = await Console.readLineAsync(
                "덧셈할 문자열을 입력해 주세요.\n"
            );
    calculate(input) {
        let numbers = [];

        if (input.startsWith("//")) {
            const [_, custom, rest] = input.match(/^\/\/(.)\\n(.*)$/) || [];
            }
            numbers = rest.split(custom);
        } else {
            numbers = input.split(/[,|:]/);
        }
}

export default App;
