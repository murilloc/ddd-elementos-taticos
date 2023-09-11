import Address from "./address";


export default class Customer {
    private _id: string;
    private _name: string;
    private _address!: Address;
    private _active: boolean = false;
    private _rewardPoints: number = 0;

    constructor(id: string, name: string) {
        this._id = id;
        this._name = name;
        this.validate();
    }

    get id() {
        return this._id;
    }


    validate() {
        if (this._id.length === 0) {
            throw new Error("Id is required");
        }

        if (this._name.length === 0) {
            throw new Error("Name is required");
        }
    }

    activate() {
        if (this._address === undefined) {
            throw new Error("Address is required to activate a customer");
        }
        this._active = true;
    }

    deactivate() {
        this._active = false;
    }

    changeName(name: string) {
        this._name = name;
        this.validate();
    }

    get name() {
        return this._name;
    }

    get isActive() {
        return this._active;
    }

    set Address(address: Address) {
        this._address = address;
    }

    addRewardPoints(points: number) {
        this._rewardPoints += points;
    }

    get rewardPoints(): number {
        return this._rewardPoints;
    }

}
