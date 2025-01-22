/**
 * DON'T FORGET TO SET THE WEBSITE URL AND THE DEFAULT IMAGE
 * 
 * développeur
 * développeur full stack
 * tjm
 * entreprise full remote
 * 
 */
export const WEBSITE_URL = "https://mywebsite.com"; //IMPORTANT: Do not include the trailing slash
export const DEFAULT_IMAGE = WEBSITE_URL + "/default-image.jpg";

/**
* The following array is the base of what we're going to use to implement the PSEO
* Adapt it depending on your project, website, and add what you want to display on the page that is unique to the keyword/route
*/
export const SEO_DATA = [
  // default page
  {
    id: 'home',
    name: 'home',
    title: 'Home',
    path: '/',
    description: 'Welcome to our website',
    mainImage: 'home.jpg',
    footerLink: 'Home',
    prefix: '',
    sufix: '',
    footerText: '',
    // ...
  },
];