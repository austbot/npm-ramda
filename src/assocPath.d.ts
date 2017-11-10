import { Path } from "./$types";
declare const assocPath: assocPath_000;
type assocPath_000 = {
    /**
     * Makes a shallow clone of an object, setting or overriding the nodes required
     * to create the given path, and placing the specific value at the tail end of
     * that path. Note that this copies and flattens prototype properties onto the
     * new object as well. All non-primitive properties are copied by reference.
     *
     * @func
     * @memberOf R
     * @since v0.8.0
     * @category Object
     * @typedefn Idx = String | Int
     * @sig [Idx] -> a -> {a} -> {a}
     * @param {Array} path the path to set
     * @param {*} val The new value
     * @param {Object} obj The object to clone
     * @return {Object} A new object equivalent to the original except along the specified path.
     * @see R.dissocPath
     * @example
     *
     *      R.assocPath(['a', 'b', 'c'], 42, {a: {b: {c: 0}}}); //=> {a: {b: {c: 42}}}
     *
     *      // Any missing or non-object keys in path will be overridden
     *      R.assocPath(['a', 'b', 'c'], 42, {a: 5}); //=> {a: {b: {c: 42}}}
     */
    (path: Path): assocPath_100;
    (path: Path, value: any): assocPath_110;
    <$SEL extends "111">(): <T extends object>(path: Path, value: any, object: T) => assocPath_111<T>;
    <$SEL extends "11">(): (path: Path, value: any) => assocPath_110;
    <$SEL extends "1">(): (path: Path) => assocPath_100;
    <T extends object>(path: Path, value: any, object: T): assocPath_111<T>;
};
type assocPath_100 = {
    (value: any): assocPath_110;
    <$SEL extends "11">(): <T extends object>(value: any, object: T) => assocPath_111<T>;
    <$SEL extends "1">(): (value: any) => assocPath_110;
    <T extends object>(value: any, object: T): assocPath_111<T>;
};
type assocPath_110 = {
    <T extends object>(object: T): assocPath_111<T>;
};
type assocPath_111<T extends object> = T;
export = assocPath;
