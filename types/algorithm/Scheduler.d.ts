export = Scheduler;
/**
 * Used to run functions at specified intervals or times of day.
 */
declare class Scheduler {
    /**
     * Creates a new scheduled task
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {Function} f
     */
    constructor(f: Function);
    f: Function;
    job: any;
    /**
     * Runs every day on market open.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {Number} offset - The offset, in milliseconds, from market open to run the algorithm. Negative is before, positive is after.
     * @returns {Promise<Date>} - Date object of next invocation.
     */
    onMarketOpen(offset: number): Promise<Date>;
    /**
     * Runs every day on market close.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {Number} offset - The offset, in milliseconds, from market close to run the algorithm. Negative is before, positive is after.
     * @returns {Promise<schedule>}
     */
    onMarketClose(offset: number): Promise<any>;
    /**
     * Runs every 'x' minutes while the market is open.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {Number} minutes
     * @param {Boolean} extended - Whether to run during extended trading hours.
     */
    every(minutes: number, extended: boolean): any;
    /**
     * Cancels a job.
     * @author Torrey Leonard <https://github.com/Ladinn>
     */
    cancel(): Error;
    /**
     * Returns the date of the next invocation of the given job.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Date|Error}
     */
    getNext(): Date | Error;
}
