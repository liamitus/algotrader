export = News;
/**
 * Represents an individual news article. Static functions retrieve News objects.
 */
declare class News {
    /**
     * Returns an array of News objects for the given symbol.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {String} symbol
     * @returns {Promise<Array>}
     */
    static getFromYahoo(symbol: string): Promise<any[]>;
    /**
     * Search through millions of articles from over 30,000 large and small news sources and blogs. This includes breaking news as well as lesser articles.
     * Returns an array of News objects for the given symbol from News API.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {String} apiKey - Your News API key, found for free here: https://newsapi.org/register
     * @param {Object} object - Further documentation can be found here: https://newsapi.org/docs/endpoints/everything
     * @property {String} q - Keywords or phrases to search for.
     * @property {String} sources - A comma-separated string of identifiers (maximum 20) for the news sources or blogs you want headlines from.
     * @property {String} domains - A comma-separated string of domains (eg bbc.co.uk, techcrunch.com, engadget.com) to restrict the search to.
     * @property {Date} from - A date and optional time for the oldest article allowed.
     * @property {Date} to - A date and optional time for the newest article allowed.
     * @property {String} language - Possible options: 'ar,' 'de,' 'en,' 'es,' 'fr,' 'he,' 'it,' 'nl,' 'no,' 'pt,' 'ru,' 'se,' 'ud,' 'zh'
     * @property {String} sortBy - Possible options: 'relevancy,' 'popularity,' 'publishedAt'
     * @property {Number} pageSize - The number of results to return per page. 20 is the default, 100 is the maximum.
     * @property {Number} page - Use this to page through the results.
     */
    static getAll(apiKey: string, object: any): any;
    /**
     * This endpoint provides live top and breaking headlines for a country, specific category in a country, single source, or multiple sources. You can also search with keywords. Articles are sorted by the earliest date published first.
     * Returns an array of News objects for the given symbol from News API.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @param {String} apiKey - Your News API key, found for free here: https://newsapi.org/register
     * @param {Object} object - Further documentation can be found here: https://newsapi.org/docs/endpoints/top-headlines
     * @property {String} q - Keywords or phrases to search for.
     * @property {String} category - Possible options: 'business,' 'entertainment,' 'general,' 'health,' 'science,' 'sports,' 'technology' (Cannot be mixed with sources parameter)
     * @property {String} country - The 2-letter ISO 3166-1 code of the country you want to get headlines for. (Cannot be mixed with sources parameter)
     * @property {String} sources - A comma-separated string of identifiers (maximum 20) for the news sources or blogs you want headlines from. (Cannot be mixed with country parameter)
     * @property {Number} pageSize - The number of results to return per page. 20 is the default, 100 is the maximum.
     * @property {Number} page - Use this to page through the results.
     */
    static getHeadlines(apiKey: string, object: any): any;
    /**
     * Creates a new News instance.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @constructor
     * @param object
     * @property {String} symbol
     * @property {String} description
     * @property {Date} date
     * @property {String} source
     * @property {String} author
     * @property {String} url
     */
    constructor(object: any);
    title: any;
    description: any;
    date: any;
    source: any;
    author: any;
    url: any;
    /**
     * Using the URL provided for the news article, this will return the contents of that page.
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Promise<String>}
     */
    getArticle(): Promise<string>;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {String}
     */
    getTitle(): string;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {String}
     */
    getDescription(): string;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {Date}
     */
    getDate(): Date;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {String}
     */
    getSource(): string;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {String}
     */
    getAuthor(): string;
    /**
     * @author Torrey Leonard <https://github.com/Ladinn>
     * @returns {String}
     */
    getURL(): string;
}
