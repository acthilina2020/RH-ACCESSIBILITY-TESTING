'use strict';

const htmlReporter = require('pa11y-reporter-html');
var csvReporter = require('pa11y-reporter-csv');
const pa11y = require('pa11y');
const fs = require('file-system');

const tests = [
	{
		name: 'Rocket Homes - Email Notification Page #1',
		url: 'https://qa.rockethomes.com',
		testOptions: {
			actions: [
				'click element #header-nav-sign-in',
                'wait for element #username to be visible',
                'set field #username to tsit.vnge9rdx@mailosaur.io',
                'set field #password to Sami1234',
                'click element #sign-in-submit > button',
				'wait for url to be https://qa.rockethomes.com/',
				'wait for element #header-nav-dropdown-toggle to be visible',
				'click element #header-nav-dropdown-toggle',
				'wait for element #header-nav-dropdown-notifications to be visible',
				'click element #header-nav-dropdown-notifications',
                'wait for path to be /notifications',
                'wait for element #app > div > div > div.container.paddingB48 > div.col-xs-12 > div.email-notifications.col-xs-12 > div.col-xs-12.email-notification-items > div:nth-child(1) > div:nth-child(2) > div > div > div.toggle-options > button:nth-child(1) > div to be visible'
			],
			ignore: [
				'warning', 'notice'
			],
			log: {
				error: console.error.bind(console),
				debug: console.error.bind(console),
				info: console.error.bind(console)
			}
		}
	},
	{
		name: 'Rocket Homes - My Faves Landing Page #2',
		url: 'https://qa.rockethomes.com',
		testOptions: {
			actions: [
				'click element #header-nav-sign-in',
                'wait for element #username to be visible',
                'set field #username to tsit.vnge9rdx@mailosaur.io',
                'set field #password to Sami1234',
                'click element #sign-in-submit > button',
				'wait for url to be https://qa.rockethomes.com/',
				'wait for element #header-nav-link-faves to be visible',
                'click element #header-nav-link-faves',
                'wait for path to be /faves',
                'wait for element #app > div > div > div.container.positionRelative.zIndex1 > div.col-xs-12 > div > div.col-sm-6.col-md-4.bgffffff > div > div.positionAbsolute > a to be visible'
			],
			ignore: [
				'warning', 'notice'
			],
			log: {
				error: console.error.bind(console),
				debug: console.error.bind(console),
				info: console.error.bind(console)
			}
		}
	},
	{
		name: 'Rocket Homes - My Searches Landing Page #3',
		url: 'https://qa.rockethomes.com',
		testOptions: {
			actions: [
				'click element #header-nav-sign-in',
                'wait for element #username to be visible',
                'set field #username to tsit.vnge9rdx@mailosaur.io',
                'set field #password to Sami1234',
                'click element #sign-in-submit > button',
				'wait for url to be https://qa.rockethomes.com/',
				'wait for element #header-nav-link-searches to be visible',
				'click element #header-nav-link-searches',
                'wait for path to be /searches',
                'wait for element #app > div > div > div.container.positionRelative.zIndex1 > div.col-xs-12.paddingB24 > div > div > div > div:nth-child(1) > div > div.positionAbsolute > a to be visible'
			],
			ignore: [
				'warning', 'notice'
			],
			log: {
				error: console.error.bind(console),
				debug: console.error.bind(console),
				info: console.error.bind(console)
			}
		}
	},
    {
		name: 'Rocket Homes - Trend Page Signed In #4',
		url: 'https://qa.rockethomes.com/real-estate-trends/mi/troy',
		testOptions: {
			actions: [
				'click element #header-nav-sign-in',
                'wait for element #username to be visible',
                'set field #username to tsit.vnge9rdx@mailosaur.io',
                'set field #password to Sami1234',
                'click element #sign-in-submit > button',
				'wait for url to be https://qa.rockethomes.com/real-estate-trends/mi/troy',
				'wait for element #trends-hero-breadcrumb-county to be visible',
				'wait for element #market-conditions-card > div:nth-child(1) > div:nth-child(1) > h3:nth-child(1) to be visible',
			],
			ignore: [
				'warning', 'notice'
			],
			log: {
				error: console.error.bind(console),
				debug: console.error.bind(console),
				info: console.error.bind(console)
			}
		}
	}
    
    
]

async function runTest(test) {

	test.testOptions.screenCapture = './Output/' + test.name + '.png';
    test.testOptions.standard = 'WCAG2A';
    const results = await pa11y(test.url, test.testOptions).catch((error) => {
        return console.error(error.message);
    });
    
    //results.screenGrab = test.name + '.png';

    const htmlResults = await htmlReporter.results(results);
    fs.writeFile('Output/' + test.name + '.html', htmlResults, function (err) {
        return console.error(err);
    });
}

async function runAndWait() {
    try {
        for (var i = 0; i < tests.length; i++) {
            await runTest(tests[i])
        }
    } catch(e) {console.log(e);}
    
}

runAndWait();