$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Login Test",
  "description": "As a User I want to login into demo.nopCommerce.com website.",
  "id": "login-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 12072714300,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to login page",
  "description": "",
  "id": "login-test;user-should-navigate-to-login-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User clicks on login link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User should navigate to login page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.userIsOnHomepage()"
});
formatter.result({
  "duration": 331450500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.userClicksOnLoginLink()"
});
formatter.result({
  "duration": 2302739100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.userShouldNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 85911600,
  "status": "passed"
});
formatter.after({
  "duration": 2243728000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "User should not login successfully with invalid credentials",
  "description": "",
  "id": "login-test;user-should-not-login-successfully-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User clicks on login link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User enters email id \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User should see the error message \"\u003cerrorMsg\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "login-test;user-should-not-login-successfully-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "errorMsg"
      ],
      "line": 18,
      "id": "login-test;user-should-not-login-successfully-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "cbust55@gmail.com",
        "admin123",
        "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found"
      ],
      "line": 19,
      "id": "login-test;user-should-not-login-successfully-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "codebust5@gmail.com",
        "admin555",
        "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found"
      ],
      "line": 20,
      "id": "login-test;user-should-not-login-successfully-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "ccbust10@gmail.com",
        "ADMIN420",
        "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found"
      ],
      "line": 21,
      "id": "login-test;user-should-not-login-successfully-with-invalid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7562564100,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "User should not login successfully with invalid credentials",
  "description": "",
  "id": "login-test;user-should-not-login-successfully-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User clicks on login link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User enters email id \"cbust55@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters password \"admin123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User should see the error message \"Login was unsuccessful. Please correct the errors and try again.\nNo customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.userIsOnHomepage()"
});
formatter.result({
  "duration": 33300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.userClicksOnLoginLink()"
});
formatter.result({
  "duration": 1393184000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cbust55@gmail.com",
      "offset": 22
    }
  ],
  "location": "LoginTest.userEntersEmailId(String)"
});
formatter.result({
  "duration": 319712600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 22
    }
  ],
  "location": "LoginTest.userEntersPassword(String)"
});
formatter.result({
  "duration": 260392300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.userClicksOnLoginButton()"
});
formatter.result({
  "duration": 1538942300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found",
      "offset": 35
    }
  ],
  "location": "LoginTest.userShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 112940200,
  "status": "passed"
});
formatter.after({
  "duration": 1275474100,
  "status": "passed"
});
formatter.before({
  "duration": 5797466000,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "User should not login successfully with invalid credentials",
  "description": "",
  "id": "login-test;user-should-not-login-successfully-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User clicks on login link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User enters email id \"codebust5@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters password \"admin555\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User should see the error message \"Login was unsuccessful. Please correct the errors and try again.\nNo customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.userIsOnHomepage()"
});
formatter.result({
  "duration": 38700,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.userClicksOnLoginLink()"
});
formatter.result({
  "duration": 864795300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "codebust5@gmail.com",
      "offset": 22
    }
  ],
  "location": "LoginTest.userEntersEmailId(String)"
});
formatter.result({
  "duration": 213124000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin555",
      "offset": 22
    }
  ],
  "location": "LoginTest.userEntersPassword(String)"
});
formatter.result({
  "duration": 251467700,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.userClicksOnLoginButton()"
});
formatter.result({
  "duration": 684865300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found",
      "offset": 35
    }
  ],
  "location": "LoginTest.userShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 123244500,
  "status": "passed"
});
formatter.after({
  "duration": 1773062600,
  "status": "passed"
});
formatter.before({
  "duration": 5176407000,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User should not login successfully with invalid credentials",
  "description": "",
  "id": "login-test;user-should-not-login-successfully-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User clicks on login link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User enters email id \"ccbust10@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters password \"ADMIN420\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User should see the error message \"Login was unsuccessful. Please correct the errors and try again.\nNo customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.userIsOnHomepage()"
});
formatter.result({
  "duration": 38900,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.userClicksOnLoginLink()"
});
formatter.result({
  "duration": 1214702700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ccbust10@gmail.com",
      "offset": 22
    }
  ],
  "location": "LoginTest.userEntersEmailId(String)"
});
formatter.result({
  "duration": 194138100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ADMIN420",
      "offset": 22
    }
  ],
  "location": "LoginTest.userEntersPassword(String)"
});
formatter.result({
  "duration": 156338400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.userClicksOnLoginButton()"
});
formatter.result({
  "duration": 1096590700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found",
      "offset": 35
    }
  ],
  "location": "LoginTest.userShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 105223500,
  "status": "passed"
});
formatter.after({
  "duration": 1100513300,
  "status": "passed"
});
});