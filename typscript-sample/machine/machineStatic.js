"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MachineStatic = /** @class */ (function () {
    function MachineStatic(name) {
        this.name = name;
        this._counter = 0;
    }
    Object.defineProperty(MachineStatic.prototype, "deposit", {
        get: function () {
            return this._deposit;
        },
        set: function (value) {
            this._deposit = value;
        },
        enumerable: true,
        configurable: true
    });
    MachineStatic.prototype._shaker = function (flavours) {
        var _loop_1 = function (flavour) {
            var depositObj = this_1.deposit.find((function (elm) { return elm.name == flavour; }));
            if (depositObj.quantity <= 0) {
                console.log("[" + this_1.name + "-" + this_1._counter + "]: Missing " + flavour);
                return { value: {} };
            }
            else {
                depositObj.quantity--;
            }
        };
        var this_1 = this;
        for (var _i = 0, flavours_1 = flavours; _i < flavours_1.length; _i++) {
            var flavour = flavours_1[_i];
            var state_1 = _loop_1(flavour);
            if (typeof state_1 === "object")
                return state_1.value;
        }
        ;
        console.log("[" + this.name + "-" + this._counter + "]: Mixing flavors " + flavours.map(function (flavour) { return flavour; }));
        return { flavours: flavours };
    };
    MachineStatic.prototype.makeIceCream = function (flavours) {
        this._counter++;
        var iceCream = this._shaker(flavours);
        if (!iceCream.flavours) {
            console.log("[" + this.name + "-" + this._counter + "]: No Ice Cream for you");
        }
        return iceCream;
    };
    return MachineStatic;
}());
exports.default = MachineStatic;
