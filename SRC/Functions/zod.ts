import { z } from "zod";

// deno-lint-ignore no-explicit-any
export const TypedSchema = <T>() => <S extends z.ZodType<T, any, any>>(arg: S) => { return arg };

export const ParseCast = <T>(
    schema: z.ZodType<T, any, any>,
    value: any
) => {
    schema.parse(value);
    return value as T;
};