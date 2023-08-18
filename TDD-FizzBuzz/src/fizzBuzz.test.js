import { fizzBuzz } from "../src/fizzBuzz";

//primera premisa
test("Si el número es 3, debe imprimir Fizz", () => {
    const result = fizzBuzz(3);
    expect(result).toBe('Fizz');
})