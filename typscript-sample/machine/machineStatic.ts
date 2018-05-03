import IMachine, { Flavours, IceCream, IDepositFlavour } from './models';

export default class MachineStatic implements IMachine {

    private _deposit: any;
    private _counter: number = 0;

    constructor(public name: string) {
    }

    set deposit(value) {
        this._deposit = value;
    }

    get deposit() {
        return this._deposit;
    }

    protected _shaker(flavours: Flavours[]): IceCream {

        for (let flavour of flavours) {
            let depositObj: IDepositFlavour = this.deposit.find((elm => elm.name == flavour));
            if (depositObj.quantity <= 0) {
                console.log(`[${this.name}-${this._counter}]: Missing ${flavour}`);
                return <IceCream>{}
            } else {
                depositObj.quantity--;
            }
        };

        console.log(`[${this.name}-${this._counter}]: Mixing flavors ${flavours.map(flavour => flavour)}`);
        return <IceCream>{ flavours }
    }

    makeIceCream(flavours: Flavours[]): IceCream {
        this._counter++;
        let iceCream = this._shaker(flavours);

        if (!iceCream.flavours) {
            console.log(`[${this.name}-${this._counter}]: No Ice Cream for you`);
        }

        return iceCream;
    }
}