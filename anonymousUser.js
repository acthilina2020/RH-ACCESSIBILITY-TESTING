"use strict";

const htmlReporter = require("pa11y-reporter-html");
var csvReporter = require("pa11y-reporter-csv");
const pa11y = require("pa11y");
const fs = require("file-system");

const tests = [
  {
    name: "Rocket Homes - Home Page 1",
    url: "https://qa.rockethomes.com",
    testOptions: {
      actions: ["wait for element #header-nav-sign-up to be visible"],
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
    name: "Rocket Homes - Listing Page 2",
    url: "https://qa.rockethomes.com/homes/219-brannan-st-unit-2g-san-francisco-ca-94107",
    testOptions: {
      actions: ["wait for element #side-nav-listing-form-first-name-input to be visible"],
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
    name: "Rocket Homes - Location Page 3",
    url: "https://qa.rockethomes.com/mi/detroit",
    testOptions: {
      actions: ["wait for element #location-title to be visible"],
      timeout: 60000,
      ignore: ["notice", "warning"],
      log: {
        error: console.error.bind(console),
        debug: console.error.bind(console),
        info: console.error.bind(console)
      }
    }
  },
  {
    name: "Rocket Homes - Mortgage Page 4",
    url: "https://qa.rockethomes.com/mortgage",
    testOptions: {
      actions: [
        "wait for element #mortgage-cta-hero to be visible",
        "wait for path to be /mortgage"
      ],
      timeout: 80000,
      ignore: ["warning", "notice"],
      log: {
        error: console.error.bind(console), 
        debug: console.error.bind(console),
        info: console.error.bind(console)
      }
    }
  },
  {
    name: "Rocket Homes - Buy Page 5",
    url: "https://qa.rockethomes.com/buy",
    testOptions: {
      actions: [
        "wait for path to be /buy",
        "wait for #buy-page-agent-guide-section to be visible"
      ],
      timeout: 70000,
      ignore: ["warning", "notice"],
      log: {
        error: console.error.bind(console),
        debug: console.error.bind(console),
        info: console.error.bind(console)
      }
    }
  },
  {
    name: "Rocket Homes - Sell Page 6",
    url: "https://qa.rockethomes.com/sell",
    testOptions: {
      actions: [
        "wait for path to be /sell",
        "wait for #sell-page > div to be visible"
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
    name: "Rocket Homes - AboutUs Page 7",
    url: "https://qa.rockethomes.com",
    testOptions: {
      actions: [
        "click element #footer-rh-links > ul > li:nth-child(1) > a",
        "wait for path to be /about-us",
        "wait for element #about-us-who-we-are-section > div > h2 to be visible"
      ],
      timeout: 60000,
      ignore: ["warning", "notice"],
      log: {
        error: console.error.bind(console),
        debug: console.error.bind(console),
        info: console.error.bind(console)
      },
      timeout: 60000
    }
  },
  {
    name: "Rocket Homes - ContactUs Page 8",
    url: "https://qa.rockethomes.com",
    testOptions: {
      actions: [
        'click element [href="/contact-us"]',
        "wait for path to be /contact-us",
        "wait for element #app > div > div.marketing-content.zIndex0 > div > div:nth-child(3) > div:nth-child(6) > div > div > button to be visible"
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
    name: "Rocket Homes - Help Page 9",
    url: "https://qa.rockethomes.com",
    testOptions: {
      actions: [
        'click element [href="/help"]',
        "wait for path to be /help",
        "wait for #app > div > div.marketing-content.zIndex0 > div > div.tabs.w-tabs > div.tabs-menu.w-tab-menu > a.tab-link-tab-1.w-inline-block.w-tab-link.w--current to be visible"
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
    name: "Rocket Homes - Press Room News Page 10",
    url: "https://qa.rockethomes.com",
    testOptions: {
      actions: [
        'click element [href="/press-room"]',
        "wait for path to be /press-room",
        "wait for element #app > div > div.marketing-content.zIndex0 > div > div.tabs.w-tabs > div.tabs-menu.w-tab-menu > a.tab-link-tab-2.w-inline-block.w-tab-link to be visible"
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
    name: "Rocket Homes - Terms Of Use Page 11",
    url: "https://qa.rockethomes.com",
    testOptions: {
      actions: [
        'click element [href="/terms"]',
        "wait for path to be /terms",
        "wait for #terms-page > div > h2:nth-child(2) to be visible"
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
    name: "Rocket Homes - Trend Page Not Signed In 12",
    url: "https://qa.rockethomes.com/real-estate-trends/mi/troy",
    testOptions: {
      actions: [],
      timeout: 600000,
      ignore: ["warning", "notice"],
      log: {
        error: console.error.bind(console),
        debug: console.error.bind(console),
        info: console.error.bind(console)
      }
    }
  },
  {
    name: "Rocket Homes - State Location Page 13",
    url: "https://qa.rockethomes.com/michigan",
    testOptions: {
      actions: [],
      timeout: 600000,
      ignore: ["warning", "notice"],
      log: {
        error: console.error.bind(console),
        debug: console.error.bind(console),
        info: console.error.bind(console)
      }
    }
  },
  {
    name: "Rocket Homes - About Our Network Page 14",
    url: "https://qa.rockethomes.com/about-our-network",
    testOptions: {
      actions: [],
      timeout: 600000,
      ignore: ["warning", "notice"],
      log: {
        error: console.error.bind(console),
        debug: console.error.bind(console),
        info: console.error.bind(console)
      }
    }
  },
  {
    name: "Rocket Homes - Blog Page 15",
    url: "https://www.rockethomes.com/blog",
    testOptions: {
      actions: [],
      timeout: 600000,
      ignore: ["warning", "notice"],
      log: {
        error: console.error.bind(console),
        debug: console.error.bind(console),
        info: console.error.bind(console)
      }
    }
  },
  {
    name: "Rocket Homes - Property Hub Page 16",
    url: "https://qa.rockethomes.com/how-much-is-my-home-worth",
    testOptions: {
      actions: ["wait for element #property-search-input to be visible"],
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
    name: "Rocket Homes - Property Report Page 17",
    url: "https://qa.rockethomes.com/property-report?street_address=1310%20E%20Giddens%20Ave&city=Tampa&state_code=FL&zip=33603",
    testOptions: {
      actions: [
      "wait for element #home-valuation > div > div.flex.justify-between.border-b.border-gray.items-start > h3 to be visible",
      "wait for element #property-report-comparable-homes > h3 to be visible",
      "wait for element #property-report-comparable-homes-toggle-sold to be visible",
      "wait for element #trends-for-similar-homes-card > div > div.flex.justify-between.border-b.border-gray.items-start > h3 to be visible",
      "wait for element #property-report-main-content > section:nth-child(6) > h2 to be visible",
      "wait for element #property-report-blog-links > div.flex.justify-between.items-center.mb-16 > h2 to be visible",
      "wait for element #trends-mls-disclaimers > p.p1.mb-8 to be visible"
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
    name: "Rocket Homes - Homes For Sale 18",
    url: "https://qa.rockethomes.com/houses-for-sale",
    testOptions: {
      actions: [
        "wait for path to be /houses-for-sale",
        "wait for #housesforsale-searchbar to be visible"
      ],
      timeout: 70000,
      ignore: ["warning", "notice"],
      log: {
        error: console.error.bind(console),
        debug: console.error.bind(console),
        info: console.error.bind(console)
      }
    }
  },
  {
    name: "Rocket Homes - Off-Market Page 19",
    url: "https://qa.rockethomes.com/homes/1082-sunset-rd-epworth-ga-30541",
    testOptions: {
      actions: [
        "wait for element #listing-address > div > div.dFlex.alignItemsCenter.marginB24.bgRocketBlue4.b1.bRocketBlue0.border-radius-4.paddingX16.paddingY8.paddingX24-sm.paddingY16-sm.box-shadow-1 > p to be visible",
        "wait for element #listing-address > div > div.col-xs-12.col-sm-9 > div.dFlex.marginB8 > div to be visible",
        "wait for element #listing-address > div > div.col-xs-12.col-sm-9 > div.dFlex.marginB8 > h1 to be visible",
        "wait for element #listing-form-contact-container > div.col-2-item.flex.justify-center > div > div:nth-child(1) > div to be visible",
        "wait for element #app > div > div > div.listing-page-content > div.container > div > div:nth-child(5) > section > h3 to be visible"
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
    name: "Rocket HQ - Credit Finance Guide page 20",
    url: "https://www.rockethq.com/learn/credit",
    testOptions: {
      actions: [
        "wait for url to be https://www.rockethq.com/learn/credit",
        "wait for element body > main > div:nth-child(1) > div > h1 to be visible"
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
  test.testOptions.screenCapture = "./Output/anonymousUser/" + test.name + ".png";
  test.testOptions.standard = "WCAG2A";
  const results = await pa11y(test.url, test.testOptions).catch(error => {
    return console.error(error.message);
  });

  //results.screenGrab = test.name + '.png';
  const htmlResults = await htmlReporter.results(results);
  fs.writeFile("Output/anonymousUser/" + test.name + ".html", htmlResults, function(err) {
    return console.error(err);
  });
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
