export = OptionsChain;
declare class OptionsChain {
    /**
     * Creates a new OptionsChain object.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {Array} array
     */
    constructor(array: any[]);
    array: any;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @private
     */
    private _getOption;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @private
     */
    private _getClosest;
    /**
     * Returns an array of all expiration dates for the OptionsChain object.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Array<Date>}
     */
    getExpirationDates(): Array<Date>;
    /**
     * Returns an array of all strike prices for the OptionsChain object.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {Date} date
     * @param {String} side - put, call
     * @returns {Array<Number>|Error}
     */
    getStrikePrices(date: Date, side: string): Array<number> | Error;
    /**
     * Returns an options chain for the given date.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {Date} date
     * @returns {Object}
     */
    getByExpirationDate(date: Date): any;
    /**
     * Returns the nearest strike price to the given price target.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {Date} date - Expiration date to query.
     * @param {String} side - Strike price to query.
     * @param {Number} priceTarget
     * @returns {Number|Error}
     */
    getNearestStrikePrice(date: Date, side: string, priceTarget: number): number | Error;
    /**
     * Returns the nearest expiration date to the given date.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {Date} targetDate
     * @returns {Date}
     */
    getNearestExpirationDate(targetDate: Date): Date;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {Date} date - Expiration date to query.
     * @param {Number} strike - Strike price to query.
     * @param {String} side - put, call
     * @returns {Number}
     */
    getVolume(date: Date, strike: number, side: string): number;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {Date} date - Expiration date to query.
     * @param {Number} strike - Strike price to query
     * @param {String} side - put, call
     * @returns {Number}
     */
    getOpenInterest(date: Date, strike: number, side: string): number;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {Date} date - Expiration date to query.
     * @param {Number} strike - Strike price to query
     * @param {String} side - put, call
     * @returns {Number}
     */
    getLastPrice(date: Date, strike: number, side: string): number;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {Date} date - Expiration date to query.
     * @param {Number} strike - Strike price to query
     * @param {String} side - put, call
     * @returns {Number}
     */
    getBid(date: Date, strike: number, side: string): number;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {Date} date - Expiration date to query.
     * @param {Number} strike - Strike price to query
     * @param {String} side - put, call
     * @returns {Number}
     */
    getAsk(date: Date, strike: number, side: string): number;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {Date} date - Expiration date to query.
     * @param {Number} strike - Strike price to query
     * @param {String} side - put, call
     * @returns {Number}
     */
    getChange(date: Date, strike: number, side: string): number;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {Date} date - Expiration date to query.
     * @param {Number} strike - Strike price to query
     * @param {String} side - put, call
     * @returns {Date}
     */
    getLastTradeDate(date: Date, strike: number, side: string): Date;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {Date} date - Expiration date to query.
     * @param {Number} strike - Strike price to query
     * @param {String} side - put, call
     * @returns {Number}
     */
    getImpliedVolatility(date: Date, strike: number, side: string): number;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {Date} date - Expiration date to query.
     * @param {Number} strike - Strike price to query
     * @param {String} side - put, call
     * @returns {Boolean}
     */
    isInTheMoney(date: Date, strike: number, side: string): boolean;
}
