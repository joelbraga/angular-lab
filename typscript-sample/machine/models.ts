export default interface IMachine {
    deposit: any;
    name: string;
    makeIceCream(flavors: Flavours[]): IceCream;
}

export interface IceCream {
    flavours: Flavours[];
}

export enum Flavours {
    MORANGO = 'Morango',
    BAUNILHA = 'Baunilha',
    CHOCOLATE = 'Chocolate',
    LIMA = 'Lima'
}

export interface IDepositFlavour {
    name: string;
    quantity: number;
}
