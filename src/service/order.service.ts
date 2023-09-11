import Order from "../entity/order";
import Customer from "../entity/customer";
import OrderItem from "../entity/order-item";
import {v4 as uuid} from "uuid";

export default class OrderService {
    static total(orders: Order[]) {
        return orders.reduce((acc, order) => acc + order.total(), 0);
    }

    static placeOrder(customer: Customer, orderItems: OrderItem[]): Order {

        if (orderItems.length === 0) {
            throw new Error("Order must have at least one item");
        }
        const order = new Order(uuid(), customer.id, orderItems);
        customer.addRewardPoints(order.total() * 0.1);
        return order;
    }
}