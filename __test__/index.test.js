import {name} from "../src/index.js";

test('name test', () => {
    let result = name("Oleg");
    expect(result).toBe("Oleg");
  });