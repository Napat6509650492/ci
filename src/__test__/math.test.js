const math = require('../math')

describe("save",()=>{
    it("test add function",()=>{
        expect(math.add(1,1)).toBe(2)
    })

    it("test subtract function",()=>{
        expect(math.subtract(1,1)).toBe(0)
    })

    it("test multipy function",()=>{
        expect(math.multiply(2,3)).toBe(6)
    })

})