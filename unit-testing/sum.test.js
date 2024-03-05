const sum = require("./sum")


        //Matcher Methoden\\

        //Addition\\
describe("example Tests", () => {
    it("Should add 1 + 2 to equal 3", () => {
        const result = sum(1, 2);
        expect(result).toBe(3)
})
        //Object assigning\\
    it("object assinging", () => {
        const obj = {};
        expect(obj).toEqual({})
    })
})
        //truthy or falsy\\
describe("truthy or falsy", () => {
    it("null", () => {
        const n = null;
        expect(n).toBeFalsy()
        // expect(n).not.toBeTruthy() //Das gleiche wie Zeile 18. Allerding sollte nur 1 expect vorhanden sein!!!
        // expect(n).toBeNull() 
        // expect(n).not.toBeUndefined()
    })
})
        //Zahlen\\
describe("numbers", () => {
    it("two plus two", () => {
        const value = 2 + 2;
        expect(value).toBe(4)
        expect(value).toBeGreaterThan(3)
        expect(value).toBeGreaterThanOrEqual(4)
        expect(value).toBeLessThan(5)
        expect(value).toBeLessThanOrEqual(4)
    })
        //Floats\\
    it("adding floats", () => {
        const value = 0.1 + 0.2;
        expect(value).toBeCloseTo(0.3)
    })
})
        //Strings\\
describe("Strings", () => {
    it("there is no i in team", () => {
        expect("team").not.toMatch(/I/)
    })
})

        //Arrays\\
describe("arrays", () => {
    const shoppingLists = [
        'diapers', 'kleenex', 'trash bags', 'paper towels', 'milk'
    ]
    expect(shoppingLists).toContain('milk')
})

function compileAndroidCode() {
    throw new Error("You are using the wrong JDK")
}

describe("exceptions", () => {
    it("compiling Android goes as expected", () => {
        expect(() => compileAndroidCode()).toThrow(
            "You are using the wrong JDK"
        )
    })
})


