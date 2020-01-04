export const required = value => value ? undefined : "Field is required";

const maxLength = max => value =>
    value && value.length > max ? `Max length is ${max} symbols` : undefined;
export const maxLength30 = maxLength(30);

const minLength = min => value =>
    value && value.length < min ? `Min length is ${min} sympols` : undefined;
export const minLength2 = minLength(2);
