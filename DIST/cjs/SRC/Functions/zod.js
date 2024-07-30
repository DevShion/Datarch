"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParseCast = exports.TypedSchema = void 0;
// deno-lint-ignore no-explicit-any
const TypedSchema = () => (arg) => { return arg; };
exports.TypedSchema = TypedSchema;
const ParseCast = (schema, value) => {
    schema.parse(value);
    return value;
};
exports.ParseCast = ParseCast;
