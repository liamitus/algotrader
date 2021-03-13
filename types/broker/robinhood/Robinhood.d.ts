export = Robinhood;
/**
 * Robinhood superclass.
 * @author Torrey Leonard <https://github.com/Ladinn>
 * @private
 */
declare class Robinhood {
    static request(options: any, callback: any): any;
    static handleResponse(error: any, response: any, body: any, token: any, resolve: any, reject: any): void;
    url: string;
}
