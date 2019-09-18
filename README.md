# Cypress Demo
[Cypress.io](https://www.cypress.io/) is an open-source test automation tool for modern web applications.
It is fast, easy and reliable testing for anything that runs in a browser.

Cypress.io is NOT Selenium and hence there is a new architecture been built
from the ground up. It has all-in-one package leaving no extra efforts to be
spent for Test Automation framework design. Cypress.io is very fast and hence
it is majorly used by Developers than QA Engineers to perform unit testing.

# Getting Started
Cypress.io can be installed via NPM and also via an executable.
## 1. Running via Executable
You can download the executable from [here](https://download.cypress.io/desktop).
## 2. Installing via NPM
### Pre-requisites
1. NodeJS
2. Node Package Manager (NPM)
3. IDE – Visual Studio Code, Sublime, WebStorm etc.,
4. Terminal / Windows Command Prompt

# Application Under Test:
[the TodoMVC app](http://todomvc-app-for-testing.surge.sh/)

Cypress Uses the Mocha Test Runner

Mocha comes built-in with Cypress, so we don’t need to install it. Moreover, it’s the only test runner that comes with Cypress. You must use it. And that’s another difference from Selenium, where you can run your Selenium code wherever you want, with any test runner you want.
![Todomvc App](https://github.com/havuong/cypress-demo/blob/media/cypress-demo-todomvc.jpg)
# Dashboard Service
Cypress.io is the first open-source tool to provide a Cloud-based dashboard
service. The dashboard is used to store all the test execution results, videos and
logs.
```
cypress run --record --key <your key>
```
![dashboard](https://github.com/havuong/cypress-demo/blob/media/dashboardCypress.jpg)
# Limitations
Though Cypress.io is an evolving tool, there are some limitations or trade-offs
we need to do. Below are few –
1. Customized Google Chrome Browser
2. JavaScript only
3. Super Domain Changes ends up in error (Work-arounds)
4. No support for Native Apps and Mobile Browser Apps
5. Sauce Labs / Browserstack for Cross-Browser Testing in the future – Not
now
6. Cypress.io is not a general-purpose automation tool
7. No support for multiple browser tabs
8. No support for two browsers at a time
