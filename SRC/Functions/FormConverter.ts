export const FormToBody = <
	T
>(form: {
	[key in keyof T]: string;
}): T => {
	const body = (() => {
		return Object.fromEntries(Object.keys(form).map((key) => {
			return [key, JSON.parse(form[key as keyof T])];
		}));
	})() as T;
	return body;
};

export type ObjectToForm<T> = { [key in keyof T]: string };