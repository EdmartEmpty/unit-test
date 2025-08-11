import { getHealthLineColor } from "../src/getColorHealthLine.js";


test.each([[{ name: 'Маг', health: 90 }, "healthy"], [{ name: 'Воин', health: 30 }, "wounded"],
[{ name: 'Разбойник', health: 10 }, "critical"]])(
    "Имя класса %j ожидается %s", (object, expected) => {
        console.log(object);
        expect(getHealthLineColor(object)).toBe(expected);
    }
)


