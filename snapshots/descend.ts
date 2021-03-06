import { Morphism, Ordered } from '../ramda/dist/src/$types';
import R_descend = require('../ramda/dist/src/descend');

declare const get_order_from_object: Morphism<object, Ordered>;
declare const object_a: object;
declare const object_b: object;

// @dts-jest:pass:snap -> number
R_descend(get_order_from_object)(object_a)(object_b);
// @dts-jest:pass:snap -> number
R_descend(get_order_from_object, object_a)(object_b);
// @dts-jest:pass:snap -> number
R_descend(get_order_from_object, object_a, object_b);
