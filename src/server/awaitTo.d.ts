import ToResult from "./ToResult";
import GetInfoFunType from "./ToResult/types";
export default class To {
    private readonly messenger;
    private readonly getInfoFun;
    constructor(getInfoFunInstance?: GetInfoFunType);
    async<T>(promise: Promise<T>, silence?: boolean): Promise<ToResult<T>>;
    showMessage(message: string): void;
}
