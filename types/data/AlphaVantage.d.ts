export = AlphaVantage;
/**
 * Further documentation can be found here: https://www.alphavantage.co/documentation/
 */
declare class AlphaVantage {
    /**
     * Creates a new AlphaVantage instance.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @constructor
     * @param {String} apiKey - The free API key retrieved from
     */
    constructor(apiKey: string);
    apiKey: string;
    url: string;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {Object} qs The query string object to pass along to the request module
     * @param {string} objectKeyOverride Set this to the name of the property in the response object that you wish to return.
     * 				Leave empty to let _requester use it's default implementation
     * @private
     */
    private _requester;
    /**
     * Returns an array of objects showing historical and real time S&P sector performance.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Promise}
     */
    sectorPerformance(): Promise<any>;
    /**
     * Returns an array of quotes for the equity specified, updated in real time.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {String} symbol
     * @param {String} interval - How long each quote should represent: 1min, 5min, 15min, 30min, 60min
     * @returns {Promise.<Array>}
     */
    timeSeriesIntraday(symbol: string, interval: string): Promise<any[]>;
    /**
     * Returns an array of quotes for the equity specified, covering up to 20 years of historical data.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {String} symbol
     * @param {Boolean} compact - If true, this will return the last 100 data points. If false, it will return up to 20 years of historical data.
     * @param {Boolean} adjusted - If true, prices will be adjusted for split/dividend events.
     * @returns {Promise<Array>}
     */
    timeSeriesDaily(symbol: string, compact: boolean, adjusted: boolean): Promise<any[]>;
    /**
     * Returns an array of quotes for the equity specified, covering up to 20 years of historical data.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {String} symbol
     * @param {Boolean} adjusted - If true, prices will be adjusted for split/dividend events.
     * @returns {Promise<Array>}
     */
    timeSeriesWeekly(symbol: string, adjusted: boolean): Promise<any[]>;
    /**
     * Returns an array of quotes for the equity specified, covering up to 20 years of historical data.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {String} symbol
     * @param {Boolean} adjusted - If true, prices will be adjusted for split/dividend events.
     * @returns {Promise<Array>}
     */
    timeSeriesMonthly(symbol: string, adjusted: boolean): Promise<any[]>;
    /**
     * Returns an array of search results based off your keyword search string
     * @author Nicklas Laine Overgaard <https://github.com/nover>
     * @param {String} keyword The search keyword(s), e.g 'Microsoft' or 'Toshiba'
     * @returns {Promise<Array{Match}>}
     */
    search(keyword: string): Promise<any[]>;
    /**
     * Get a price quote from the market for the given symbol
     * @author Nicklas Laine Overgaard <https://github.com/nover>
     * @param {String} symbol The symbol to get a the current quote price for, e.g AAPL
     * @returns {Promise<Quote>} A quote instance
     */
    quote(symbol: string): Promise<Quote>;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @private
     */
    private _technical;
    /**
     * Returns an array of simple moving averages for the equity specified.
     * https://www.investopedia.com/articles/technical/052201.asp
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {String} symbol
     * @param {String} interval - Time between two data points in the series: 1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
     * @param {Number} timePeriod - Number of data points used to calculate each moving average value. Positive integers are accepted.
     * @param {String} seriesType - What to base the SMA on: open, high, low, close
     * @param {String} seriesType - What to base the SMA on: open, high, low, close
     * @param {String} seriesType - What to base the SMA on: open, high, low, close
     * @returns {Promise<Array>}
     */
    sma(symbol: string, interval: string, timePeriod: number, seriesType: string): Promise<any[]>;
    /**
     * Returns an array of exponential moving averages for the equity specified.
     * https://www.investopedia.com/terms/e/ema.asp
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {String} symbol
     * @param {String} interval - Time between two data points in the series: 1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
     * @param {Number} timePeriod - Number of data points used to calculate each moving average value. Positive integers are accepted.
     * @param {String} seriesType - What to base the SMA on: open, high, low, close
     * @returns {Promise<Array>}
     */
    ema(symbol: string, interval: string, timePeriod: number, seriesType: string): Promise<any[]>;
    /**
     * Returns an array of weighted moving averages for the equity specified.
     * https://www.investopedia.com/articles/technical/060401.asp
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {String} symbol
     * @param {String} interval - Time between two data points in the series: 1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
     * @param {Number} timePeriod - Number of data points used to calculate each moving average value. Positive integers are accepted.
     * @param {String} seriesType - What to base the SMA on: open, high, low, close
     * @returns {Promise<Array>}
     */
    wma(symbol: string, interval: string, timePeriod: number, seriesType: string): Promise<any[]>;
    /**
     * Returns an array of double exponential moving averages for the equity specified.
     * http://www.investopedia.com/articles/trading/10/double-exponential-moving-average.asp
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {String} symbol
     * @param {String} interval - Time between two data points in the series: 1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
     * @param {Number} timePeriod - Number of data points used to calculate each moving average value. Positive integers are accepted.
     * @param {String} seriesType - What to base the SMA on: open, high, low, close
     * @returns {Promise<Array>}
     */
    dema(symbol: string, interval: string, timePeriod: number, seriesType: string): Promise<any[]>;
    /**
     * Returns an array of triple exponential moving averages for the equity specified.
     * https://www.investopedia.com/terms/t/triple-exponential-moving-average.asp
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {String} symbol
     * @param {String} interval - Time between two data points in the series: 1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
     * @param {Number} timePeriod - Number of data points used to calculate each moving average value. Positive integers are accepted.
     * @param {String} seriesType - What to base the SMA on: open, high, low, close
     * @returns {Promise<Array>}
     */
    tema(symbol: string, interval: string, timePeriod: number, seriesType: string): Promise<any[]>;
    /**
     * Returns an array of triangular moving averages for the equity specified.
     * http://www.fmlabs.com/reference/default.htm?url=TriangularMA.htm
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {String} symbol
     * @param {String} interval - Time between two data points in the series: 1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
     * @param {Number} timePeriod - Number of data points used to calculate each moving average value. Positive integers are accepted.
     * @param {String} seriesType - What to base the SMA on: open, high, low, close
     * @returns {Promise<Array>}
     */
    trima(symbol: string, interval: string, timePeriod: number, seriesType: string): Promise<any[]>;
    /**
     * Returns an array of Kaufman adaptive moving averages for the equity specified.
     * http://stockcharts.com/school/doku.php?id=chart_school:technical_indicators:kaufman_s_adaptive_moving_average
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {String} symbol
     * @param {String} interval - Time between two data points in the series: 1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
     * @param {Number} timePeriod - Number of data points used to calculate each moving average value. Positive integers are accepted.
     * @param {String} seriesType - What to base the SMA on: open, high, low, close
     * @returns {Promise<Array>}
     */
    kama(symbol: string, interval: string, timePeriod: number, seriesType: string): Promise<any[]>;
    /**
     * Returns an array of MESA adaptive moving averages for the equity specified.
     * http://www.binarytribune.com/forex-trading-indicators/ehlers-mesa-adaptive-moving-average
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {String} symbol
     * @param {String} interval - Time between two data points in the series: 1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
     * @param {Number} timePeriod - Number of data points used to calculate each moving average value. Positive integers are accepted.
     * @param {String} seriesType - What to base the SMA on: open, high, low, close
     * @param {Number} fastLimit
     * @param {Number} slowLimit
     * @returns {Promise<Array>}
     */
    mama(symbol: string, interval: string, timePeriod: number, seriesType: string, fastLimit: number, slowLimit: number): Promise<any[]>;
    /**
     * Returns an array of T3 values for the equity specified.
     * http://www.fmlabs.com/reference/default.htm?url=T3.htm
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {String} symbol
     * @param {String} interval - Time between two data points in the series: 1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
     * @param {Number} timePeriod - Number of data points used to calculate each moving average value. Positive integers are accepted.
     * @param {String} seriesType - What to base the SMA on: open, high, low, close
     * @returns {Promise<Array>}
     */
    t3(symbol: string, interval: string, timePeriod: number, seriesType: string): Promise<any[]>;
    /**
     * Returns an array of moving average convergence / divergence values for the equity specified.
     * http://www.investopedia.com/articles/forex/05/macddiverge.asp
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {String} symbol
     * @param {String} interval - Time between two data points in the series: 1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
     * @param {Number} timePeriod - Number of data points used to calculate each moving average value. Positive integers are accepted.
     * @param {String} seriesType - What to base the SMA on: open, high, low, close
     * @param {Number|Null} fastPeriod
     * @param {Number|Null} slowPeriod
     * @param {Number|Null} signalPeriod
     * @returns {Promise<Array>}
     */
    macd(symbol: string, interval: string, timePeriod: number, seriesType: string, fastPeriod: number | null, slowPeriod: number | null, signalPeriod: number | null): Promise<any[]>;
    /**
     * Returns an array of stochastic oscillators for the equity specified.
     * http://www.investopedia.com/university/indicator_oscillator/ind_osc8.asp
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {String} symbol
     * @param {String} interval - Time between two data points in the series: 1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
     * @param {Number} timePeriod - Number of data points used to calculate each moving average value. Positive integers are accepted.
     * @param {String} seriesType - What to base the SMA on: open, high, low, close
     * @param {Number|Null} fastKPeriod
     * @param {Number|Null} slowKPeriod
     * @param {Number|Null} slowDPeriod
     * @param {Number|Null} slowKmaType - Integers 0 - 8 are accepted with the following mappings: 0 = Simple Moving Average (SMA), 1 = Exponential Moving Average (EMA), 2 = Weighted Moving Average (WMA), 3 = Double Exponential Moving Average (DEMA), 4 = Triple Exponential Moving Average (TEMA), 5 = Triangular Moving Average (TRIMA), 6 = T3 Moving Average, 7 = Kaufman Adaptive Moving Average (KAMA), 8 = MESA Adaptive Moving Average (MAMA).
     * @param {Number|Null} slowDmaType - Integers 0 - 8 are accepted with the following mappings: 0 = Simple Moving Average (SMA), 1 = Exponential Moving Average (EMA), 2 = Weighted Moving Average (WMA), 3 = Double Exponential Moving Average (DEMA), 4 = Triple Exponential Moving Average (TEMA), 5 = Triangular Moving Average (TRIMA), 6 = T3 Moving Average, 7 = Kaufman Adaptive Moving Average (KAMA), 8 = MESA Adaptive Moving Average (MAMA).
     * @returns {Promise<Array>}
     */
    stoch(symbol: string, interval: string, timePeriod: number, seriesType: string, fastKPeriod: number | null, slowKPeriod: number | null, slowDPeriod: number | null, slowKmaType: number | null, slowDmaType: number | null): Promise<any[]>;
    /**
     * Returns an array of stochastic fast oscillators for the equity specified.
     * http://www.investopedia.com/university/indicator_oscillator/ind_osc8.asp
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {String} symbol
     * @param {String} interval - Time between two data points in the series: 1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
     * @param {Number} timePeriod - Number of data points used to calculate each moving average value. Positive integers are accepted.
     * @param {String} seriesType - What to base the SMA on: open, high, low, close
     * @param {Number|Null} fastKPeriod
     * @param {Number|Null} fastDPeriod
     * @param {Number|Null} fastDmaType - Integers 0 - 8 are accepted with the following mappings: 0 = Simple Moving Average (SMA), 1 = Exponential Moving Average (EMA), 2 = Weighted Moving Average (WMA), 3 = Double Exponential Moving Average (DEMA), 4 = Triple Exponential Moving Average (TEMA), 5 = Triangular Moving Average (TRIMA), 6 = T3 Moving Average, 7 = Kaufman Adaptive Moving Average (KAMA), 8 = MESA Adaptive Moving Average (MAMA).
     * @returns {Promise<Array>}
     */
    stochf(symbol: string, interval: string, timePeriod: number, seriesType: string, fastKPeriod: number | null, fastDPeriod: number | null, fastDmaType: number | null): Promise<any[]>;
    /**
     * Returns an array of relative strength index values for the equity specified.
     * http://www.investopedia.com/articles/technical/071601.asp
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {String} symbol
     * @param {String} interval - Time between two data points in the series: 1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
     * @param {Number} timePeriod - Number of data points used to calculate each moving average value. Positive integers are accepted.
     * @param {String} seriesType - What to base the SMA on: open, high, low, close
     * @returns {Promise<Array>}
     */
    rsi(symbol: string, interval: string, timePeriod: number, seriesType: string): Promise<any[]>;
    /**
     * Returns an array of stochastic relative strength index values for the equity specified.
     * http://www.fmlabs.com/reference/default.htm?url=StochRSI.htm
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {String} symbol
     * @param {String} interval - Time between two data points in the series: 1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
     * @param {Number} timePeriod - Number of data points used to calculate each moving average value. Positive integers are accepted.
     * @param {String} seriesType - What to base the SMA on: open, high, low, close
     * @param {Number|Null} fastKPeriod
     * @param {Number|Null} fastDPeriod
     * @param {Number|Null} fastDmaType - Integers 0 - 8 are accepted with the following mappings: 0 = Simple Moving Average (SMA), 1 = Exponential Moving Average (EMA), 2 = Weighted Moving Average (WMA), 3 = Double Exponential Moving Average (DEMA), 4 = Triple Exponential Moving Average (TEMA), 5 = Triangular Moving Average (TRIMA), 6 = T3 Moving Average, 7 = Kaufman Adaptive Moving Average (KAMA), 8 = MESA Adaptive Moving Average (MAMA).
     * @returns {Promise<Array>}
     */
    stochRSI(symbol: string, interval: string, timePeriod: number, seriesType: string, fastKPeriod: number | null, fastDPeriod: number | null, fastDmaType: number | null): Promise<any[]>;
    /**
     * Returns an array of bollinger bands for the equity specified.
     * https://www.investopedia.com/articles/technical/04/030304.asp
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {String} symbol
     * @param {String} interval - Time interval between two consecutive data points in the time series. The following values are supported: 1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
     * @param {Number} timePeriod - Number of data points used to calculate each BBANDS value. Positive integers are accepted (e.g., time_period=60, time_period=200)
     * @param {String} seriesType - The desired price type in the time series. Four types are supported: close, open, high, low
     * @param {Number|Null} nbdevup - The standard deviation multiplier of the upper band. Positive integers are accepted. By default, nbdevup=2.
     * @param {Number|Null} nbdevdn - The standard deviation multiplier of the lower band. Positive integers are accepted. By default, nbdevdn=2.
     * @param {Number|Null} matype - Moving average type of the time series. By default, matype=0. Integers 0 - 8 are accepted with the following mappings. 0 = Simple Moving Average (SMA), 1 = Exponential Moving Average (EMA), 2 = Weighted Moving Average (WMA), 3 = Double Exponential Moving Average (DEMA), 4 = Triple Exponential Moving Average (TEMA), 5 = Triangular Moving Average (TRIMA), 6 = T3 Moving Average, 7 = Kaufman Adaptive Moving Average (KAMA), 8 = MESA Adaptive Moving Average (MAMA).
     * @returns {Promise<Array>}
     */
    bbands(symbol: string, interval: string, timePeriod: number, seriesType: string, nbdevup: number | null, nbdevdn: number | null, matype: number | null): Promise<any[]>;
    /**
  * This API returns the minus directional indicator (MINUS_DI) values
  * http://www.investopedia.com/articles/technical/02/050602.asp
  * @author Colin Gillingham <https://github.com/Gillinghammer>
  * @param {String} symbol
  * @param {String} interval - Time between two data points in the series: 1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
  * @param {Number} timePeriod - Number of data points used to calculate each moving average value. Positive integers are accepted.
  * @returns {Promise<Array>}
  */
    minus_di(symbol: string, interval: string, timePeriod: number): Promise<any[]>;
    /**
     * This API returns the plus directional indicator (PLUS_DI) values
     * http://www.investopedia.com/articles/technical/02/050602.asp
     * @author Colin Gillingham <https://github.com/Gillinghammer>
     * @param {String} symbol
     * @param {String} interval - Time between two data points in the series: 1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
     * @param {Number} timePeriod - Number of data points used to calculate each moving average value. Positive integers are accepted.
     * @returns {Promise<Array>}
     */
    plus_di(symbol: string, interval: string, timePeriod: number): Promise<any[]>;
    /**
   * This API returns the average directional movement index (ADX) values
   * http://www.investopedia.com/articles/trading/07/adx-trend-indicator.as
   * @author Colin Gillingham <https://github.com/Gillinghammer>
   * @param {String} symbol
   * @param {String} interval - Time between two data points in the series: 1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
   * @param {Number} timePeriod - Number of data points used to calculate each ADX value. Positive integers are accepted
   * @returns {Promise<Array>}
   */
    adx(symbol: string, interval: string, timePeriod: number): Promise<any[]>;
}
import Quote = require("../globals/Quote");
