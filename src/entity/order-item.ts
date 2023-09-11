export default class OrderItem {
    private _id: number;
    private _name: string;
    private _price: number;
    private _quantity: number = 1;
    private _productId: string;

    constructor(id: number, name: string, price: number, productId: string, quantity: number) {
        this._id = id;
        this._name = name;
        this._price = price;
        this._productId = productId;
        this._quantity = quantity;
    }

    get price(): number {
        return this._price * this._quantity;
    }

    orderItemTotal(): number {
        return this._price * this._quantity;
    }

    get quantity(): number {
        return this._quantity;
    }

}