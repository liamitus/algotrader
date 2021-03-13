export = Market;
/**
 * Represents an exchange on which securities are traded.
 */
declare class Market extends Robinhood {
    /**
     * Returns a Market object for the given Market Identifier Code (MIC).
     * See ISO 10383: https://www.iso20022.org/10383/iso-10383-market-identifier-codes
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {String} code
     */
    static ONE_HOUR: number;
    static MICcache: {
        date: any;
        value: any;
    };
    static getByMIC(code: any): any;
    /**
     * Returns a Market object for the given market URL.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {String} url
     */
    static getByURL(url: string): any;
    /**
     * Creates a new Market object.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param object - Created using this class' static methods. For example, use 'getByMIC("XNAS")' to create an instance of the Nasdaq.
     */
    constructor(object: any);
    parseHours: (object: any) => {
        isOpen: boolean;
        close: Date;
        open: Date;
        extendedOpen: Date;
        extendedClose: Date;
        date: Date;
        nextTradingDay: string;
        previousTradingDay: string;
    };
    website: string;
    city: string;
    name: string;
    country: string;
    acronym: string;
    timezone: string;
    mic: string;
    hours: {
        isOpen: boolean;
        close: Date;
        open: Date;
        extendedOpen: Date;
        extendedClose: Date;
        date: Date;
        nextTradingDay: string;
        previousTradingDay: string;
    };
    /**
     * Returns an object with hours on the next trading period.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Promise<Object>}
     */
    getNextTradingHours(): Promise<any>;
    /**
     * Returns an object with hours on the previous trading period.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Promise<Object>}
     */
    getPreviousTradingHours(): Promise<any>;
    /**
     * Returns an object with hours for the given date.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {Date} date
     * @returns {Promise<Object>}
     */
    getHoursOn(date: Date): Promise<any>;
    /**
     * Checks whether the market is open on the given date.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {Date} date
     * @returns {Promise.<Boolean>}
     */
    isOpenOn(date: Date): Promise<boolean>;
    /**
     * Returns the next date and time that the market will be open.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Promise.<Date>}
     */
    getNextOpen(): Promise<Date>;
    /**
     * Returns the next date and time that the market will close.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Promise<Date>}
     */
    getNextClose(): Promise<Date>;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {String}
     */
    getWebsite(): string;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {String}
     */
    getCity(): string;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {String}
     */
    getName(): string;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {String}
     */
    getCountry(): string;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {String}
     */
    getCode(): string;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {String}
     */
    getAcronym(): string;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {{isOpen: boolean, close: Date, open: Date, extendedOpen: Date, extendedClose: Date, date: Date}}
     */
    getHours(): {
        isOpen: boolean;
        close: Date;
        open: Date;
        extendedOpen: Date;
        extendedClose: Date;
        date: Date;
    };
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Date}
     */
    getClose(): Date;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Date}
     */
    getOpen(): Date;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Date}
     */
    getExtendedClose(): Date;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Date}
     */
    getExtendedOpen(): Date;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Boolean}
     */
    isOpenToday(): boolean;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Boolean}
     */
    isOpenNow(): boolean;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Boolean}
     */
    isExtendedOpenNow(): boolean;
}
import Robinhood = require("./Robinhood");
