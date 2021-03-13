export = OptionOrder;
/**
 * Represents and executes an order for the given option contract.
 */
declare class OptionOrder extends Robinhood {
    /**
     * Returns an array of executed OptionOrders.
     * NOTE: See OptionInstrument.getPositions for an array of open positions.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {User} user
     * @returns {Promise<OptionOrder[]>}
     */
    static getOrders(user: any): Promise<OptionOrder[]>;
    /**
     * Creates a new OptionOrder.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @constructor
     * @param {User} user
     * @param {Object} object
     * @property {String} side - buy/sell
     * @property {String} type - market/limit. Note: market orders are not allowed if side = buy.
     * @property {Number} price
     * @property {String} timeInForce - gtc/gfd/ioc/opg
     * @property {OptionInstrument|Null} option - Required if no legs are provided
     * @property {Array|Null} legs - Required if no option is provided
     * @property {Number} quantity
     */
    constructor(user: any, object: any);
    user: any;
    executed: boolean;
    form: {
        account: string;
        direction: string;
        legs: any;
        price: any;
        time_in_force: any;
        trigger: string;
        type: any;
        quantity: any;
        override_day_trade_checks: boolean;
        override_dtbp_checks: boolean;
        ref_id: any;
    };
    /**
     * Submits the OptionOrder to Robinhood and returns the executed OptionOrder.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Promise<OptionOrder>}
     */
    submit(): Promise<OptionOrder>;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Array}
     */
    getLegs(): any[];
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {String}
     */
    getDirection(): string;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Number}
     */
    getPremium(): number;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Number}
     */
    getProcessedPremium(): number;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {String}
     */
    getTimeInForce(): string;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {String}
     */
    getReferenceID(): string;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Number}
     */
    getPrice(): number;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {String}
     */
    getTrigger(): string;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {String}
     */
    getType(): string;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Number}
     */
    getQuantity(): number;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Number}
     */
    getQuantityPending(): number;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Number}
     */
    getQuantityCanceled(): number;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {String}
     */
    getChainID(): string;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {String}
     */
    getSymbol(): string;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Date}
     */
    getDateCreated(): Date;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Boolean}
     */
    isExecuted(): boolean;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Boolean}
     */
    isCredit(): boolean;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Boolean}
     */
    isDebit(): boolean;
}
import Robinhood = require("./Robinhood");
