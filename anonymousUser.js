"use strict";

const htmlReporter = require("pa11y-reporter-html");
var csvReporter = require("pa11y-reporter-csv");
const pa11y = require("pa11y");
const fs = require("file-system");

const tests = [
  // {
  //   name: "Rocket Homes - Home Page 1",
  //   url: "https://qa.rockethomes.com",
  //   testOptions: {
  //     actions: ["wait for element #header-nav-sign-up to be visible"],
  //     timeout: 60000,
  //     ignore: ["warning", "notice"],
  //     log: {
  //       error: console.error.bind(console),
  //       debug: console.error.bind(console),
  //       info: console.error.bind(console)
  //     }
  //   }
  // },
  // {
  //   name: "Rocket Homes - Listing Page 2",
  //   url: "https://qa.rockethomes.com/homes/9516-mendiburu-rd-california-city-ca-93505",
  //   testOptions: {
  //     actions: [
  //       "wait for element #listing-aside-lead-form-form to be visible"
  //     ],
  //     timeout: 60000,
  //     ignore: ["warning", "notice"],
  //     log: {
  //       error: console.error.bind(console),
  //       debug: console.error.bind(console),
  //       info: console.error.bind(console)
  //     }
  //   }
  // },
  // {
  //   name: "Rocket Homes - Location Page 3",
  //   url: "https://qa.rockethomes.com/mi/detroit",
  //   testOptions: {
  //     actions: ["wait for element #location-title to be visible"],
  //     timeout: 60000,
  //     ignore: ["notice", "warning"],
  //     log: {
  //       error: console.error.bind(console),
  //       debug: console.error.bind(console),
  //       info: console.error.bind(console)
  //     }
  //   }
  // },
  // {
  //   name: "Rocket Homes - Mortgage Page 4",
  //   url: "https://qa.rockethomes.com/mortgage",
  //   testOptions: {
  //     actions: [
  //       "wait for element #mortgage-cta-hero to be visible",
  //       "wait for path to be /mortgage"
  //     ],
  //     timeout: 80000,
  //     ignore: ["warning", "notice"],
  //     log: {
  //       error: console.error.bind(console), 
  //       debug: console.error.bind(console),
  //       info: console.error.bind(console)
  //     }
  //   }
  // },
  // {
  //   name: "Rocket Homes - Buy Page 5",
  //   url: "https://qa.rockethomes.com/buy",
  //   testOptions: {
  //     actions: [
  //       "wait for path to be /buy",
  //       "wait for #buy-page-agent-guide-section to be visible",
  //       "wait for #buy-page-lead-form-buy-preapproved-input to be visible"
  //     ],
  //     timeout: 70000,
  //     ignore: ["warning", "notice"],
  //     log: {
  //       error: console.error.bind(console),
  //       debug: console.error.bind(console),
  //       info: console.error.bind(console)
  //     }
  //   }
  // },
  // {
  //   name: "Rocket Homes - Sell Page 6",
  //   url: "https://qa.rockethomes.com/sell",
  //   testOptions: {
  //     actions: [
  //       "wait for path to be /sell",
  //       "wait for #sell-page > div to be visible",
  //       "wait for #sell-page-lead-form-sell-address-input to be visible"
  //     ],
  //     timeout: 60000,
  //     ignore: ["warning", "notice"],
  //     log: {
  //       error: console.error.bind(console),
  //       debug: console.error.bind(console),
  //       info: console.error.bind(console)
  //     }
  //   }
  // },
  // {
  //   name: "Rocket Homes - AboutUs Page 7",
  //   url: "https://qa.rockethomes.com",
  //   testOptions: {
  //     actions: [
  //       "click element #footer-rh-links > ul > li:nth-child(1) > a",
  //       "wait for path to be /about-us",
  //       "wait for element #about-us-who-we-are-section > div > h2 to be visible"
  //     ],
  //     timeout: 60000,
  //     ignore: ["warning", "notice"],
  //     log: {
  //       error: console.error.bind(console),
  //       debug: console.error.bind(console),
  //       info: console.error.bind(console)
  //     },
  //     timeout: 60000
  //   }
  // },
  // {
  //   name: "Rocket Homes - ContactUs Page 8",
  //   url: "https://qa.rockethomes.com",
  //   testOptions: {
  //     actions: [
  //       'click element [href="/contact-us"]',
  //       "wait for path to be /contact-us",
  //       "wait for element #contact-us-form to be visible"
  //     ],
  //     timeout: 60000,
  //     ignore: ["warning", "notice"],
  //     log: {
  //       error: console.error.bind(console),
  //       debug: console.error.bind(console),
  //       info: console.error.bind(console)
  //     }
  //   }
  // },
  // {
  //   name: "Rocket Homes - Help Page 9",
  //   url: "https://qa.rockethomes.com",
  //   testOptions: {
  //     actions: [
  //       'click element [href="/help"]',
  //       "wait for path to be /help",
  //       "wait for #help-page-content > div:nth-child(2) > div > div:nth-child(3) > h2 to be visible"
  //     ],
  //     timeout: 60000,
  //     ignore: ["warning", "notice"],
  //     log: {
  //       error: console.error.bind(console),
  //       debug: console.error.bind(console),
  //       info: console.error.bind(console)
  //     }
  //   }
  // },
  // {
  //   name: "Rocket Homes - Press Room News Page 10",
  //   url: "https://qa.rockethomes.com",
  //   testOptions: {
  //     actions: [
  //       'click element [href="/press-room"]',
  //       "wait for path to be /press-room",
  //       "wait for element #app > div > div.marketing-content.zIndex0 > div > div.tabs.w-tabs > div.tabs-menu.w-tab-menu > a.tab-link-tab-2.w-inline-block.w-tab-link to be visible"
  //     ],
  //     timeout: 60000,
  //     ignore: ["warning", "notice"],
  //     log: {
  //       error: console.error.bind(console),
  //       debug: console.error.bind(console),
  //       info: console.error.bind(console)
  //     }
  //   }
  // },
  // {
  //   name: "Rocket Homes - Terms Of Use Page 11",
  //   url: "https://qa.rockethomes.com",
  //   testOptions: {
  //     actions: [
  //       'click element [href="/terms"]',
  //       "wait for path to be /terms",
  //       "wait for #terms-page > div > h2:nth-child(2) to be visible"
  //     ],
  //     timeout: 60000,
  //     ignore: ["warning", "notice"],
  //     log: {
  //       error: console.error.bind(console),
  //       debug: console.error.bind(console),
  //       info: console.error.bind(console)
  //     }
  //   }
  // },
  // {
  //   name: "Rocket Homes - Trend Page Not Signed In 12",
  //   url: "https://qa.rockethomes.com/real-estate-trends/mi/troy",
  //   testOptions: {
  //     actions: [],
  //     timeout: 600000,
  //     ignore: ["warning", "notice"],
  //     log: {
  //       error: console.error.bind(console),
  //       debug: console.error.bind(console),
  //       info: console.error.bind(console)
  //     }
  //   }
  // },
  // {
  //   name: "Rocket Homes - State Location Page 13",
  //   url: "https://qa.rockethomes.com/michigan",
  //   testOptions: {
  //     actions: [],
  //     timeout: 600000,
  //     ignore: ["warning", "notice"],
  //     log: {
  //       error: console.error.bind(console),
  //       debug: console.error.bind(console),
  //       info: console.error.bind(console)
  //     }
  //   }
  // },
  // {
  //   name: "Rocket Homes - About Our Network Page 14",
  //   url: "https://qa.rockethomes.com/about-our-network",
  //   testOptions: {
  //     actions: [],
  //     timeout: 600000,
  //     ignore: ["warning", "notice"],
  //     log: {
  //       error: console.error.bind(console),
  //       debug: console.error.bind(console),
  //       info: console.error.bind(console)
  //     }
  //   }
  // },
  // {
  //   name: "Rocket Homes - Blog Page 15",
  //   url: "https://www.rockethomes.com/blog",
  //   testOptions: {
  //     actions: [],
  //     timeout: 600000,
  //     ignore: ["warning", "notice"],
  //     log: {
  //       error: console.error.bind(console),
  //       debug: console.error.bind(console),
  //       info: console.error.bind(console)
  //     }
  //   }
  // },
  // {
  //   name: "Rocket Homes - Property Hub Page 16",
  //   url: "https://qa.rockethomes.com/how-much-is-my-home-worth",
  //   testOptions: {
  //     actions: ["wait for element #property-search-input to be visible"],
  //     timeout: 60000,
  //     ignore: ["warning", "notice"],
  //     log: {
  //       error: console.error.bind(console),
  //       debug: console.error.bind(console),
  //       info: console.error.bind(console)
  //     }
  //   }
  // },
  // {
  //   name: "Rocket Homes - Property Report Page 17",
  //   url: "https://qa.rockethomes.com/property-report?street_address=1310%20E%20Giddens%20Ave&city=Tampa&state_code=FL&zip=33603",
  //   testOptions: {
  //     actions: [
  //     "wait for element #home-valuation > div > div.flex.justify-between.border-b.border-gray.items-start > h3 to be visible",
  //     "wait for element #property-report-comparable-homes > h3 to be visible",
  //     "wait for element #property-report-comparable-homes-toggle-sold to be visible",
  //     "wait for element #trends-for-similar-homes-card > div > div.flex.justify-between.border-b.border-gray.items-start > h3 to be visible",
  //     "wait for element #property-report-main-content > section:nth-child(6) > h2 to be visible",
  //     "wait for element #property-report-blog-links > div.flex.justify-between.items-center.mb-16 > h2 to be visible",
  //     "wait for element #trends-mls-disclaimers > p.p1.mb-8 to be visible"
  //     ],
  //     timeout: 60000,
  //     ignore: ["warning", "notice"],
  //     log: {
  //       error: console.error.bind(console),
  //       debug: console.error.bind(console),
  //       info: console.error.bind(console)
  //     }
  //   }
  // },
  // {
  //   name: "Rocket Homes - Homes For Sale 18",
  //   url: "https://qa.rockethomes.com/houses-for-sale",
  //   testOptions: {
  //     actions: [
  //       "wait for path to be /houses-for-sale",
  //       "wait for #housesforsale-searchbar to be visible"
  //     ],
  //     timeout: 70000,
  //     ignore: ["warning", "notice"],
  //     log: {
  //       error: console.error.bind(console),
  //       debug: console.error.bind(console),
  //       info: console.error.bind(console)
  //     }
  //   }
  // },
  // {
  //   name: "Rocket Homes - Off-Market Page 19",
  //   url: "https://qa.rockethomes.com/homes/93-merrimac-pointe-mc-caysville-ga-30555",
  //   testOptions: {
  //     actions: [
  //       "wait for element #listing-page > div.w-full > div > div.w-full.rounded-8.p-16.mt-24.bg-no-repeat.mb-16 to be visible",
  //       "wait for element #listing-page > div:nth-child(4) > div > div:nth-child(2) to be visible",
  //       "wait for element #listing-lead-form-submit to be visible",
  //       "wait for element #footer-foc-links > h5 to be visible"
  //     ],
  //     timeout: 90000,
  //     ignore: ["warning", "notice"],
  //     log: {
  //       error: console.error.bind(console),
  //       debug: console.error.bind(console),
  //       info: console.error.bind(console)
  //     }
  //   }
  // },
  // {
  //   name: "Rocket HQ - Credit Finance Guide page 20",
  //   url: "https://www.rockethq.com/learn/credit",
  //   testOptions: {
  //     actions: [
  //       "wait for url to be https://www.rockethq.com/learn/credit",
  //       "wait for element body > main > div:nth-child(1) > div > h1 to be visible"
  //     ],
  //     timeout: 60000,
  //     ignore: ["warning", "notice"],
  //     log: {
  //       error: console.error.bind(console),
  //       debug: console.error.bind(console),
  //       info: console.error.bind(console)
  //     }
  //   }
  // },
  {
    name: "Rocket Homes - Active listing page 21",
    url: "https://qa.rockethomes.com/homes/24808-ne-colbern-rd-lees-summit-mo-64086",
    testOptions: {
      actions: [
        "wait for element #listing-page > div:nth-child(4) > div.container > div.flex-grow > h1 > span:nth-child(1) to be visible",
        "wait for element #listing-page > div:nth-child(6) > div:nth-child(3) > div > div:nth-child(2) > div:nth-child(5) > h2 > span:nth-child(2) to be visible",
        "wait for element #listing-page > div:nth-child(6) > div:nth-child(3) > div:nth-child(1) > div:nth-child(3) to be visible",
        "wait for element #listing-page > div:nth-child(6) > section:nth-child(7)  to be visible",
        "wait for element #listing-lead-form-submit to be visible"
      ],
      timeout: 60000,
      ignore: ["warning", "notice"],
      log: {
        error: console.error.bind(console),
        debug: console.error.bind(console),
        info: console.error.bind(console)
      }
    }
  },
  {
    name: "Rocket Homes - Market Reports page 22",
    url: "https://qa.rockethomes.com/real-estate-trends",
    testOptions: {
      actions: [
        "wait for element #trend-hub-search-bar to be visible",
        "wait for element #trend-hub-featured-locations to be visible",
        "wait for element #trend-hub-faq to be visible"
      ],
      timeout: 60000,
      ignore: ["warning", "notice"],
      log: {
        error: console.error.bind(console),
        debug: console.error.bind(console),
        info: console.error.bind(console)
      }
    }
  }
];
async function runTest(test) {
  test.testOptions.screenCapture = "./Output/anonymousUser/WCAG2A/" + test.name + ".png";
  test.testOptions.standard = "WCAG2A";
  const results = await pa11y(test.url, test.testOptions).catch(error => {
    return console.error(error.message);
  });
  const htmlResults = await htmlReporter.results(results);
  fs.writeFile("Output/anonymousUser/WCAG2A/" + test.name + ".html", htmlResults, function(err) {
    return console.error(err);
  });
  if(test.name==='Rocket Homes - Home Page 1'){
    pa11y(test.url,test.testOptions).catch(error => {
    return console.error(error.message);
    });
  }
}
async function runAndWait() {
  try {
    for (var i = 0; i < tests.length; i++) {
      await runTest(tests[i]);
    }
  } catch (e) {
    console.log(e);
  }
}
runAndWait();
