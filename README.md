# Accessibility Testing
Accessibility is essential for developers and organizations who want to create high quality websites and web tools, and not exclude any person from using their products and services.
##Description
This Accessibility project is used for automated web accessibility testing leveraging pa11y.
## Setup
Since this project has a git+ssh dependency, one must first update BitBucket.org with public SSH key.
* Clone this project `npm install`
## Node Requirements
Currently, we are recommending `node v8`, which when installed it will also setup `npm 5.0.4`.  To get at the current versions you have installed, you can run the following commands:
```
$ node --version
$ npm --version
$ pa11y --version
```
## Running the tests
There are several tests and groups of them available with specific purpose.
- `aboutusPage.js` is intended to do accessibility testing for About us page on Rocket Homes.
- `buyPage.js` is intended to do accessibility testing for Buy page on Rocket Homes.
- `careersPage.js` is intended to do accessibility testing for Careers page on Rocket Homes.
- `contactusPage.js` is intended to do accessibility testing for ContactUs page on Rocket Homes.
- `homePage.js` is intended to do accessibility testing for Home page on Rocket Homes.
- `locationPage.js` is intended to do accessibility testing for Location page on Rocket Homes.
- `mortgagePage.js` is intended to do accessibility testing for Mortgage page on Rocket Homes.
- `pressroomNewsPage.js` is intended to do accessibility testing for Pressroom page on Rocket Homes.
- `sellPage.js` is intended to do accessibility testing for Sell page on Rocket Homes.
### Project Structure
`examples/output` is a folder where all the results gets saved. If you use csvReporter the results gets saved in csv format and if you use htmlReporter the results gets saved 
in the html format. 
### Running pa11y
To run this project you need to use node filename. If suppose you want to run against home page use the following command. `node homePage.js`. Once you run the test 
verify the *output* folder. If the file gets saved then the project ran successfully in your machine. 
### pa11y
Pa11y is your automated accessibility testing pal. It runs HTML CodeSniffer from the command line for programmatic accessibility reporting.
```
pa11y http://example.com
```
To read more about the pa11y you can find [here](https://github.com/pa11y/pa11y) 
### Selectors
Selectors are helpers used for identifying parts of the application in the browser.

ADDING A NEW LINE AND PUSH TO DEV