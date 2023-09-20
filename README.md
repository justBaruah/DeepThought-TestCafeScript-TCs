# DeepThought-TestCafeScript-TCs
Simple TestCafe Script Suite for a web application to validate Login 

## DeepThought Web Application Testing Documentation

Introduction

Project Overview

### 1. Introduction

Project Overview
Application Name: DeepThought
Type: Web Application
Testing Tools: TestCafe, Visual Studio Code
Testing Tools
TestCafe: A JavaScript-based end-to-end testing framework for web applications.
Visual Studio Code: An integrated development environment (IDE) for code development and testing.
### 2. Testing Approach

#### Objectives

The primary objective of testing DeepThought Web App, is to ensure its functionality and usability of the login page through a combination of manual and automated testing using _**TestCafe**_.

### Test Categories

- Functional Testing: Verify that the application functions according to specifications.
- Regression Testing: Re-test previously tested features to detect regressions.
- Cross-Browser Testing: Ensure compatibility with multiple browsers.

### Test Environment

- Test Environment: Local development environment, VS Code, NodeJS, npm
- Browsers: Chrome, Firefox, Edge (for cross-browser testing).
- Operating Systems: Windows 10, macOS, Linux (for cross-platform testing).

### Test Automation

Automation will be implemented using TestCafe to create and execute automated test scripts.
Test scripts is organized into 2 test suites covering Valid Login and Invalid Login aspect of the application.

### Test cases will be executed manually for certain scenarios.

Test Data

Test data will be created for both positive and negative scenarios.

Data-driven testing will be employed to cover a wide range of input values.

Test Reporting

Test results, including pass/fail status, will be reported after each test run.
Screenshots and logs will be captured for failed tests.


> **_Test Case 1: Valid Login_**

```sh Test Case 1: Valid Login
 test('Login test with Valid Username and Password', async () => {

        const valid_username = 'ankur001';
        const valid_password = 'F6SxA#58DgvtXCG';

        await t
            .typeText(Selector('#username'), valid_username)
            .typeText(Selector('#password'), valid_password)
            .click(Selector('#login'));
            console.log(`Logged In ${browser}`);

        await t
            .expect(Selector('h5').withExactText('Welcome to DeepThought').exists)
            .ok({timeout: 15000});
        
            console.log('Login successful');

    });
```


> **Test Case 2: Invalid Login**
```javascript
  test('Login test with invalid Username and Password', async () => {
        const invalid_username = 'wrongname001';
        const invalid_password = 'wrongpassword110';

        await t
            .typeText(Selector('#username'), invalid_username)
            .typeText(Selector('#password'), invalid_password)
            .click(Selector('#login'))
            .expect(Selector('strong').withExactText('Login Unsuccessful').exists).ok();
        console.log('Login unsuccessful');

    });
```
> **Test Case 3: Cross-Browser Compatibility**
```javascript
const customBrowsers = ['chrome', 'firefox', 'edge']; // Specify the browsers you want to test

//The test is configured for firefox, chrome and edge browsers

customBrowsers.forEach(browser => {
    fixture`Login Test - ${browser}`
        .page`https://dev.deepthought.education/login`;
```

4. Challenges Faced During Testing

Test Data Management:
Need of creating and managing diverse test data for different scenarios.

Flakiness in Tests:

Ensuring stable and reliable test execution, especially in dynamic web applications.

We need to wait for the element to become visible or use TestCafe's await capabilities to handle asynchronous behavior.
There are delays or animations on the page that might affect the timing of the element's appearance.

In the code, the failing assertion is related to this line:

```javascript
.expect(Selector('h5').withExactText('Welcome to DeepThought').exists).ok();
```
The assertion is checking if an **h5** element with the exact text **"Welcome to DeepThought"** exists on the page. The **.exists** method returns a boolean value_ (true or false)_ to indicate whether the element was found.

The error suggested that the element with the expected text was not found on the page at the time the assertion was made.

For that I have introduced the .ok() assertion with a timeout option, which specifies the maximum time (in milliseconds) that TestCafe should wait for the element to appear before failing the test. 
One can adjust the timeout value based on your application's behavior.

```javascript
.ok({timeout: 5000});
```


### Cross-Browser Testing:

Achieving consistent results across different browsers due to variations in behavior.

```html
 Running tests in:
 - Chrome 116.0.0.0 / Windows 11
 - Firefox 117.0 / Windows 11
 - Microsoft Edge 117.0.2045.31 / Windows 11
```

> Its alsways better to be certain of ensuring the test environment accurately reflects the production environment.

## Conclusion

> The testing approach for the DeepThought web application combines automated and manual testing to ensure functionality, usability, and reliability. Challenges encountered during testing will be addressed iteratively to improve the overall testing process. By following this approach, we aim to deliver a seamless Login experience across multiple browsers and platforms.

![ss](https://github.com/justBaruah/DeepThought-TestCafeScript-TCs/assets/99552757/4e68f344-5c05-42b6-9991-5d33c794c76f)

This documentation provides an overview of the testing approach, test cases, and challenges faced during testing for the DeepThought web application. It serves as a reference for understanding the testing strategy and can be used to explain the testing process to others who view your code and testing efforts.
