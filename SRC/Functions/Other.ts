import L from "lodash";

export const Writable = <T,>(readonlyObj: T): { -readonly [key in keyof T]: T[key]; } => {
    const writableObj: { -readonly [key in keyof T]: T[key]; } = L.cloneDeep(readonlyObj);
    return writableObj;
};