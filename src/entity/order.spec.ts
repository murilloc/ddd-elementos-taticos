import Order from "./order";
import OrderItem from "./order-item";

describe("Order  unit tests", () => {
    it("should throw error when id is empty", () => {
        expect(() => {
            const order = new Order("", "123",[]);
        }).toThrowError("Id is required");
    });


    it("should throw error when customerId is empty", () => {
        expect(() => {
            const order = new Order("123", "",[]);
        }).toThrowError("CustomerId is required");
    });

    it("should throw error items quantity is 0", () => {
        expect(() => {
            const order = new Order("123", "123",[]);
        }).toThrowError("Item quantity must be greater than 0");
    });

    it("should calculate total", () => {
        const item1 = new OrderItem(1, "item 1", 10);
        const item2 = new OrderItem(2, "item 2", 20);
        const order = new Order("123", "123",[item1, item2]);
        expect(order.total()).toBe(30);
    });
});