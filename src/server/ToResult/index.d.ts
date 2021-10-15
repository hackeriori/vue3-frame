import GetInfoFunType from "./types";
export default class ToResult<T> {
    data: T | undefined;
    err: any;
    getInfoFun: GetInfoFunType;
    constructor(data: T | undefined, err: any, _getInfoFun?: GetInfoFunType);
    getInfo<P = T>(): P | undefined;
    getInfos<P>(): P[] | undefined;
}
