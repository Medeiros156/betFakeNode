"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const userController_1 = require("../controllers/userController");
class User {
    constructor(data) {
        this.email = data.email;
        this.wallet = data.wallet;
    }
    createUser() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield (0, userController_1.storeUserData)(this.email);
            }
            catch (error) {
                console.error('Error storing bet data:', error);
                throw error;
            }
        });
    }
}
exports.User = User;
