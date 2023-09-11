import OrderItem from "../entity/order-item";
import Order from "../entity/order";
import OrderService from "./order.service";
import Customer from "../entity/customer";
describe("Order service unit test", () => {

    it("Should place an order", () => {
        const customer = new Customer("id1", "customer1");
        const orderItem1 = new OrderItem(1, "Item 1", 100, "1", 2);
        const orderItem2 = new OrderItem(2, "Item 2", 200, "2", 3);
        const order = OrderService.placeOrder(customer, [orderItem1, orderItem2]);
        expect(order.total()).toBe(800);
        expect(customer.rewardPoints).toBe(80);
    });


    it("should get total of all orders", () => {
        const orderItem1 = new OrderItem(1, "Item 1", 100, "1", 2);
        const orderItem2 = new OrderItem(2, "Item 2", 200, "2", 3);
        const orderItem3 = new OrderItem(3, "Item 3", 300, "3", 4);

        const order = new Order("id1", "customer1", [orderItem1]);
        const order2 = new Order("id2", "customer2", [orderItem2]);
        const order3 = new Order("id3", "customer3", [orderItem3]);

        const total = OrderService.total([order, order2, order3]);
        expect(total).toBe(2000);
    });
});