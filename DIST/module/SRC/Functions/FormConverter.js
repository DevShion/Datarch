"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormToBody = void 0;
const FormToBody = (form) => {
    const body = (() => {
        return Object.fromEntries(Object.keys(form).map((key) => {
            return [key, JSON.parse(form[key])];
        }));
    })();
    return body;
};
exports.FormToBody = FormToBody;
