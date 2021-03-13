export = User;
/**
 * Represents the user that is logged in while accessing the Robinhood API.
 */
declare class User extends Robinhood {
    /**
     * Restores a user from the serialized object.
     * @author Egor Verbitskiy <https://github.com/egorio>
     * @param {String} data - serialized data
     * @returns {Promise<User>}
     */
    static deserialize(data: string): Promise<User>;
    /**
     * If a saved user exists, this will load it into system memory. Recommended if using multi-factor authentication.
     * If using `doNotSaveToDisk`, consumer will need to pass the serialized user as an argument
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Promise<User>}
     */
    static load(pathToUserFile: any): Promise<User>;
    /**
     * Checks if the provided object an instance of User object.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {Object} object
     * @returns {boolean}
     */
    static isUser(object: any): boolean;
    static getOrAuthenticate(): any;
    static authenticateWithRobinhood(user: any): any;
    static getAndCheckEnv(key: any): any;
    /**
     * Creates a new User object.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {String} username
     * @param {String} password - Optional. If not provided the user will be prompted via CLI.
   * @param {String} deviceToken
     */
    constructor(username: string, password: string, deviceToken: string, options: any);
    username: string;
    password: string;
    deviceToken: string;
    token: any;
    account: any;
    expires: any;
    refreshToken: any;
    serializedUserFile: any;
    doNotSaveToDisk: any;
    /**
     * Authenticates a user using the inputted username and password.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {String|Undefined} password - Optional if not provided in constructor or re-authenticating a saved user.
     * @param {Function|Undefined} mfaFunction - Optional function that is called when prompted for multi-factor authentication. Must return a promise with a six-character string. If not provided the CLI will be prompted.
     * @returns {Promise<User>}
     */
    authenticate(password: string | undefined, mfaFunction: Function | undefined): Promise<User>;
    /**
     * Re-authenticates a user with the the expired authentication token using the refresh token.
     * @author Egor Verbitskiy <https://github.com/egorio>
     * @returns {Promise<User>}
     */
    reauthenticate(refreshToken: any): Promise<User>;
    /**
     * Logout the user by expiring the authentication token and removing any saved data.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Promise<Boolean>}
     */
    logout(): Promise<boolean>;
    /**
     * Converts a user object to a string to be securely stored.
     *
     * Note that serialized object contains refreshToken and it's subject to strict storage requirements
     * to ensure that they are not leaked
     *
     * @author Egor Verbitskiy <https://github.com/egorio>
     * @returns {string}
     */
    serialize(): string;
    /**
     * Save the user to disk. Prevents having to login and logout each run.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Promise<Boolean>}
     */
    save(): Promise<boolean>;
    /**
     * Checks if the current user is authenticated and authentication is not expired.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {boolean}
     */
    isAuthenticated(): boolean;
    /**
     * Returns an auth token.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {null|string}
     */
    getAuthToken(): null | string;
    /**
     * Returns an account number.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {null|string}
     */
    getAccountNumber(): null | string;
    /**
     * Returns a username.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {null|string}
     */
    getUsername(): null | string;
    /**
     * Returns vital information about balances and enabled features.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Promise}
     */
    getAccount(): Promise<any>;
    /**
     * Returns an object containing details on the user's cash and margin balance.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Promise<Object>}
     */
    getBalances(): Promise<any>;
    /**
     * Returns the amount of money available to be spent.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Promise}
     */
    getBuyingPower(): Promise<any>;
    /**
     * Returns information like username, first / last name, creation date, id, and more.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Promise<Object>}
     */
    getUserInfo(): Promise<any>;
    /**
     * Returns the user's unique ID.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Promise<String>}
     */
    getUID(): Promise<string>;
    /**
     * Returns information like address, citizenship, SSN, date of birth, and more.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Promise<Object>}
     */
    getTaxInfo(): Promise<any>;
    /**
     * Returns information on the user pertaining to SEC rule 405.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Promise<Object>}
     */
    getDisclosureInfo(): Promise<any>;
    /**
     * Returns information on the user's employment.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Promise<Object>}
     */
    getEmployerInfo(): Promise<any>;
    /**
     * Returns the user's answers to basic questions regarding investment experiences.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Promise<Object>}
     */
    getInvestmentProfile(): Promise<any>;
    /**
     * Returns arrays of recent option and equity day trades.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Promise<Object>}
     */
    getRecentDayTrades(): Promise<any>;
    /**
     * Returns an array of recent orders.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Promise<Order[]>}
     */
    getRecentOrders(): Promise<Order[]>;
    /**
     * Cancels all open orders.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Promise}
     */
    cancelOpenOrders(): Promise<any>;
    /**
     * Returns an array of option orders.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Promise<Array>}
     */
    getOptionOrders(): Promise<any[]>;
    /**
     * Returns a Portfolio object containing all open positions in a user's portfolio.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Promise<Object>}
     */
    getPortfolio(): Promise<any>;
    /**
     * Returns an array of options that the user holds.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Promise<any>}
     */
    getOptionPositions(): Promise<any>;
    /**
     * Returns an object that can be used to create a chart, show total return, etc.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Promise<Object>}
     */
    getHistoricals(span: any, interval: any): Promise<any>;
    /**
     * Returns an object representing the user's linked bank account. If the user has linked multiple, this returns an array.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Promise<Object>}
     */
    getLinkedBanks(): Promise<any>;
    /**
     * Deposits money into the user's account. If frequency is not empty, this becomes an automatic deposit.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {String} bankID - This ID can be found from getLinkedBanks().
     * @param {String} amount - How much money should be deposited, represented as a string.
     * @param {String} frequency - Empty string if one-time deposit, otherwise: 'weekly,' 'biweekly,' 'monthly,' or 'quarterly.'
     * @returns {Promise<Object>}
     */
    addDeposit(bankID: string, amount: string, frequency: string): Promise<any>;
    /**
     * Returns an array of account documents (taxes, statements, etc). Use 'downloadDocuments()' to view them.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Promise<Array>}
     */
    getDocuments(): Promise<any[]>;
    /**
     * Downloads all account documents to the given folder path.
     * Note that, because of Robinhood's connection throttling, this will take a while for accounts with high activity.
     * Downloads will be attempted every second and will wait for any connection throttling to end before continuing.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {String} folder
     * @returns {Promise}
     */
    downloadDocuments(folder: string): Promise<any>;
}
import Robinhood = require("./Robinhood");
import Order = require("./Order");
