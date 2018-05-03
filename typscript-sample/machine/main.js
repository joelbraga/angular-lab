"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = require("./models");
var machineStatic_1 = require("./machineStatic");
var machineMover_1 = require("./machineMover");
var ms = new machineStatic_1.default('My Great Machine');
ms.deposit = [{
        name: models_1.Flavours.BAUNILHA,
        quantity: 10,
    }, {
        name: models_1.Flavours.MORANGO,
        quantity: 2,
    }, {
        name: models_1.Flavours.LIMA,
        quantity: 20,
    }, {
        name: models_1.Flavours.CHOCOLATE,
        quantity: 1,
    }];
ms.makeIceCream([models_1.Flavours.BAUNILHA, models_1.Flavours.MORANGO]);
ms.makeIceCream([models_1.Flavours.BAUNILHA, models_1.Flavours.MORANGO]);
ms.makeIceCream([models_1.Flavours.BAUNILHA, models_1.Flavours.MORANGO]);
var mm = new machineMover_1.default('My Great Mover');
mm.deposit = [{
        name: models_1.Flavours.BAUNILHA,
        quantity: 0,
    }, {
        name: models_1.Flavours.MORANGO,
        quantity: 0,
    }, {
        name: models_1.Flavours.LIMA,
        quantity: 0,
    }, {
        name: models_1.Flavours.CHOCOLATE,
        quantity: 0,
    }];
mm.move(10);
mm.makeIceCream([models_1.Flavours.CHOCOLATE, models_1.Flavours.LIMA]);
