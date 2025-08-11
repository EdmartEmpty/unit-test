import { sortHealthHeroes } from "../src/sortHealthHeroes.js";

test('sort heroes test', () => {
    let expected = [
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
        { name: 'мечник', health: 10 },
    ];

    expect(sortHealthHeroes([
        { name: 'мечник', health: 10 },
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
    ])).toEqual(expected);
});