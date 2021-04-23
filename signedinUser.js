"use strict";
const htmlReporter = require("pa11y-reporter-html");
var csvReporter = require("pa11y-reporter-csv");
const pa11y = require("pa11y");
const fs = require("file-system");
const tests =[
  {
    name: "Rocket Homes - Email Notification Page 1",
    url: "https://qa.rockethomes.com",
    testOptions: {
      actions: [
        "wait for element #header-nav-sign-in to be visible",
        "click element #header-nav-sign-in",
        "wait for element #username to be visible",
        "wait for element #password to be visible",
        "set field #username to tsit.vnge9rdx@mailosaur.io",
        "set field #password to Sami1234",
        "wait for element #sign-in-submit > button to be visible",
        "click element #sign-in-submit > button",
        "wait for element #header-nav-account-toggle to be visible",
        "navigate to https://qa.rockethomes.com/notifications",
        "wait for element #email-notifications > h1 to be visible",
        "wait for element #footer-foc-links to be visible"
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
    name: "Rocket Homes - My Faves Landing Page 2",
    url: "https://qa.rockethomes.com",
    testOptions: {
      actions: [
        "wait for element #header-nav-sign-in to be visible",
        "click element #header-nav-sign-in",
        "wait for element #username to be visible",
        "wait for element #password to be visible",
        "set field #username to tsit.vnge9rdx@mailosaur.io",
        "set field #password to Sami1234",
        "wait for element #sign-in-submit > button > span to be visible",
        "click element #sign-in-submit > button > span",
        "wait for url to be https://qa.rockethomes.com/",
        "wait for element #header-nav-link-faves to be visible",
        "click element #header-nav-link-faves",
        "wait for path to be /faves",
        "wait for element #my-faves-page > h1 to be visible"
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
    name: "Rocket Homes - My Searches Landing Page 3",
    url: "https://qa.rockethomes.com",
    testOptions: {
      actions: [
        "wait for element #header-nav-sign-in to be visible",
        "click element #header-nav-sign-in",
        "wait for element #username to be visible",
        "wait for element #password to be visible",
        "set field #username to tsit.vnge9rdx@mailosaur.io",
        "set field #password to Sami1234",
        "wait for element #sign-in-submit > button > span to be visible",
        "click element #sign-in-submit > button > span",
        "wait for url to be https://qa.rockethomes.com/",
        "wait for element #header-nav-link-searches to be visible",
        "click element #header-nav-link-searches",
        "wait for path to be /searches",
        "wait for element #my-searches-page > h1 to be visible"
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
    name: "Rocket Homes - Trend Page Signed In 4",
    url: "https://qa.rockethomes.com/real-estate-trends/mi/troy",
    testOptions: {
      actions: [
        "wait for element #header-nav-sign-in to be visible",
        "click element #header-nav-sign-in",
        "wait for element #username to be visible",
        "wait for element #password to be visible",
        "set field #username to tsit.vnge9rdx@mailosaur.io",
        "set field #password to Sami1234",
        "wait for element #sign-in-submit > button to be visible",
        "click element #sign-in-submit > button",
        "wait for url to be https://qa.rockethomes.com/real-estate-trends/mi/troy",
        "wait for element #trends-main-content > section:nth-child(1) > h2 to be visible",
        "wait for element #trends-sticky-header-breadcrumb-county to be visible" 
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
    name: "Rocket Homes - Property Report Page 5",
    url: "https://qa.rockethomes.com/how-much-is-my-home-worth",
    testOptions: {  
      actions: [
        "wait for element #header-nav-sign-in to be visible",
        "click element #header-nav-sign-in",
        "wait for element #username to be visible",
        "wait for element #password to be visible",
        "set field #username to tsit.vnge9rdx@mailosaur.io",
        "set field #password to Sami1234",
        "wait for element #sign-in-submit > button > span to be visible",
        "click element #sign-in-submit > button",
        "wait for url to be https://qa.rockethomes.com/how-much-is-my-home-worth",
        "wait for element #property-hub-insights > div:nth-child(1) to be visible",
        "navigate to https://qa.rockethomes.com/property-report?street_address=1310%20E%20Giddens%20Ave&city=Tampa&state_code=FL&zip=33603",
        "wait for element #property-report-aside-first-name-input to be visible",
        // Verify Your Home's Estimate - Section
        "wait for element #home-valuation > div > div.flex.justify-between.border-b.border-gray.items-start > h3 to be visible",
        // Verify Summary of Comparable Homes Sold Recently - Section
        "wait for element #property-report-comparable-homes > h3 to be visible",
        // Verify Comparable Homes - Section
        "wait for element #property-report-comparable-homes-toggle-sold to be visible",
        "wait for element #property-report-comparable-homes-carousel > div to be visible",
        // Verify Median Sold Price Section
        "wait for element #median-sold-compact-card > div > div.flex.justify-between.border-b.border-gray.items-start > h3 to be visible",
        // Verify Average Sale Time - Section
        "wait for element #days-on-market-card > div > div.flex.justify-between.border-b.border-gray.items-start > h3 to be visible",
        // Verify Number of Homes Sold - Section
        "wait for element #homes-sold-card > div > div.flex.justify-between.border-b.border-gray.items-start > h3 to be visible",
        // Learn more about selling your home - Section
        "wait for element #property-report-blog-links > div.flex.justify-between.items-center.mb-16 > h2 to be visible",
        // Verify MLS Disclaimers and Copyright
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
    name: "Rocket Homes - Credit Landing page 6",
    url: "https://qa.rockethomes.com",
    testOptions: {
      actions: [
        "wait for element #header-nav-sign-in to be visible",
        "click element #header-nav-sign-in",
        "wait for element #username to be visible",
        "wait for element #password to be visible",
        "set field #username to accessibilityUser1.vnge9rdx@mailosaur.io",
        "set field #password to Qup1234!",
        "wait for element #sign-in-submit > button to be visible",
        "click element #sign-in-submit > button",
        "wait for element #header-nav-account-toggle to be visible",
        "navigate to https://qa.rockethomes.com/credit-score",
        "wait for url to be https://qa.rockethomes.com/credit-score",
        "wait for element #credit-score-hero-card > div > div > a to be visible"
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
    name: "Rocket Homes - My Credit Score page 7",
    url: "https://qa.rockethomes.com",
    testOptions: {
      actions: [
        "wait for element #header-nav-sign-in to be visible",
        "click element #header-nav-sign-in",
        "wait for element #username to be visible",
        "wait for element #password to be visible",
        "set field #username to accessibilityUser1.vnge9rdx@mailosaur.io",
        "set field #password to Qup1234!",
        "wait for element #sign-in-submit > button to be visible",
        "click element #sign-in-submit > button",
        "wait for element #header-nav-account-toggle to be visible",
        "navigate to https://qa.rockethomes.com/my-credit",
        "wait for url to be https://qa.rockethomes.com/my-credit",
        "wait for element #my-credit > h1 to be visible"
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
    name: "Rocket Homes - Payment History page 8",
    url: "https://qa.rockethomes.com",
    testOptions: {
      actions: [
        "wait for element #header-nav-sign-in to be visible",
        "click element #header-nav-sign-in",
        "wait for element #username to be visible",
        "wait for element #password to be visible",
        "set field #username to accessibilityUser1.vnge9rdx@mailosaur.io",
        "set field #password to Qup1234!",
        "wait for element #sign-in-submit > button to be visible",
        "click element #sign-in-submit > button",
        "wait for element #header-nav-account-toggle to be visible",
        "navigate to https://qa.rockethomes.com/my-credit/payment-history/",
        "wait for url to be https://qa.rockethomes.com/my-credit/payment-history/",
        "wait for element #payment-history-details to be visible"
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
    name: "Rocket Homes - Credit Usage page 9",
    url: "https://qa.rockethomes.com",
    testOptions: {
      actions: [
        "wait for element #header-nav-sign-in to be visible",
        "click element #header-nav-sign-in",
        "wait for element #username to be visible",
        "wait for element #password to be visible",
        "set field #username to accessibilityUser1.vnge9rdx@mailosaur.io",
        "set field #password to Qup1234!",
        "wait for element #sign-in-submit > button to be visible",
        "click element #sign-in-submit > button",
        "wait for element #header-nav-account-toggle to be visible",
        "navigate to https://qa.rockethomes.com/my-credit/credit-usage/",
        "wait for url to be https://qa.rockethomes.com/my-credit/credit-usage/",
        "wait for element #my-credit-factor-main-content to be visible"
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
    name: "Rocket Homes - Age of Credit page 10",
    url: "https://qa.rockethomes.com",
    testOptions: {
      actions: [
        "wait for element #header-nav-sign-in to be visible",
        "click element #header-nav-sign-in",
        "wait for element #username to be visible",
        "wait for element #password to be visible",
        "set field #username to accessibilityUser1.vnge9rdx@mailosaur.io",
        "set field #password to Qup1234!",
        "wait for element #sign-in-submit > button to be visible",
        "click element #sign-in-submit > button",
        "wait for element #header-nav-account-toggle to be visible",
        "navigate to https://qa.rockethomes.com/my-credit/age-of-credit/",
        "wait for url to be https://qa.rockethomes.com/my-credit/age-of-credit/",
        "wait for element #age-of-credit to be visible"
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
    name: "Rocket Homes - Total Accounts page 11",
    url: "https://qa.rockethomes.com",
    testOptions: {
      actions: [
        "wait for element #header-nav-sign-in to be visible",
        "click element #header-nav-sign-in",
        "wait for element #username to be visible",
        "wait for element #password to be visible",
        "set field #username to accessibilityUser1.vnge9rdx@mailosaur.io",
        "set field #password to Qup1234!",
        "wait for element #sign-in-submit > button to be visible",
        "click element #sign-in-submit > button",
        "wait for element #header-nav-account-toggle to be visible",
        "navigate to https://qa.rockethomes.com/my-credit/total-accounts/",
        "wait for url to be https://qa.rockethomes.com/my-credit/total-accounts/",
        "wait for element #total-accounts to be visible"
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
    name: "Rocket Homes - Hard Inquiries page 12",
    url: "https://qa.rockethomes.com",
    testOptions: {
      actions: [
        "wait for element #header-nav-sign-in to be visible",
        "click element #header-nav-sign-in",
        "wait for element #username to be visible",
        "wait for element #password to be visible",
        "set field #username to accessibilityUser1.vnge9rdx@mailosaur.io",
        "set field #password to Qup1234!",
        "wait for element #sign-in-submit > button to be visible",
        "click element #sign-in-submit > button",
        "wait for element #header-nav-account-toggle to be visible",
        "navigate to https://qa.rockethomes.com/my-credit/hard-inquiries/",
        "wait for url to be https://qa.rockethomes.com/my-credit/hard-inquiries/",
        "wait for element #hard-inquiries to be visible"
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
    name: "Rocket Homes - Negative Marks page 13",
    url: "https://qa.rockethomes.com",
    testOptions: {
      actions: [
        "wait for element #header-nav-sign-in to be visible",
        "click element #header-nav-sign-in",
        "wait for element #username to be visible",
        "wait for element #password to be visible",
        "set field #username to accessibilityUser1.vnge9rdx@mailosaur.io",
        "set field #password to Qup1234!",
        "wait for element #sign-in-submit > button to be visible",
        "click element #sign-in-submit > button",
        "wait for element #header-nav-account-toggle to be visible",
        "navigate to https://qa.rockethomes.com/my-credit/negative-marks/",
        "wait for url to be https://qa.rockethomes.com/my-credit/negative-marks/",
        "wait for element #negative-marks to be visible"
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
    name: "Rocket Homes - HAC results page 14",
    url: "https://qa.rockethomes.com",
    testOptions: {
      actions: [
        "wait for element #header-nav-sign-in to be visible",
        "click element #header-nav-sign-in",
        "wait for element #username to be visible",
        "wait for element #password to be visible",
        "set field #username to accessibilityUser1.vnge9rdx@mailosaur.io",
        "set field #password to Qup1234!",
        "wait for element #sign-in-submit > button to be visible",
        "click element #sign-in-submit > button",
        "wait for element #header-nav-account-toggle to be visible",
        "navigate to https://qa.rockethomes.com/home-affordability-calculator/results?annual_income=120000&monthly_debt=1000&monthly_expenses=2000&available_funds=70000&debt_to_income=36&credit_score=660&location_id=place_ce0d208dc58d0c5f2af39915b1228516&location_description=Detroit,%20MI",
        "wait for element #hac-results-estimate to be visible",
        "wait for element #hac-results-sticky-aside to be visible",
        "wait for element #hac-results-sticky-aside-last-name-input-label to be visible",
        "wait for element #hac-results-sticky-aside-submit to be visible",
        "wait for element #hac-results-available-listings to be visible",
        "wait for element #mortgage-preapproval-cta-button to be visible",
        "wait for element #hac-affordability-guides-section to be visible",
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
  test.testOptions.screenCapture = "./Output/signedinUser/WCAG2A/" + test.name + ".png";
  test.testOptions.standard = "WCAG2A";
  const results = await pa11y(test.url, test.testOptions).catch(error => {
    return console.error(error.message);
  });
  const htmlResults = await htmlReporter.results(results);
  fs.writeFile("Output/signedinUser/WCAG2A/" + test.name + ".html", htmlResults, function(err) {
    return console.error(err);
  });
  if(test.name==='Rocket Homes - Email Notification Page 1'){
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
