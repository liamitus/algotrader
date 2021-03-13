export = Instrument;
/**
 * Represents a security traded on Robinhood.
 */
declare class Instrument extends Robinhood {
    /**
     * Returns an array of all available instruments.
     * WARNING: this will take a while!
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Promise<Array>}
     */
    static getAll(): Promise<any[]>;
    /**
     * Returns an instrument object for the specified symbol.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {String} symbol
     * @returns {Promise<Instrument>}
     */
    static getBySymbol(symbol: string, user: any): Promise<Instrument>;
    /**
     * Returns an instrument object for the specified Robinhood instrument ID.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {String} id
     * @returns {Promise<Instrument>}
     */
    static getByID(id: string, user: any): Promise<Instrument>;
    /**
     * Returns an instrument object for the specified instrument URL.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {String} instrumentURL
     * @returns {Promise<Instrument>}
     */
    static getByURL(instrumentURL: string, user: any): Promise<Instrument>;
    /**
     * Returns an array of Instruments for 10 of the top moving S&P 500 equities.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {String} direction - Possible options: [up, down]
     * @returns {Promise<Instrument>}
     */
    static getTopMoving(direction: string, user: any): Promise<Instrument>;
    /**
     * Returns an array of instrument objects for the specified array of IDs.
     *
     * Note: large arrays will take longer to process and are capped at 50 per request, so multiple
     * requests will be sent as the function iterates through the array.
     *
     * @author Torrey Leonard <https://github.com/Ladinn>
     *
     * @param {Array} ids
     * @returns {Promise<Array>}
     */
    static getByIdArray(ids: any[], user: any): Promise<any[]>;
    /**
     * Returns an array of known categories that can be used with getByCategory(). This list is non-exhaustive.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Array<String>}
     */
    static getCategories(): Array<string>;
    /**
     * Returns an array of Instruments related to the given category.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {String} category - For possible options see getCategories().
     * @returns {Promise<Array>}
     */
    static getByCategory(category: string, user: any): Promise<any[]>;
    /**
     * Returns an array of Instruments for the top 100 most popular equities on Robinhood.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Promise<Array>}
     */
    static getMostPopular(user: any): Promise<any[]>;
    /**
     * Returns an array of Instruments that have upcoming earnings.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Promise.<Array>}
     */
    static getUpcomingEarnings(user: any): Promise<any[]>;
    /**
     * Returns an array of instruments for stocks from Robinhood's recommendations for the given user.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {User} user - Authenticated user object
     * @returns {Promise.<Array>}
     */
    static getRecommendations(user: User): Promise<any[]>;
    /**
     * Creates a new Instrument object.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @constructor
     * @param {Object} object
     */
    constructor(object: any, user: any);
    name: string;
    simpleName: string;
    symbol: string;
    listDate: Date;
    country: string;
    tradeable: boolean;
    type: string;
    bloomberg: string;
    state: string;
    id: string;
    urls: {
        market: string;
        fundamentals: string;
        quote: string;
        instrument: string;
        splits: string;
    };
    margin: {
        initialRatio: number;
        dayTradeRatio: number;
        maintenanceRatio: number;
    };
    user: any;
    /**
     * Fills the instrument object with market, fundamental, quote, and split data. Returns an array of Market, Fundamentals, Quote, and Splits objects.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {User} user - Authenticated user object
     * @returns {Promise<Array>}
     */
    populate(): Promise<any[]>;
    /**
     * Returns an object with information on the market that this instrument trades on.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Promise<Market>}
     */
    getMarket(): Promise<Market>;
    /**
     * Returns a new Fundamentals object with information such as open, high, low, close, volume, market cap, and more, on this instrument.
     *
     * @author Torrey Leonard <https://github.com/Ladinn>
     *
     * @returns {Promise<Fundamentals>}
     */
    getFundamentals(): Promise<Fundamentals>;
    /**
     * Returns an object with a real-time quote on this instrument.
     *
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @author Colin Gillingham <https://github.com/Gillinghammer> (Added user authentication after Robinhood API update - issue #11)
     *
     * @param {User} user - Authenticated user object
     * @returns {Promise<Quote>}
     */
    getQuote(): Promise<Quote>;
    /**
     * Returns an object containing details on past stock splits.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Promise<Object>}
     */
    getSplits(): Promise<any>;
    /**
     * Returns an object containing this company's past and future earnings data.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Promise<Object>}
     */
    getEarnings(): Promise<any>;
    /**
     * Returns the high, low, and average prices paid for the instrument by other Robinhood users.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @author rclai (Discovered API endpoint)
     * @returns {Promise<Object>}
     */
    getPricesPaid(): Promise<any>;
    /**
     * Returns the total amount of open positions on this instrument among all Robinhood users.
     *
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @author rclai (Discovered API endpoint)
     *
     * @returns {Promise<Number>}
     */
    getPopularity(): Promise<number>;
    /**
     * Returns an object containing buy hold, and sell ratings from major financial institutions, along with text describing the rating.
     *
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @author rclai (Discovered API endpoint)
     *
     * @returns {Promise<Object>}
     */
    getRatings(): Promise<any>;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {String}
     */
    getName(): string;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {String}
     */
    getSimpleName(): string;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {String}
     */
    getSymbol(): string;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Date}
     */
    getListDate(): Date;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {String}
     */
    getCountry(): string;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {String}
     */
    getType(): string;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {String}
     */
    getBloombergID(): string;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {String}
     */
    getState(): string;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {String}
     */
    getID(): string;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Number}
     */
    getMarginInitialRatio(): number;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Number}
     */
    getDayTradeRatio(): number;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Number}
     */
    getMaintenanceRatio(): number;
    /**
     * Checks if the instrument is able to be traded.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Boolean}
     */
    isTradeable(): boolean;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {boolean}
     */
    isActive(): boolean;
    /**
     * Checks if the instrument is a stock.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Boolean}
     */
    isStock(): boolean;
    /**
     * Checks if the instrument is an exchange traded product.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Boolean}
     */
    isETP(): boolean;
    /**
     * Checks if the instrument is an American Depositary Receipt. Typically applies to foreign companies.
     * https://www.investopedia.com/terms/a/adr.asp
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Boolean}
     */
    isADR(): boolean;
    /**
     * Check whether another instance of Instrument equals this instance.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {Instrument} otherInstrument
     * @returns {Boolean}
     */
    equals(otherInstrument: Instrument): boolean;
}
import Robinhood = require("./Robinhood");
import Market = require("./Market");
import Fundamentals = require("./Fundamentals");
import Quote = require("../../globals/Quote");
import User = require("./Fundamentals");
