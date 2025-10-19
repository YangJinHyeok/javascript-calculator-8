import { Console } from "@woowacourse/mission-utils";

class App {
    async run() {
        try {
            const input = await Console.readLineAsync(
                "덧셈할 문자열을 입력해 주세요.\n"
            );
            const result = this.calculate(input);
            Console.print(`결과 : ${result}`);
        } catch (error) {
            if (error instanceof Error && error.message.startsWith("[ERROR]")) {
                throw error;
            }
        }
    }

    calculate(input) {
        if (!input || input.trim() === "") return 0;

        let numbers = [];

        if (input.startsWith("//")) {
            const [_, custom, rest] = input.match(/^\/\/(.)\\n(.*)$/) || [];
            if (!custom || !rest) {
                throw new Error(
                    "[ERROR] 커스텀 구분자 형식이 올바르지 않습니다."
                );
            }
            numbers = rest.split(custom);
        } else {
            numbers = input.split(/[,|:]/);
        }

        const parsedNumbers = numbers.map((num) => {
            if (num === "") throw new Error("[ERROR] 잘못된 입력입니다.");
            const parsed = Number(num);
            if (isNaN(parsed))
                throw new Error("[ERROR] 숫자가 아닌 값이 포함되어 있습니다.");
            if (parsed < 0)
                throw new Error("[ERROR] 음수는 입력할 수 없습니다.");
            return parsed;
        });

        const sum = parsedNumbers.reduce((acc, cur) => acc + cur, 0);
        return sum;
    }
}

export default App;
