export = Match;
declare class Match {
    /**
     * Creats a AlphaVantage Match instance
     * @author Nicklas Laine Overgaard <https://github.com/nover>
     * @constructor
     * @param {Object} object
     * @property {String} "1. symbol"
     * @property {String} "2. name"
     * @property {String} "3. type"
     * @property {String} "4. region"
     * @property {String} "5. marketOpen"
     * @property {String} "6. marketCloes"
     * @property {String} "7. timezone"
     * @property {String} "8. currency"
     * @property {Number} "9. matchScore"
     */
    constructor(object: any);
    symbol: any;
    name: any;
    type: any;
    region: any;
    marketOpen: any;
    marketClose: any;
    timezone: any;
    currency: any;
    matchScore: number;
    /**
     * @author Nicklas Laine Overgaard <https://github.com/nover>
     * @returns {String}
     */
    getSymbol(): string;
    /**
     * @author Nicklas Laine Overgaard <https://github.com/nover>
     * @returns {String}
     */
    getName(): string;
    /**
     * @author Nicklas Laine Overgaard <https://github.com/nover>
     * @returns {String}
     */
    getType(): string;
    /**
     * @author Nicklas Laine Overgaard <https://github.com/nover>
     * @returns {String}
     */
    getRegion(): string;
    /**
     * @author Nicklas Laine Overgaard <https://github.com/nover>
     * @returns {String}
     */
    getMarketOpen(): string;
    /**
     * @author Nicklas Laine Overgaard <https://github.com/nover>
     * @returns {String}
     */
    getMarketClose(): string;
    /**
     * @author Nicklas Laine Overgaard <https://github.com/nover>
     * @returns {String}
     */
    getTimezone(): string;
    /**
     * @author Nicklas Laine Overgaard <https://github.com/nover>
     * @returns {String}
     */
    getCurrency(): string;
    /**
     * @author Nicklas Laine Overgaard <https://github.com/nover>
     * @returns {String}
     */
    getMatchScore(): string;
}
