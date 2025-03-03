/**
 * Created for the programmatic SEO masterclass
 * https://seo-programming.com/
 */
/**
 * This file contains the SEOService class, which is used to generate a sitemap.xml file from the SEO data.
 */

import { WEBSITE_URL } from "./seo";

interface SEOFuncObj {
	title: string;
	description: string;
	path: string;
	image?: string;
}

export default class SEOService {
	private _url_with_protocol = WEBSITE_URL;

	/**
	 * Generate a sitemap.xml file from the SEO data.
	 * @param SEOData - Array of SEO data objects - see seo.js
   * @param downloadFile - If true, the sitemap file will be downloaded
	 * @returns A string representing the sitemap.xml content
	 */
	public generateSitemapFile(
		SEOData: SEOFuncObj[],
		downloadFile: boolean = false
	): string {
		const urls = SEOData.map((elmt) => elmt.path);
		if (!urls.find((url) => url === "/")) {
			urls.push(this._url_with_protocol);
		}

		const sitemap = urls
			.map((url) => {
				const fullUrl = url.startsWith(this._url_with_protocol)
					? url
					: `${this._url_with_protocol}${url}`;
				return `<url><loc>${fullUrl}</loc></url>`;
			})
			.join("");

		const sitemapFile = `<?xml version="1.0" encoding="UTF-8"?>
      <!-- Generated by seo-programming: https://seo-programming.com/ -->
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${sitemap}</urlset>`;

		if (downloadFile) {
			const sitemapFile = this.generateSitemapFile(SEOData);
			const blob = new Blob([sitemapFile], { type: "application/xml" });
			const url = URL.createObjectURL(blob);
			const a = document.createElement("a");
			a.href = url;
			a.download = "sitemap.xml";
			document.body.appendChild(a);
			a.click();
			document.body.removeChild(a);
		}
		return sitemapFile;
	}
}