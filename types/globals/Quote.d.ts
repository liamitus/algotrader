export = Quote;
declare class Quote {
    /**
     * Returns the volume weighted average price (VWAP) for the given quote array.
     * https://www.investopedia.com/terms/v/vwap.asp
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {Array} quoteArray
     * @returns {Number}
     */
    static getVWAP(quoteArray: any[]): number;
    /**
     * Calculates the highest high and lowest low for the provided period of time.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {Array} quoteArray
     * @param {int} period
     * @returns {Object}
     */
    static priceChannel(quoteArray: any[], period: any): any;
    /**
     * Creates a new Quote instance.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @constructor
     * @param {Object} object
     * @property {String} symbol
     * @property {Date} date
     * @property {String} source
     * @property {Object} price
     * @property {Number} price.last
     * @property {Number} price.open
     * @property {Number} price.high
     * @property {Number} price.low
     * @property {Number} price.close
     * @property {Number} price.volume
     * @property {Number} price.adjustedClose
     * @property {Object} dom
     * @property {Number} dom.bid.price
     * @property {Number} dom.bid.size
     * @property {Number} dom.ask.price
     * @property {Number} dom.ask.size
     * @property {Object} meta - Price changes, dividends, splits, market cap, etc.
     * @property {String} original - Original JSON string
     */
    constructor(object: any);
    symbol: any;
    date: any;
    source: any;
    price: any;
    dom: any;
    meta: any;
    original: any;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {String}
     */
    getSymbol(): string;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Date}
     */
    getDate(): Date;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {String}
     */
    getSource(): string;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Number|Null}
     */
    getLast(): number | null;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Number|Null}
     */
    getOpen(): number | null;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Number|Null}
     */
    getHigh(): number | null;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Number|Null}
     */
    getLow(): number | null;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Number|Null}
     */
    getClose(): number | null;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {number}
     */
    getOHLC4(): number;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Number|Null}
     */
    getVolume(): number | null;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Number|Null}
     */
    getAdjustedClose(): number | null;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Number|Null}
     */
    getBidPrice(): number | null;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Number|Null}
     */
    getBidSize(): number | null;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Number|Null}
     */
    getAskPrice(): number | null;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Number|Null}
     */
    getAskSize(): number | null;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Object|Null}
     */
    getMeta(): any | null;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {String}
     */
    getOriginal(): string;
}
