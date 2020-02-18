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
        "wait for element #sign-in-submit > button > span to be visible",
        "click element #sign-in-submit > button > span",
        "wait for url to be https://qa.rockethomes.com/",
        "wait for element #header-nav-dropdown-toggle to be visible",
        "click element #header-nav-dropdown-toggle",
        "wait for element #header-nav-dropdown-notifications to be visible",
        "click element #header-nav-dropdown-notifications",
        "wait for path to be /notifications",
        "wait for element #app > div > div > div.container.paddingB48 > div.col-xs-12 > div.textCenter.textLeft-sm.paddingY30.paddingY60-sm > div > h1 to be visible"
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
        "wait for element #sign-in-submit > button > span to be visible",
        "click element #sign-in-submit > button > span",
        "wait for url to be https://qa.rockethomes.com/real-estate-trends/mi/troy",
        "wait for element #trends-hero-breadcrumb-county to be visible"
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
  test.testOptions.screenCapture = "./Output/" + test.name + ".png";
  test.testOptions.standard = "WCAG2A";
  const results = await pa11y(test.url, test.testOptions).catch(error => {
    return console.error(error.message);
  });

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
