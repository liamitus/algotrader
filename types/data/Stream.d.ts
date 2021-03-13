export = Stream;
/**
 * An extension of the Node.js EventEmitter that sends Quote and News objects as they arrive.
 * @event Stream#quote
 * @type {Quote}
 * @event Stream#news
 * @type {News}
 * @event Stream#iex
 * @type {Object}
 */
declare class Stream extends EventEmitter {
    /**
     * Creates a new Stream class.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @constructor
     * @param {Array} symbols
     * @param {Object|Null} options
     * @property {Boolean} iex - Whether to include real time IEX data in stream
     * @property {String} iexType - Which endpoint to use for IEX stream (tops, last, hist, deep, book, etc. See: https://iextrading.com/developer/docs/#iex-market-data)
     * @property {Boolean} news - Whether to include news headlines in the stream.
     * @property {Boolean} allHeadlines - If true, all U.S. business headlines will be sent in the stream. If false, only news pertaining to the given symbols will be outputted.
     * @property {String} newsApiKey - If 'includeNews' is yes, this should be your API key from https://newsapi.org/register.
     */
    constructor(symbols: any[], options: any | null);
    symbols: any[];
    iex: boolean;
    iexType: string;
    news: boolean;
    allHeadlines: boolean;
    newsApiKey: string | boolean;
    newsArray: any[];
    /**
     * Start the streaming class.
     * @author Torrey Leonard <https://github.com/Ladinn>
     */
    start(): void;
    request: any;
    /**
     * Stop the streaming class.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @author Wyatt Calandro <https://github.com/wclandro>
     */
    stop(): void;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param input
     * @returns {Quote}
     * @private
     */
    private _createQuote;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {string[]}
     * @private
     */
    private _getYahooKeys;
}
import EventEmitter = require("events");
