import R_and = require('../ramda/dist/src/and');

declare const string: string;
declare const number: number;

// @dts-jest:pass:snap -> string | number
R_and(string)(number);
// @dts-jest:pass:snap -> string | number
R_and(string, number);
