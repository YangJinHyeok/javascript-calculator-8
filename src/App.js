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

        const parsedNumbers = numbers.map((num) => {
            const parsed = Number(num);
            return parsed;
        });

        const sum = parsedNumbers.reduce((acc, cur) => acc + cur, 0);
        return sum;
    }
}

export default App;
