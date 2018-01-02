export class Item {
    private _productNo: number;
    private _productName: string;
    private _price: number;
    private _releasedDate: Date;
    private _updateDate: Date;
    constructor() {
    }

    public get updateDate(): Date {
        return this._updateDate;
    }

    public set updateDate(value: Date) {
        this._updateDate = value;
    }

    public get productNo(): number {
        return this._productNo;
    }

    public set productNo(value: number) {
        this._productNo = value;
    }

    public get productName(): string {
        return this._productName;
    }

    public set productName(value: string) {
        this._productName = value;
    }
    public get price(): number {
        return this._price;
    }

    public set price(value: number) {
        this._price = value;
    }

    public get releasedDate(): Date {
        return this._releasedDate;
    }

    public set releasedDate(value: Date) {
        this._releasedDate = value;
    }



}

