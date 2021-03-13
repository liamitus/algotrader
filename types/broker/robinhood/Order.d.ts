export = Order;
/**
 * Represents and executes an order for the given instrument.
 */
declare class Order extends Robinhood {
    /**
     * Returns a new order object for the specified order ID, if found.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {User} user
     * @param {String} orderID
     * @returns {Promise<Order>}
     */
    static getByOrderID(user: any, orderID: string): Promise<Order>;
    /**
     * Returns an array of recent orders for the given user object.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {User} user
     * @returns {Promise<Array>}
     */
    static getRecentOrders(user: any): Promise<any[]>;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param user
     * @returns {Promise<any>}
     */
    static cancelOpenOrders(user: any): Promise<any>;
    /**
     * Creates a new Order object.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @constructor
     * @param {User} user
     * @param {Object} object
     * @property {Instrument} instrument
     * @property {Quote} quote
     * @property {String} type - 'limit' | 'market
     * @property {String} timeInForce - 'gfd' | 'gtc' | 'ioc' | 'opg'
     * @property {String} trigger - 'immediate' | 'stop'
     * @property {Number|Null} stopPrice - If trigger is 'stop,' this must be specified. If not, this should be null.
     * @property {Number} quantity
     * @property {String} side - 'buy' | 'sell'
     * @property {Boolean} extendedHours - Whether the order should be allowed to execute when exchanges are closed (9-9:30 AM, 4-6 PM)
     * @property {Boolean} overrideDayTradeCheck - Whether to override Pattern Day Trader protection.
     */
    constructor(user: any, object: any);
    user: any;
    response: {
        executions: any[];
        timeInForce: string;
        fees: number;
        id: string;
        quantity: number;
        averagePrice: number;
        cumulativeQuantity: number;
        stopPrice: number;
        rejectReason: string;
        state: string;
        trigger: string;
        type: string;
        overrideDayTradeCheck: boolean;
        price: number;
        clientID: string;
        extendedHours: boolean;
        side: string;
        dates: {
            created: Date;
            lastTransaction: Date;
            updated: Date;
        };
        urls: {
            cancel: string;
            instrument: string;
            account: string;
            order: string;
            position: string;
        };
    };
    executed: boolean;
    order: any;
    /**
     * Parse an executed order.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @private
     */
    private _parse;
    /**
     * Submits an order to Robinhood to be executed by the exchange.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Promise<Object>}
     */
    submit(): Promise<any>;
    /**
     * Attempts to cancel an order.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Promise<Object>}
     */
    cancel(): Promise<any>;
    /**
     * If an order has been executed, this will return the response object.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Object|Null}
     */
    getResponse(): any | null;
}
import Robinhood = require("./Robinhood");
