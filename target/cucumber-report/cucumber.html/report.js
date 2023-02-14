$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("jobSearchTest.feature");
formatter.feature({
  "line": 2,
  "name": "Job Search Test",
  "description": "As a User, I want to search for job opportunities on uk-cv-library website.",
  "id": "job-search-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Search for jobs",
  "description": "",
  "id": "job-search-test;search-for-jobs",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User clicks on Accept Cookies",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters Job Title \"\u003cjobTitle\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enters Location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User selects distance from dropdown menu \"\u003cdistance\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on More Search Options link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enters Minimum Salary \"\u003csalaryMin\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters Maximum Salary \"\u003csalaryMax\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "And User selects Salary Type from dropdown menu \"\u003csalaryType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "And User selects Job Type from dropdown menu \"\u003cjobType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User clicks on Find Jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User should verify the Header Text \"\u003cresult\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "job-search-test;search-for-jobs;",
  "rows": [
    {
      "cells": [
        "jobTitle",
        "location",
        "distance",
        "salaryMin",
        "salaryMax",
        "salaryType",
        "jobType",
        "result"
      ],
      "line": 19,
      "id": "job-search-test;search-for-jobs;;1"
    },
    {
      "cells": [
        "Tester",
        "Harrow",
        "up to 5 miles",
        "30000",
        "50000",
        "Per annum",
        "Permanent",
        "Permanent Tester jobs in Harrow on the Hill"
      ],
      "line": 20,
      "id": "job-search-test;search-for-jobs;;2"
    },
    {
      "cells": [
        "Retail",
        "Edgware",
        "up to 5 miles",
        "300",
        "500",
        "Per week",
        "Part Time",
        "Part Time Retail jobs in Edgware"
      ],
      "line": 21,
      "id": "job-search-test;search-for-jobs;;3"
    },
    {
      "cells": [
        "Web developer",
        "Essex",
        "up to 10 miles",
        "40000",
        "650000",
        "Per annum",
        "Permanent",
        "Permanent Web Developer jobs in Essex"
      ],
      "line": 22,
      "id": "job-search-test;search-for-jobs;;4"
    },
    {
      "cells": [
        "Data Analyst",
        "Manchester",
        "up to 1 mile",
        "50000",
        "75000",
        "Per annum",
        "Any",
        "Data Analyst jobs in Manchester"
      ],
      "line": 23,
      "id": "job-search-test;search-for-jobs;;5"
    },
    {
      "cells": [
        "Surgeon",
        "HA1 1AA",
        "up to 10 miles",
        "6000",
        "9000",
        "Per month",
        "Temporary",
        "Temporary Surgeon jobs in HA1 1AA"
      ],
      "line": 24,
      "id": "job-search-test;search-for-jobs;;6"
    },
    {
      "cells": [
        "Business Analyst",
        "Warwickshire",
        "up to 2 miles",
        "50",
        "100",
        "Per hour",
        "Permanent",
        "Permanent Business Analyst jobs in Warwickshire"
      ],
      "line": 25,
      "id": "job-search-test;search-for-jobs;;7"
    },
    {
      "cells": [
        "Geologist",
        "Surrey",
        "up to 25 miles",
        "250",
        "350",
        "Per day",
        "Any",
        "Geologist jobs in Surrey"
      ],
      "line": 26,
      "id": "job-search-test;search-for-jobs;;8"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 16327015000,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Search for jobs",
  "description": "",
  "id": "job-search-test;search-for-jobs;;2",
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
  "line": 6,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User clicks on Accept Cookies",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters Job Title \"Tester\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enters Location \"Harrow\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User selects distance from dropdown menu \"up to 5 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on More Search Options link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enters Minimum Salary \"30000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters Maximum Salary \"50000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "And User selects Salary Type from dropdown menu \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "And User selects Job Type from dropdown menu \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User clicks on Find Jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User should verify the Header Text \"Permanent Tester jobs in Harrow on the Hill\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchTest.userIsOnHomepage()"
});
formatter.result({
  "duration": 280522500,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTest.userClicksOnAcceptCookies()"
});
formatter.result({
  "duration": 20620121100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 23
    }
  ],
  "location": "JobSearchTest.userEntersJobTitle(String)"
});
formatter.result({
  "duration": 4064440500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harrow",
      "offset": 22
    }
  ],
  "location": "JobSearchTest.userEntersLocation(String)"
});
formatter.result({
  "duration": 288692500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 5 miles",
      "offset": 42
    }
  ],
  "location": "JobSearchTest.userSelectsDistanceFromDropdownMenu(String)"
});
formatter.result({
  "duration": 479651000,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTest.userClicksOnMoreSearchOptionsLink()"
});
formatter.result({
  "duration": 695664200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 28
    }
  ],
  "location": "JobSearchTest.userEntersMinimumSalary(String)"
});
formatter.result({
  "duration": 167784400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50000",
      "offset": 28
    }
  ],
  "location": "JobSearchTest.userEntersMaximumSalary(String)"
});
formatter.result({
  "duration": 188165800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 49
    }
  ],
  "location": "JobSearchTest.andUserSelectsSalaryTypeFromDropdownMenu(String)"
});
formatter.result({
  "duration": 205588800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 46
    }
  ],
  "location": "JobSearchTest.andUserSelectsJobTypeFromDropdownMenu(String)"
});
formatter.result({
  "duration": 264516500,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTest.userClicksOnFindJobsButton()"
});
formatter.result({
  "duration": 17381549000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Tester jobs in Harrow on the Hill",
      "offset": 36
    }
  ],
  "location": "JobSearchTest.userShouldVerifyTheHeaderText(String)"
});
formatter.result({
  "duration": 352268200,
  "status": "passed"
});
formatter.after({
  "duration": 2301495900,
  "status": "passed"
});
formatter.before({
  "duration": 11944947500,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Search for jobs",
  "description": "",
  "id": "job-search-test;search-for-jobs;;3",
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
  "line": 6,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User clicks on Accept Cookies",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters Job Title \"Retail\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enters Location \"Edgware\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User selects distance from dropdown menu \"up to 5 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on More Search Options link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enters Minimum Salary \"300\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters Maximum Salary \"500\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "And User selects Salary Type from dropdown menu \"Per week\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "And User selects Job Type from dropdown menu \"Part Time\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User clicks on Find Jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User should verify the Header Text \"Part Time Retail jobs in Edgware\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchTest.userIsOnHomepage()"
});
formatter.result({
  "duration": 9242900,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTest.userClicksOnAcceptCookies()"
});
formatter.result({
  "duration": 20404682800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Retail",
      "offset": 23
    }
  ],
  "location": "JobSearchTest.userEntersJobTitle(String)"
});
formatter.result({
  "duration": 2978987700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Edgware",
      "offset": 22
    }
  ],
  "location": "JobSearchTest.userEntersLocation(String)"
});
formatter.result({
  "duration": 178930400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 5 miles",
      "offset": 42
    }
  ],
  "location": "JobSearchTest.userSelectsDistanceFromDropdownMenu(String)"
});
formatter.result({
  "duration": 303512300,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTest.userClicksOnMoreSearchOptionsLink()"
});
formatter.result({
  "duration": 407632000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "300",
      "offset": 28
    }
  ],
  "location": "JobSearchTest.userEntersMinimumSalary(String)"
});
formatter.result({
  "duration": 370944400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 28
    }
  ],
  "location": "JobSearchTest.userEntersMaximumSalary(String)"
});
formatter.result({
  "duration": 144622100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per week",
      "offset": 49
    }
  ],
  "location": "JobSearchTest.andUserSelectsSalaryTypeFromDropdownMenu(String)"
});
formatter.result({
  "duration": 272663800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Part Time",
      "offset": 46
    }
  ],
  "location": "JobSearchTest.andUserSelectsJobTypeFromDropdownMenu(String)"
});
formatter.result({
  "duration": 215877300,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTest.userClicksOnFindJobsButton()"
});
formatter.result({
  "duration": 229524100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Part Time Retail jobs in Edgware",
      "offset": 36
    }
  ],
  "location": "JobSearchTest.userShouldVerifyTheHeaderText(String)"
});
formatter.result({
  "duration": 15650638600,
  "status": "passed"
});
formatter.after({
  "duration": 1484229500,
  "status": "passed"
});
formatter.before({
  "duration": 9915854900,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Search for jobs",
  "description": "",
  "id": "job-search-test;search-for-jobs;;4",
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
  "line": 6,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User clicks on Accept Cookies",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters Job Title \"Web developer\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enters Location \"Essex\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User selects distance from dropdown menu \"up to 10 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on More Search Options link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enters Minimum Salary \"40000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters Maximum Salary \"650000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "And User selects Salary Type from dropdown menu \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "And User selects Job Type from dropdown menu \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User clicks on Find Jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User should verify the Header Text \"Permanent Web Developer jobs in Essex\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchTest.userIsOnHomepage()"
});
formatter.result({
  "duration": 15721300,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTest.userClicksOnAcceptCookies()"
});
formatter.result({
  "duration": 20693225800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Web developer",
      "offset": 23
    }
  ],
  "location": "JobSearchTest.userEntersJobTitle(String)"
});
formatter.result({
  "duration": 688593000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Essex",
      "offset": 22
    }
  ],
  "location": "JobSearchTest.userEntersLocation(String)"
});
formatter.result({
  "duration": 243576500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 10 miles",
      "offset": 42
    }
  ],
  "location": "JobSearchTest.userSelectsDistanceFromDropdownMenu(String)"
});
formatter.result({
  "duration": 2113952600,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTest.userClicksOnMoreSearchOptionsLink()"
});
formatter.result({
  "duration": 623216200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40000",
      "offset": 28
    }
  ],
  "location": "JobSearchTest.userEntersMinimumSalary(String)"
});
formatter.result({
  "duration": 138225000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "650000",
      "offset": 28
    }
  ],
  "location": "JobSearchTest.userEntersMaximumSalary(String)"
});
formatter.result({
  "duration": 253827900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 49
    }
  ],
  "location": "JobSearchTest.andUserSelectsSalaryTypeFromDropdownMenu(String)"
});
formatter.result({
  "duration": 139712300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 46
    }
  ],
  "location": "JobSearchTest.andUserSelectsJobTypeFromDropdownMenu(String)"
});
formatter.result({
  "duration": 210321100,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTest.userClicksOnFindJobsButton()"
});
formatter.result({
  "duration": 221268800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Web Developer jobs in Essex",
      "offset": 36
    }
  ],
  "location": "JobSearchTest.userShouldVerifyTheHeaderText(String)"
});
formatter.result({
  "duration": 16083157700,
  "status": "passed"
});
formatter.after({
  "duration": 1619129500,
  "status": "passed"
});
formatter.before({
  "duration": 9433874400,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Search for jobs",
  "description": "",
  "id": "job-search-test;search-for-jobs;;5",
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
  "line": 6,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User clicks on Accept Cookies",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters Job Title \"Data Analyst\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enters Location \"Manchester\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User selects distance from dropdown menu \"up to 1 mile\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on More Search Options link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enters Minimum Salary \"50000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters Maximum Salary \"75000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "And User selects Salary Type from dropdown menu \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "And User selects Job Type from dropdown menu \"Any\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User clicks on Find Jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User should verify the Header Text \"Data Analyst jobs in Manchester\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchTest.userIsOnHomepage()"
});
formatter.result({
  "duration": 7607200,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTest.userClicksOnAcceptCookies()"
});
formatter.result({
  "duration": 20377642000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Data Analyst",
      "offset": 23
    }
  ],
  "location": "JobSearchTest.userEntersJobTitle(String)"
});
formatter.result({
  "duration": 3511946300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Manchester",
      "offset": 22
    }
  ],
  "location": "JobSearchTest.userEntersLocation(String)"
});
formatter.result({
  "duration": 262667400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 1 mile",
      "offset": 42
    }
  ],
  "location": "JobSearchTest.userSelectsDistanceFromDropdownMenu(String)"
});
formatter.result({
  "duration": 378970200,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTest.userClicksOnMoreSearchOptionsLink()"
});
formatter.result({
  "duration": 645574700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50000",
      "offset": 28
    }
  ],
  "location": "JobSearchTest.userEntersMinimumSalary(String)"
});
formatter.result({
  "duration": 149882200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "75000",
      "offset": 28
    }
  ],
  "location": "JobSearchTest.userEntersMaximumSalary(String)"
});
formatter.result({
  "duration": 194538900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 49
    }
  ],
  "location": "JobSearchTest.andUserSelectsSalaryTypeFromDropdownMenu(String)"
});
formatter.result({
  "duration": 154616300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Any",
      "offset": 46
    }
  ],
  "location": "JobSearchTest.andUserSelectsJobTypeFromDropdownMenu(String)"
});
formatter.result({
  "duration": 160471400,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTest.userClicksOnFindJobsButton()"
});
formatter.result({
  "duration": 303305500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Data Analyst jobs in Manchester",
      "offset": 36
    }
  ],
  "location": "JobSearchTest.userShouldVerifyTheHeaderText(String)"
});
formatter.result({
  "duration": 52022894400,
  "status": "passed"
});
formatter.after({
  "duration": 1827614800,
  "status": "passed"
});
formatter.before({
  "duration": 10003002700,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Search for jobs",
  "description": "",
  "id": "job-search-test;search-for-jobs;;6",
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
  "line": 6,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User clicks on Accept Cookies",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters Job Title \"Surgeon\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enters Location \"HA1 1AA\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User selects distance from dropdown menu \"up to 10 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on More Search Options link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enters Minimum Salary \"6000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters Maximum Salary \"9000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "And User selects Salary Type from dropdown menu \"Per month\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "And User selects Job Type from dropdown menu \"Temporary\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User clicks on Find Jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User should verify the Header Text \"Temporary Surgeon jobs in HA1 1AA\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchTest.userIsOnHomepage()"
});
formatter.result({
  "duration": 5016300,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTest.userClicksOnAcceptCookies()"
});
formatter.result({
  "duration": 20353828600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Surgeon",
      "offset": 23
    }
  ],
  "location": "JobSearchTest.userEntersJobTitle(String)"
});
formatter.result({
  "duration": 1455691200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HA1 1AA",
      "offset": 22
    }
  ],
  "location": "JobSearchTest.userEntersLocation(String)"
});
formatter.result({
  "duration": 2000045200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 10 miles",
      "offset": 42
    }
  ],
  "location": "JobSearchTest.userSelectsDistanceFromDropdownMenu(String)"
});
formatter.result({
  "duration": 322959300,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTest.userClicksOnMoreSearchOptionsLink()"
});
formatter.result({
  "duration": 652870500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6000",
      "offset": 28
    }
  ],
  "location": "JobSearchTest.userEntersMinimumSalary(String)"
});
formatter.result({
  "duration": 149250900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9000",
      "offset": 28
    }
  ],
  "location": "JobSearchTest.userEntersMaximumSalary(String)"
});
formatter.result({
  "duration": 207402100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per month",
      "offset": 49
    }
  ],
  "location": "JobSearchTest.andUserSelectsSalaryTypeFromDropdownMenu(String)"
});
formatter.result({
  "duration": 264844500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Temporary",
      "offset": 46
    }
  ],
  "location": "JobSearchTest.andUserSelectsJobTypeFromDropdownMenu(String)"
});
formatter.result({
  "duration": 225881400,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTest.userClicksOnFindJobsButton()"
});
formatter.result({
  "duration": 255761600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Temporary Surgeon jobs in HA1 1AA",
      "offset": 36
    }
  ],
  "location": "JobSearchTest.userShouldVerifyTheHeaderText(String)"
});
formatter.result({
  "duration": 8299560900,
  "status": "passed"
});
formatter.after({
  "duration": 1498081200,
  "status": "passed"
});
formatter.before({
  "duration": 8945612900,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Search for jobs",
  "description": "",
  "id": "job-search-test;search-for-jobs;;7",
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
  "line": 6,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User clicks on Accept Cookies",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters Job Title \"Business Analyst\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enters Location \"Warwickshire\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User selects distance from dropdown menu \"up to 2 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on More Search Options link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enters Minimum Salary \"50\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters Maximum Salary \"100\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "And User selects Salary Type from dropdown menu \"Per hour\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "And User selects Job Type from dropdown menu \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User clicks on Find Jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User should verify the Header Text \"Permanent Business Analyst jobs in Warwickshire\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchTest.userIsOnHomepage()"
});
formatter.result({
  "duration": 5383400,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTest.userClicksOnAcceptCookies()"
});
formatter.result({
  "duration": 22788953900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Business Analyst",
      "offset": 23
    }
  ],
  "location": "JobSearchTest.userEntersJobTitle(String)"
});
formatter.result({
  "duration": 7432309800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Warwickshire",
      "offset": 22
    }
  ],
  "location": "JobSearchTest.userEntersLocation(String)"
});
formatter.result({
  "duration": 449593300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 2 miles",
      "offset": 42
    }
  ],
  "location": "JobSearchTest.userSelectsDistanceFromDropdownMenu(String)"
});
formatter.result({
  "duration": 349532100,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTest.userClicksOnMoreSearchOptionsLink()"
});
formatter.result({
  "duration": 737710400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 28
    }
  ],
  "location": "JobSearchTest.userEntersMinimumSalary(String)"
});
formatter.result({
  "duration": 137037700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 28
    }
  ],
  "location": "JobSearchTest.userEntersMaximumSalary(String)"
});
formatter.result({
  "duration": 157192100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per hour",
      "offset": 49
    }
  ],
  "location": "JobSearchTest.andUserSelectsSalaryTypeFromDropdownMenu(String)"
});
formatter.result({
  "duration": 337858300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 46
    }
  ],
  "location": "JobSearchTest.andUserSelectsJobTypeFromDropdownMenu(String)"
});
formatter.result({
  "duration": 290527700,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTest.userClicksOnFindJobsButton()"
});
formatter.result({
  "duration": 464989600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Business Analyst jobs in Warwickshire",
      "offset": 36
    }
  ],
  "location": "JobSearchTest.userShouldVerifyTheHeaderText(String)"
});
formatter.result({
  "duration": 26674829900,
  "status": "passed"
});
formatter.after({
  "duration": 3427428200,
  "status": "passed"
});
formatter.before({
  "duration": 10175722400,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Search for jobs",
  "description": "",
  "id": "job-search-test;search-for-jobs;;8",
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
  "line": 6,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User clicks on Accept Cookies",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters Job Title \"Geologist\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enters Location \"Surrey\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User selects distance from dropdown menu \"up to 25 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on More Search Options link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enters Minimum Salary \"250\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters Maximum Salary \"350\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "And User selects Salary Type from dropdown menu \"Per day\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "And User selects Job Type from dropdown menu \"Any\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User clicks on Find Jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User should verify the Header Text \"Geologist jobs in Surrey\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchTest.userIsOnHomepage()"
});
formatter.result({
  "duration": 9382100,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTest.userClicksOnAcceptCookies()"
});
formatter.result({
  "duration": 20691774900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Geologist",
      "offset": 23
    }
  ],
  "location": "JobSearchTest.userEntersJobTitle(String)"
});
formatter.result({
  "duration": 2777171800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Surrey",
      "offset": 22
    }
  ],
  "location": "JobSearchTest.userEntersLocation(String)"
});
formatter.result({
  "duration": 203150200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 25 miles",
      "offset": 42
    }
  ],
  "location": "JobSearchTest.userSelectsDistanceFromDropdownMenu(String)"
});
formatter.result({
  "duration": 312484600,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTest.userClicksOnMoreSearchOptionsLink()"
});
formatter.result({
  "duration": 588737000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "250",
      "offset": 28
    }
  ],
  "location": "JobSearchTest.userEntersMinimumSalary(String)"
});
formatter.result({
  "duration": 127815200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "350",
      "offset": 28
    }
  ],
  "location": "JobSearchTest.userEntersMaximumSalary(String)"
});
formatter.result({
  "duration": 181836000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per day",
      "offset": 49
    }
  ],
  "location": "JobSearchTest.andUserSelectsSalaryTypeFromDropdownMenu(String)"
});
formatter.result({
  "duration": 230923000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Any",
      "offset": 46
    }
  ],
  "location": "JobSearchTest.andUserSelectsJobTypeFromDropdownMenu(String)"
});
formatter.result({
  "duration": 218560100,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTest.userClicksOnFindJobsButton()"
});
formatter.result({
  "duration": 234822500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Geologist jobs in Surrey",
      "offset": 36
    }
  ],
  "location": "JobSearchTest.userShouldVerifyTheHeaderText(String)"
});
formatter.result({
  "duration": 15356264500,
  "status": "passed"
});
formatter.after({
  "duration": 1492943500,
  "status": "passed"
});
});