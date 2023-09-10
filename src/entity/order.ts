import OrderItem from "./order-item";


export default class Order {
    _id: string;
    // Direfentes agregados a relação é pelo Id
    _customerId: string;
    // Mesmo agregado 
    _items: OrderItem[] = [];
    _total: number;


    constructor(id: string, customerId: string, items: OrderItem[]) {
        this._id = id;
        this._customerId = customerId;
        this._items = items;
        this._total = this.total();
    }

    total(): number {
        return this._items.reduce((total, item) => total + item._price, 0);

    }

}