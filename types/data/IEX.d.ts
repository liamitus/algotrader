export = IEX;
/**
 * Used to interact with the IEX api. See the official documentation for more: https://iextrading.com/developer/docs/#last
 */
declare class IEX {
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @private
     */
    private static _request;
    /**
     * Returns a market object.
     * @author Colin Gillingham <https://github.com/Gillinghammer>
     * @returns {Promise<Market>}
     */
    static getMarket(): Promise<any>;
    /**
     * Returns a quote object for the given symbol.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {String} symbol
     * @returns {Promise<Quote>}
     */
    static getQuote(symbol: string): Promise<Quote>;
    /**
     * Returns an array of quote objects for the given symbols.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {String[]} symbolArray - An array of symbols to query
     * @returns {Promise<Quote[]>}
     */
    static getBatchQuotes(symbolArray: string[]): Promise<Quote[]>;
    /**
     * Returns an object containing data on the given company.
     * https://iextrading.com/developer/docs/#company
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {String} symbol
     * @returns {Promise<Object>}
     */
    static getCompanyDetails(symbol: string): Promise<any>;
    /**
     * Returns an object containing data on dividends issued by the given company.
     * https://iextrading.com/developer/docs/#dividends
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {String} symbol
     * @returns {Promise<Object>}
     */
    static getDividends(symbol: string): Promise<any>;
    /**
     * Returns an object containing data on the four most recent earnings reports by the given company.
     * https://iextrading.com/developer/docs/#earnings
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {String} symbol
     * @returns {Promise<Object>}
     */
    static getEarnings(symbol: string): Promise<any>;
    /**
     * Returns an object containing data on the given company's income statement, balance sheet, and cash flow from the four most recent reported quarters.
     * https://iextrading.com/developer/docs/#financials
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {String} symbol
     * @returns {Promise<Object>}
     */
    static getFinancials(symbol: string): Promise<any>;
    /**
     * Returns an object containing data on the given company's market cap, beta, 52-week high & low, change, short intereste, dividend rate, float, EBITDA, cash, and more.
     * https://iextrading.com/developer/docs/#key-stats
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {String} symbol
     * @returns {Promise<Object>}
     */
    static getStats(symbol: string): Promise<any>;
    /**
     * Returns a string containing a URL endpoint with the given company's logo.
     * https://iextrading.com/developer/docs/#logo
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {String} symbol
     * @returns {Promise<String>}
     */
    static getLogo(symbol: string): Promise<string>;
    /**
     * Returns an array of news objects for the given symbol.
     * https://iextrading.com/developer/docs/#logo
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {String} symbol
     * @returns {Promise<News[]>}
     */
    static getNews(symbol: string): Promise<News[]>;
    /**
     * Returns an array of peer tickers as defined by IEX.
     * https://iextrading.com/developer/docs/#peers
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {String} symbol
     * @returns {Promise<String[]>}
     */
    static getPeers(symbol: string): Promise<string[]>;
    /**
     * Returns an object containing data on stock splits issued by the given company.
     * https://iextrading.com/developer/docs/#dividends
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {String} symbol
     * @returns {Promise<Object>}
     */
    static getSplits(symbol: string): Promise<any>;
    /**
     * This returns 15 minute delayed and 30 day average consolidated volume percentage of a stock, by market.
     * This call will always return 13 values, and will be sorted in ascending order by current day trading volume percentage.
     * https://iextrading.com/developer/docs/#volume-by-venue
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {String} symbol
     * @returns {Promise<String[]>}
     */
    static getVolumeByVenue(symbol: string): Promise<string[]>;
    /**
     * Returns an array of symbols IEX supports for trading.
     * https://iextrading.com/developer/docs/#symbols
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Promise<Object[]>}
     */
    static getAllSymbols(): Promise<any[]>;
}
import Quote = require("../globals/Quote");
import News = require("./News");
