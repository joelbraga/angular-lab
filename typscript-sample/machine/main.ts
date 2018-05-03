import { Flavours } from './models';
import MachineStatic from "./machineStatic";
import MachineMover from './machineMover';

let ms = new MachineStatic('My Great Machine');
ms.deposit = [{
    name: Flavours.BAUNILHA,
    quantity: 10,
}, {
    name: Flavours.MORANGO,
    quantity: 2,
}, {
    name: Flavours.LIMA,
    quantity: 20,
}, {
    name: Flavours.CHOCOLATE,
    quantity: 1,
}]
ms.makeIceCream(<Flavours[]>[Flavours.BAUNILHA, Flavours.MORANGO])
ms.makeIceCream(<Flavours[]>[Flavours.BAUNILHA, Flavours.MORANGO])
ms.makeIceCream(<Flavours[]>[Flavours.BAUNILHA, Flavours.MORANGO])

let mm = new MachineMover('My Great Mover');
mm.deposit = [{
    name: Flavours.BAUNILHA,
    quantity: 0,
}, {
    name: Flavours.MORANGO,
    quantity: 0,
}, {
    name: Flavours.LIMA,
    quantity: 0,
}, {
    name: Flavours.CHOCOLATE,
    quantity: 0,
}]
mm.move(10);
mm.makeIceCream(<Flavours[]>[Flavours.CHOCOLATE, Flavours.LIMA])
