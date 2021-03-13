export = Query;
/**
 * Find and filter securities based on certain criteria.
 */
declare class Query {
    /**
     * Searches for a given symbol based on the given string.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {String} string - Search query.
     * @returns {Promise<Array>}
     */
    static search(string: string): Promise<any[]>;
    static getTopMovers(user: any): any;
    /**
     * Returns an array of quotes for the best performing 'x' amount of stocks.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {Number} count
     * @returns {Promise<Array>}
     */
    static getTopGainers(count: number): Promise<any[]>;
    /**
     * Returns an array of quotes for the worst performing 'x' amount of stocks.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {Number} count
     * @returns {Promise<Array>}
     */
    static getTopLosers(count: number): Promise<any[]>;
    /**
     * Returns an array of quotes for 'x' amount of stocks with the highest volume today.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {Number} count
     * @returns {Promise<Array>}
     */
    static getHighestVolume(count: number): Promise<any[]>;
    /**
     * Returns an array of quotes for options with the highest open interest.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {Number} count
     * @returns {Promise<Array>}
     */
    static getHighestOpenInterest(count: number): Promise<any[]>;
    /**
     * Returns an array of quotes for the most actively traded ETFs.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {Number} count
     * @returns {Promise<Array>}
     */
    static getTopETFs(count: number): Promise<any[]>;
    /**
     * Returns an array of equities similar to the one given.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {String} symbol
     * @returns {Promise<Array>}
     */
    static getSimilar(symbol: string): Promise<any[]>;
    /**
     * Returns an array of 'x' amount of trending symbols on Yahoo Finance.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {Number} count
     * @returns {Promise<Array>}
     */
    static getTrendingSymbols(count: number): Promise<any[]>;
    /**
     * Returns an array of objects with information on companies that are reporting earnings within 'x' number of days, along with estimates and call URLs.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {Number} days
     * @returns {Promise<Array>}
     */
    static getEarnings(days: number, user: any): Promise<any[]>;
    /**
     * Returns an object containing this company's past and future earnings data.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {String} symbol
     * @returns {Promise<Object>}
     */
    static getEarningsBySymbol(symbol: string): Promise<any>;
}
