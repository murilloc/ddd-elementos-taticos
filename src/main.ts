import Customer from "./entity/customer";
import Address from "./entity/address";
import OrderItem from "./entity/order-item";
import Order from "./entity/order";


// Agregação de Address em Customer
const address = new Address("Rua dos", 8, "123-3345", "São Paulo", "SP");
let customer = new Customer("123", "Smith",address);
customer.activate();


// Relacionamento entre customer e order 

// Agregação de OrderItem em Order 
const item1 = new OrderItem(1, "zzzz", 100);
const item2 = new OrderItem(2, "yyy", 200);
const order = new Order("123", "123", [item1, item2]);





