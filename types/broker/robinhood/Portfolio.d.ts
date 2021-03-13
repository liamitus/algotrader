export = Portfolio;
/**
 * Represents all of the user's holdings on Robinhood and allows for various queries.
 */
declare class Portfolio extends Robinhood {
    /**
     * Creates a new Portfolio object.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @constructor
     * @param {User} user
     * @param {Array} array - Created via User.getPortfolio()
     */
    constructor(user: any, array: any[]);
    user: any;
    array: any[];
    /**
     * Sells all positions in the user's portfolio at the market price.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Promise<Boolean|Error>}
     */
    sellAll(): Promise<boolean | Error>;
    /**
     * Executes a new order to reduce or increase the user's position in the given symbol by the given amount.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {String} symbol
     * @param {Number} targetQuantity
     * @returns {Promise<Order>}
     */
    setQuantity(symbol: string, targetQuantity: number): Promise<Order>;
    /**
     * Returns the total market value of all stocks held by the user.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Promise<Number>}
     */
    getStockValue(): Promise<number>;
    /**
     * Returns an array of all instruments in the user's portfolio.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Array}
     */
    getInstrumentArray(): any[];
    /**
     * Returns an array of all symbols in the user's portfolio.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Array}
     */
    getSymbols(): any[];
    /**
     * Returns the average buy price for the given symbol.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {String} symbol
     * @returns {Number}
     */
    getBuyPrice(symbol: string): number;
    /**
     * Returns the quantity owned of the given symbol.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {String} symbol
     * @returns {Number}
     */
    getQuantity(symbol: string): number;
    /**
     * Get total shares held for the given symbol.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {String} symbol
     * @returns {Number}
     */
    getSharesHeld(symbol: string): number;
    /**
     * Returns the date of original purchase for the given symbol.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {String} symbol
     * @returns {Date}
     */
    getPurchaseDate(symbol: string): Date;
    /**
     * Returns the date of last trade for the given symbol.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {String} symbol
     * @returns {Date}
     */
    getLastTradeDate(symbol: string): Date;
    /**
     * Returns an object containing the user's position in the given symbol.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {String} symbol
     * @returns {Object}
     */
    getBySymbol(symbol: string): any;
    /**
     * Returns an array of objects containing the user's positions in the given symbols.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {Array} array
     * @returns {Array<Object>}
     */
    getBySymbols(array: any[]): Array<any>;
    /**
     * Returns an array of all positions greater than the given amount.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {Number} size
     * @returns {Array<Object>}
     */
    getQuantityGreaterThan(size: number): Array<any>;
    /**
     * Returns an array of all positions less than the given amount.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {Number} size
     * @returns {Array<Object>}
     */
    getQuantityLessThan(size: number): Array<any>;
    /**
     * Returns an array of all positions equal to than the given amount.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {Number} size
     * @returns {Array<Object>}
     */
    getQuantityEqualTo(size: number): Array<any>;
    /**
     * Returns an array of all positions opened after the given date (UTC).
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {Date} date - Compared with UTC time.
     * @returns {Array<Object>}
     */
    getPurchasedAfter(date: Date): Array<any>;
    /**
     * Returns an array of all positions opened before the given date (UTC).
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {Date} date - Compared with UTC time.
     * @returns {Array<Object>}
     */
    getPurchasedBefore(date: Date): Array<any>;
    /**
     * Returns an array of all positions opened on the given date (UTC).
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {Date} date - Compared with UTC time.
     * @returns {Array<Object>}
     */
    getPurchasedOn(date: Date): Array<any>;
    /**
     * Returns an array of all positions with an average buy price greater than the given amount.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {Number} amount
     * @returns {Array<Object>}
     */
    getPriceGreaterThan(amount: number): Array<any>;
    /**
     * Returns an array of all positions with an average buy price less than the given amount.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {Number} amount
     * @returns {Array<Object>}
     */
    getPriceLessThan(amount: number): Array<any>;
    /**
     * Returns an array of all positions with an average buy price equal to the given amount.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {Number} amount
     * @returns {Array<Object>}
     */
    getPriceEqualTo(amount: number): Array<any>;
}
import Robinhood = require("./Robinhood");
import Order = require("./Order");
