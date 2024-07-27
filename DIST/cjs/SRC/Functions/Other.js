"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Writable = void 0;
const lodash_1 = __importDefault(require("lodash"));
const Writable = (readonlyObj) => {
    const writableObj = lodash_1.default.cloneDeep(readonlyObj);
    return writableObj;
};
exports.Writable = Writable;
