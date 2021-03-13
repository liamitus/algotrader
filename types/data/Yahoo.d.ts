export = Yahoo;
/**
 * Used to interact with the Yahoo Finance API.
 */
declare class Yahoo {
    /**
     * Returns an array of Quote objects from Yahoo Finance.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @constructor
     * @param {String} symbol
     * @param {String} range - How far back to retrieve data: [1d, 5d, 1mo, 3mo, 6mo, 1y, 2y, 5y, 10y, ytd, max]
     * @param {String} interval - How long each quote should represent: [1m, 2m, 5m, 15m, 30m, 60m, 90m, 1h, 1d, 5d, 1wk, 1mo, 3mo]
     * @param {Boolean} extended - Whether to include data from extended trading hours.
     * @returns {Promise<Array>}
     */
    static getQuotes(symbol: string, range: string, interval: string, extended: boolean): Promise<any[]>;
    /**
     * Returns a new OptionsChain object with data from Yahoo Finance.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {String} symbol
     * @returns {Promise<OptionsChain>}
     */
    static getOptionsChain(symbol: string): Promise<OptionsChain>;
}
import OptionsChain = require("../globals/OptionsChain");
