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
    name: "Rocket Homes - Listing Page contains state name in as city 2",
    url: "https://qa.rockethomes.com/homes/michigan-trl-kewadin-mi-49648",
    testOptions: {
      actions: [
        "wait for element #listing-aside-lead-form-form to be visible"
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
        "wait for #buy-page-agent-guide-section to be visible",
        "wait for #buy-page-lead-form-buy-preapproved-input to be visible"
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
        "wait for #sell-page-hero-card to be visible",
        "wait for #sell-hero-cta to be visible",
        "wait for #sell-page-hero-link to be visible",
        "wait for #sell-page-explore-options-toggle-show-agent to be visible",
        "wait for #sell-page-explore-options-toggle-show-owner to be visible",
        "wait for #sell-page-how-it-works-toggle-show-agent to be visible",
        "wait for #sell-page-how-it-works-toggle-show-owner to be visible",
        "wait for #sell-page-faqs-toggle-show-agent to be visible",
        "wait for #sell-page-faqs-toggle-show-owner to be visible",
        "wait for #contact-section-phone to be visible",
        "wait for #sell-page-lead-form-sell-address-input to be visible",
        "wait for #sell-page-buying-section-cta to be visible"
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
        "wait for element #contact-us-form to be visible"
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
        "wait for #help-page-content > div:nth-child(2) > div > div:nth-child(3) > h2 to be visible"
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
        "wait for element #press-room-content > div:nth-child(1) > div.container > button:nth-child(2) to be visible"
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
    url: "https://qa.rockethomes.com/homes/93-merrimac-pointe-mc-caysville-ga-30555",
    testOptions: {
      actions: [
        "wait for element #listing-page > div:nth-child(2) > div > div > div.w-full.rounded-8.p-16.mt-24.bg-no-repeat.mb-16 to be visible",
        "wait for element #listing-page > div:nth-child(2) > div > div > div > div:nth-child(2) to be visible",
        "wait for element #listing-lead-form-submit to be visible",
        "wait for element #footer-foc-links > h5 to be visible"
      ],
      timeout: 90000,
      ignore: ["warning", "notice"],
      log: {
        error: console.error.bind(console),
        debug: console.error.bind(console),
        info: console.error.bind(console)
      }
    }
  },
  {
    name: "Rocket Homes - Credit Guide page 20",
    url: "https://qa.rockethomes.com/credit-guide",
    testOptions: {
      actions: [
        "wait for url to be https://qa.rockethomes.com/credit-guide",
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
  },
  {
    name: "Rocket Homes - Active listing page 21",
    url: "https://qa.rockethomes.com/homes/1141-s-shore-dr-lake-waukomis-mo-64151",
    testOptions: {
      actions: [
        "wait for element #listing-overview-section to be visible",
        "wait for element #listing-trend-report-card-cta to be visible",
        "wait for element #listing-mls-details-facts-and-features to be visible",
        "wait for element #listing-mls-details-description to be visible",
        "wait for element #listing-mls-details-interior-features to be visible",
        "wait for element #listing-mls-details-interior-features to be visible",
        "wait for element #listing-mls-details-other to be visible",
        "wait for element #listing-neighbors-like-section to be visible",
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
        "wait for element #trend-hub > section > div:nth-child(2) > div > h1 to be visible",
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
  },
  {
    name: "Rocket Homes - How Much Home Can I Afford? page 23",
    url: "https://qa.rockethomes.com/home-affordability-calculator",
    testOptions: {
      actions: [
        "wait for element #hac-location-input to be visible",
        "set field #hac-location-input to Detroit, MI",
        " wait for element to be #react-autowhatever-1--item-0 visible",
        "clcik element #react-autowhatever-1--item-0",
        "wait for element #hac-annual-income-input to be visible",
        "set field #hac-annual-income-input to 120000",
        "wait for element #hac-available-funds-input to be visible",
        "set field #hac-available-funds-input to 70000",
        "wait for element #hac-monthly-debt-input to be visible",
        "set field #hac-monthly-debt-input to 1000",
        "wait for element #hac-monthly-expenses-input to be visible",
        "set field #hac-monthly-expenses-input to 2000",
        "wait for element #hac-landing-form-submit-button to be visible",
        "click element #hac-landing-form-submit-button",
        "wait for url to be https://qa.rockethomes.com/home-affordability-calculator/results?location_id=place_ce0d208dc58d0c5f2af39915b1228516&location_description=Detroit%2C+MI&annual_income=120000&available_funds=70000&monthly_debt=1000&monthly_expenses=2000&credit_score=660",
        "wait for element #hac-results-estimate > div.relative > div > h1  to be visible",
        "wait for element #hac-faq-section to be visible"
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
