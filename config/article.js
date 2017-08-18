export default () => ({ // eslint-disable-line

  // set country here to configure which
  // indicators are displayed in the dashboard page
  country: 'Russia',

  // link file UUID
  id: '7a76aa64-61a1-11e7-8814-0ac7eb84e5f1',

  // canonical URL of the published page
  // "$url" get filled in by the ./configure script
  url: 'https://ig.ft.com/special-reports/country-focus/russia/',

  // To set an exact publish date do this:
  //       new Date('2016-05-17T17:11:22Z')
  publishedDate: new Date(),

  headline: 'Headline goes here',

  // summary === standfirst (Summary is what the content API calls it)
  summary: 'Standfirst goes here',

  topic: {
    name: 'Russia Business and Finance',
    url: 'https://www.ft.com/russia-business-finance',
  },

// this is optional, and usually not needed.
  relatedArticle: {
    text: '',
    url: '',
  },

  // this is the large image at the top of the page. 
  mainImage: {
    title: '',
    description: '',
    credit: '',

    // You can provide a UUID to an image and it was populate everything else
    uuid: '',

    // You can also provide a URL
    // url: 'https://image.webservices.ft.com/v1/images/raw/http%3A%2F%2Fcom.ft.imagepublish.prod.s3.amazonaws.com%2Fc4bf0be4-7c15-11e4-a7b8-00144feabdc0?source=ig&fit=scale-down&width=700',
  },

  // Byline can by a plain string, markdown, or array of authors
  // if array of authors, url is optional
  byline: [
    { name: 'Owen Walker', url: 'https://www.ft.com/stream/a4df71f6-0fd2-3d24-86f3-205d06934714' },
    { name: 'Christopher Möller', url: 'https://webkid.io/' },
    { name: 'Moritz Klack', url: 'https://webkid.io/' },
  ],

  // Appears in the HTML <title>
  title: '',

  // meta data
  description: '',

  /*
  TODO: Select Twitter card type -
        "summary" or "summary_large_image"

        Twitter card docs:
        https://dev.twitter.com/cards/markup
  */
  twitterCard: 'summary',

  /*
  TODO: Do you want to tweak any of the
        optional social meta data?
  */
  // General social
  // socialImage: '',
  // socialHeadline: '',
  // socialDescription: '',
  // twitterCreator: '@author's_account', // shows up in summary_large_image cards

  // TWEET BUTTON CUSTOM TEXT
  // tweetText: '',
  // twitterRelatedAccounts: ['authors_account_here', 'ftdata'], // Twitter lists these as suggested accounts to follow after a user tweets (do not include @)

  // Fill out the Facebook/Twitter metadata sections below if you want to
  // override the "General social" options above

  // TWITTER METADATA (for Twitter cards)
  // twitterImage: '',
  // twitterHeadline: '',
  // twitterDescription: '',

  // FACEBOOK
  // facebookImage: '',
  // facebookHeadline: '',
  // facebookDescription: '',

  //ADVERTISING
  ads: {
    // ad unit hierarchy makes ads more granular. Start with ft.com and /companies /markets /world as appropriate to your story
    gptAdunit: 'ft.com/world/europe',
    // granular targeting is optional and will be specified by the ads team
    dftTargeting: '',
  },

  tracking: {

    /*

    Microsite Name

    e.g. guffipedia, business-books, baseline.
    Used to query groups of pages, not intended for use with
    one off interactive pages. If you're building a microsite
    consider more custom tracking to allow better analysis.
    Also used for pages that do not have a UUID for whatever reason
    */
    // micrositeName: '',

    /*
    Product name

    This will usually default to "IG"
    however another value may be needed
    */
    // product: '',
  },
});
