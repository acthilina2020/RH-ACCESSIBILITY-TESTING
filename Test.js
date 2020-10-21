"use strict";
const htmlReporter = require("pa11y-reporter-html");
var csvReporter = require("pa11y-reporter-csv");
const pa11y = require("pa11y");
const fs = require("file-system");
const tests =[
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
            "wait for element #sign-in-submit > button > span to be visible",
            "click element #sign-in-submit > button > span",
            "wait for url to be https://qa.rockethomes.com/real-estate-trends/mi/troy",
            "wait for element #trends-main-content > section:nth-child(1) > h2 to be visible",
            //"wait for element #trends-sticky-header-breadcrumb-county to be visible" 
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
    // async function runTest(test) {
    //   test.testOptions.screenCapture = "./Output/signedinUser/WCAG2AA/" + test.name + ".png";
    //   test.testOptions.standard = "WCAG2AA";
    //   const results = await pa11y(test.url, test.testOptions).catch(error => {
    //     return console.error(error.message);
    //   });
    
    //   const htmlResults = await htmlReporter.results(results);
    //   fs.writeFile("Output/signedinUser/WCAG2AA/" + test.name + ".html", htmlResults, function(err) {
    //     return console.error(err);
    //   });
    //   if(test.name==='Rocket Homes - Trend Page Signed In 4'){
    //     pa11y(test.url,test.testOptions).catch(error => {
    //     return console.error(error.message);
    //     });
    //    }
    async function runTest(test) {
        test.testOptions.screenCapture =__dirname+"/../Output/signedinUser/WCAG2AA"+test.name+".png";
        test.testOptions.standard = 'WCAG2AA';
        
        const results = await pa11y(test.url,test.testOptions).catch(error => {
        return console.error(error.message);
        });
        //results.screenGrab = test.name + '.png';
        // const csvResults = await csvReporter.results(results);
        // fs.writeFile(__dirname+"/../Output/signedinUser/WCAG2AA"+test.name+".csv",csvResults,function(err) {
        // return console.error(err);
        // }); 
        const htmlResults = await htmlReporter.results(results);
        fs.writeFile(__dirname+"/../Output/signedinUser/WCAG2AA"+test.name+".html",htmlResults,function(err) {
        return console.error(err);
        }); 
        // fs.writeFile(__dirname+"/../Output/signedinUser/WCAG2AA"+test.name+".json",JSON.stringify(results),function(err) {
        //  return console.error(err);
        //  });   
         if(test.name==='Rocket Homes - Trend Page Signed In 4'){
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