export = Fundamentals;
/**
 * Market data for the given equity, such as market cap, dividend yield, P/E ratio, description, and more.
 */
declare class Fundamentals extends Robinhood {
    /**
     * Returns a fundamentals object for the given symbol.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {String} symbol
     * @returns {Promise<Fundamentals>}
     */
    static getBySymbol(symbol: string, user: any): Promise<Fundamentals>;
    /**
     * Returns an array of fundamentals objects for the symbols in the given array.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {Array} array
     * @returns {Promise<Array>}
     */
    static getBySymbolArray(array: any[], user: any): Promise<any[]>;
    /**
     * Returns a fundamentals object for the given URL.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {String} url
     * @returns {Promise<Fundamentals>}
     */
    static getByURL(url: string, user: any): Promise<Fundamentals>;
    /**
     * Creates a new Fundamentals object.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {Object} object
     */
    constructor(object: any, user: any);
    open: number;
    high: number;
    low: number;
    volume: number;
    averageVolume: number;
    _52wkHigh: number;
    _52wkLow: number;
    marketCap: number;
    dividendYield: number;
    peRatio: number;
    description: string;
    user: any;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Number}
     */
    getOpen(): number;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Number}
     */
    getHigh(): number;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Number}
     */
    getLow(): number;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Number}
     */
    getVolume(): number;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Number}
     */
    getAverageVolume(): number;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Number}
     */
    get52WeekHigh(): number;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Number}
     */
    get52WeekLow(): number;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Number}
     */
    getMarketCap(): number;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Number}
     */
    getDividendYield(): number;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Number}
     */
    getPERatio(): number;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {String}
     */
    getDescription(): string;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {String}
     */
    getHeadquarters(): string;
}
import Robinhood = require("./Robinhood");
