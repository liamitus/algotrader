export = OptionInstrument;
/**
 * Represents an option traded on Robinhood.
 */
declare class OptionInstrument extends Robinhood {
    /**
     * Returns an array of all option instruments. Note: this may take an eternity - no need to use this.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {User} user
     * @returns {Promise<Array>}
     */
    static getAll(user: any): Promise<any[]>;
    /**
     * Returns an array of all option instruments for the given expiration date and side. Ordered from lowest to highest strike price.
     *
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @author hbeere (Issue #10)
     *
     * @param {User} user
     * @param {Instrument} instrument
     * @param {String} side - Can be either 'call' or 'put'
     * @returns {Promise<any>}
     */
    static getChain(user: any, instrument: any, side: string): Promise<any>;
    /**
     * Returns an array prices arranged by strike price. Make sure to only send a maximum of about 50 instruments.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {User} user
     * @param {OptionInstrument[]} instruments
     * @returns {Promise<any>}
     */
    static getPrices(user: any, instruments: OptionInstrument[]): Promise<any>;
    /**
     * Returns an array of expiration dates for the given Instrument.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {User} user
     * @param {Instrument} instrument
     * @returns {Promise<Date[]>}
     */
    static getExpirations(user: any, instrument: any): Promise<Date[]>;
    /**
     * Returns an options instrument object for the specified instrument URL.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {User} user
     * @param {String} url
     * @returns {Promise<Instrument>}
     */
    static getByURL(user: any, url: string): Promise<any>;
    /**
     * Returns an array of the user's open option contracts.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {User} user
     * @returns {Promise<Array>}
     */
    static getPositions(user: any): Promise<any[]>;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @constructor
     * @param object
     */
    constructor(object: any);
    tradability: string;
    strikePrice: number;
    state: string;
    type: string;
    symbol: string;
    minTicks: any;
    instrumentURL: string;
    ids: {
        chain: string;
        option: string;
    };
    dates: {
        expiration: Date;
        created: Date;
        updated: Date;
    };
    _setPriceObject(price: any): void;
    price: any;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {String}
     */
    getTradability(): string;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Number}
     */
    getStrikePrice(): number;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {String}
     */
    getState(): string;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {String}
     */
    getType(): string;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {String}
     */
    getInstrumentURL(): string;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {String}
     */
    getSymbol(): string;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Object}
     */
    getMiniumumTicks(): any;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {String}
     */
    getChainID(): string;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {String}
     */
    getOptionID(): string;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Date}
     */
    getExpiration(): Date;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {boolean}
     */
    isPut(): boolean;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {boolean}
     */
    isCall(): boolean;
}
import Robinhood = require("./Robinhood");
