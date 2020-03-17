# Cinépolis: Buying a ticket automated test

With this test I try to buy a ticket a fixed movie and a fixed time on Cinépolis website.

# Description

This test was done in order to implement what I have learned so far in Enroute.

Once the script it's executed it should go to the cinépolis website and try to buy a ticket for Bloodshot movie at 22:40.

### Tech

What I used for this project:

* CucumberJS 6.0.5
* WebDriverIO v5 5.21.0
* JavaScript 

### Installation

This project requires requires Node.js, CucumberJS, Chromedriver and Selenium- Webdriver

The dependencies are found in the package.json. Just run the following command to install:

```sh
$ cd cinepolis-proyecto
$ npm install
```
### Running the test

To run the test make sure your are on the current forlder
```sh
$ cd cinepolis-proyecto
```
Then run the following command
```sh
$ /node_modules/.bin/cucumber-js ./features/ -r ./steps/
```
Test should start after running this command