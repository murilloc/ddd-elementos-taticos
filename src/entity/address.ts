export default class Address{
    _street: string;
    _number: number;
    _zipCode: string;
    _city: string;
    _state: string;

    constructor(street: string, number: number, zipCode: string, city: string, state: string) {
        this._street = street;
        this._number = number;
        this._zipCode = zipCode;
        this._city = city;
        this._state = state;
    }

   
}