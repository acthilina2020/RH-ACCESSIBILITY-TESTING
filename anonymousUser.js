"use strict";

const htmlReporter = require("pa11y-reporter-html");
var csvReporter = require("pa11y-reporter-csv");
const pa11y = require("pa11y");
const fs = require("file-system");

const tests = [
  {
    name: "Rocket Homes - Home Page #1",
    url: "https://qa.rockethomes.com",
    testOptions: {
      actions: [],
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
    name: "Rocket Homes - Listing Page #2",
    url: "https://qa.rockethomes.com/homes/46-yale-pl-buffalo-ny-14210",
    testOptions: {
      actions: ["wait for element #listing-cta-button to be visible"],
      ignore: ["warning", "notice"],
      log: {
        error: console.error.bind(console),
        debug: console.error.bind(console),
        info: console.error.bind(console)
      }
    }
  },
  {
    name: "Rocket Homes - Location Page #3",
    url: "https://qa.rockethomes.com/mi/detroit",
    testOptions: {
      actions: ["wait for element #location-list-sort to be visible"],
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
    name: "Rocket Homes - Mortgage Page #4",
    url: "https://qa.rockethomes.com",
    testOptions: {
      actions: [
        "click element #header-nav-mortgage",
        "wait for path to be /mortgage",
        "wait for element #mortgage-cta-lets-begin to be visible"
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
    name: "Rocket Homes - Buy Page #5",
    url: "https://qa.rockethomes.com",
    testOptions: {
      actions: [
        "click element #header-nav-buy",
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
    name: "Rocket Homes - Sell Page #6",
    url: "https://qa.rockethomes.com",
    testOptions: {
      actions: [
        'click element [href="/sell"]',
        "wait for path to be /sell",
        "wait for #sell-page-agent-guide-section > .h3 to be visible"
      ],
      ignore: ["warning", "notice"],
      log: {
        error: console.error.bind(console),
        debug: console.error.bind(console),
        info: console.error.bind(console)
      }
    }
  },
  {
    name: "Rocket Homes - AboutUs Page #7",
    url: "https://qa.rockethomes.com",
    testOptions: {
      actions: [
        "click element #footer-rh-links > ul > li:nth-child(1) > a",
        "wait for path to be /about-us",
        "wait for element #about-us-who-we-are-section > div > h2 to be visible"
      ],
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
    name: "Rocket Homes - ContactUs Page #8",
    url: "https://qa.rockethomes.com",
    testOptions: {
      actions: [
        'click element [href="/contact-us"]',
        "wait for path to be /contact-us",
        "wait for element #app > div > div.marketing-content.zIndex0 > div > div:nth-child(3) > div:nth-child(6) > div > div > button to be visible"
      ],
      ignore: ["warning", "notice"],
      log: {
        error: console.error.bind(console),
        debug: console.error.bind(console),
        info: console.error.bind(console)
      }
    }
  },
  {
    name: "Rocket Homes - Help Page #9",
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
    name: "Rocket Homes - Press Room News Page #10",
    url: "https://qa.rockethomes.com",
    testOptions: {
      actions: [
        'click element [href="/press-room"]',
        "wait for path to be /press-room",
        "wait for element #app > div > div.marketing-content.zIndex0 > div > div.tabs.w-tabs > div.tabs-menu.w-tab-menu > a.tab-link-tab-2.w-inline-block.w-tab-link to be visible"
      ],
      ignore: ["warning", "notice"],
      log: {
        error: console.error.bind(console),
        debug: console.error.bind(console),
        info: console.error.bind(console)
      }
    }
  },
  {
    name: "Rocket Homes - Terms Of Use Page #11",
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
    name: "Rocket Homes - Trend Page Not Signed In #12",
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
    name: "Rocket Homes - State Location Page #13",
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
    name: "Rocket Homes - About Our Network Page #14",
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
    name: "Rocket Homes - Blog Page #15",
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
  }
];

async function runTest(test) {
  test.testOptions.screenCapture = "./Output/" + test.name + ".png";
  test.testOptions.standard = "WCAG2A";
  const results = await pa11y(test.url, test.testOptions).catch(error => {
    return console.error(error.message);
  });

  //results.screenGrab = test.name + '.png';

  const htmlResults = await htmlReporter.results(results);
  fs.writeFile("Output/" + test.name + ".html", htmlResults, function(err) {
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