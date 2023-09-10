import Product from "./product";

describe("Product unit tests", () => {
    it("should throw error when id is empty", () => {
        expect(() => {
            const product = new Product("", "Product A", 150);

        }).toThrowError("Id is required");
    });


    it("should throw error when name is empty", () => {
        expect(() => {
            const product = new Product("123", "", 150);

        }).toThrowError("Name is required");
    });

    it("should throw error when price is <= 0", () => {
        expect(() => {
            const product = new Product("123", "Product A", 0);

        }).toThrowError("Price must be greater than 0");

        expect(() => {
            const product = new Product("123", "Product A", -1);

        }).toThrowError("Price must be greater than 0");
    });

    it("should change name", () => {
        const product = new Product("123", "Product A", 150);
        product.changeName("Product B");
        expect(product.name).toBe("Product B");
    });

    it("should change price", () => {
        const product = new Product("123", "Product A", 150);
        product.changePrice(200);
        expect(product.price).toBe(200);
    });
});

