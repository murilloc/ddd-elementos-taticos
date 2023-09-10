import OrderItem from "./order-item";


export default class Order {
    private _id: string;
    private _customerId: string;
    private _items: OrderItem[] = [];
    private _total: 0.


    constructor(id: string, customerId: string, items: OrderItem[]) {
        this._id = id;
        this._customerId = customerId;
        this._items = items;
        this._total = 0;
        this.validate()
    }


    validate(): boolean {
        if (!this._id) {
            throw new Error("Id is required");
        }

        if (!this._customerId) {
            throw new Error("CustomerId is required");
        }

        if (!this._items || this._items.length === 0) {
            throw new Error("Item quantity must be greater than 0");
        }
        return true;
    }

    total(): number {
        return this._items.reduce((acc, item) => acc + item.price, 0);
    }

}