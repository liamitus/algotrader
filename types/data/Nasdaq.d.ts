export = Nasdaq;
/**
 * For use with the Nasdaq's public data repository.
 */
declare class Nasdaq {
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @private
     */
    private static _request;
    /**
     * Returns an array of objects with details on Nasdaq listed equities.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Promise<Object[]>}
     */
    static getListings(): Promise<any[]>;
    /**
     * Returns an array of objects with details on Nasdaq traded equities.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Promise<Object[]>}
     */
    static getTraded(): Promise<any[]>;
    /**
     * Returns an array of objects with details on other equities.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Promise<Object[]>}
     */
    static getOtherListings(): Promise<any[]>;
    /**
     * Returns an array of objects with details on OTC traded equities.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Promise<Object[]>}
     */
    static getOTCListings(): Promise<any[]>;
    /**
     * Returns an array of objects with details on equities whose name matchs the given filter.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {String} string
     * @returns {Promise<Object[]>}
     */
    static getByName(string: string): Promise<any[]>;
    /**
     * Returns an array of symbols that represent exchange traded funds.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Promise<String[]>}
     */
    static getETFs(): Promise<string[]>;
}
