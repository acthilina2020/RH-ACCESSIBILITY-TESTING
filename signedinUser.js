"use strict";

const htmlReporter = require("pa11y-reporter-html");
var csvReporter = require("pa11y-reporter-csv");
const pa11y = require("pa11y");
const fs = require("file-system");

const tests = [
  {
    name: "Rocket Homes - Email Notification Page #1",
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
        "wait for element #footer-container > footer > div.app-footer__nav.container > div.app-footer__foc-links-container > section > nav > a:nth-child(4) > img to be visible"
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
    name: "Rocket Homes - My Faves Landing Page #2",
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
      ignore: ["warning", "notice"],
      log: {
        error: console.error.bind(console),
        debug: console.error.bind(console),
        info: console.error.bind(console)
      }
    }
  },
  {
    name: "Rocket Homes - My Searches Landing Page #3",
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
      ignore: ["warning", "notice"],
      log: {
        error: console.error.bind(console),
        debug: console.error.bind(console),
        info: console.error.bind(console)
      }
    }
  },
  {
    name: "Rocket Homes - Trend Page Signed In #4",
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
      ignore: ["warning", "notice"],
      log: {
        error: console.error.bind(console),
        debug: console.error.bind(console),
        info: console.error.bind(console)
      }
    }
  },
  {
    name: "Rocket Homes - Property Report Page #5",
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
        "wait for element #comparable-homes-price-range > div > div:nth-child(2) > span to be visible",
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
  test.testOptions.screenCapture = "./Output/signedinUser/" + test.name + ".png";
  test.testOptions.standard = "WCAG2A";
  const results = await pa11y(test.url, test.testOptions).catch(error => {
    return console.error(error.message);
  });

  const htmlResults = await htmlReporter.results(results);
  fs.writeFile("Output/signedinUser/" + test.name + ".html", htmlResults, function(err) {
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
