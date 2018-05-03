import MachineStatic from "./machineStatic";
import { Flavours } from "./models";

export default class MachineMover extends MachineStatic {

    move(km: number): void {
        console.log(`${this.name}: Moving ${km}`);
    }
}