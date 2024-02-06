# Yolo-Test

Test Assignment for YOLO

This repo contains a set of Automation tests for the Create User Application.

# Setting up

1.  Download the repo to your local system.
    `git clone https://github.com/adi0709/Yolo-Test.git`
2.  Make sure you have node and npm installed.
3.  Make sure to install the latest version of cypress in the folder.
    Use the commands:
    `npm install cypress --save-dev`  
    or  
    `yarn add cypress --dev`
4.  Install mockoon cli to mock run the mock api
    `npm install -g @mockoon/cli`
5.  Make sure to update all the dependencies
    `npm install`
    or
    `npm i`
6.  Execute the tests by running the following commands  
    `npm run tests`
7.  Install k6 to your system to execute performance tests
    `brew install k6`
8.  Execute the performance tests by running the following commands
    `k6 run cypress/performanceTest/performanceTest.js`
