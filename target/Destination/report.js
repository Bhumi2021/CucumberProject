$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/login.feature");
formatter.feature({
  "line": 2,
  "name": "User login successfully",
  "description": "",
  "id": "user-login-successfully",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@all"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "User should not able to login with invalid credential",
  "description": "",
  "id": "user-login-successfully;user-should-not-able-to-login-with-invalid-credential",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user click on login",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user type invalid \"\u003cemail\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user should not able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user get \"\u003cerror_message\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "user-login-successfully;user-should-not-able-to-login-with-invalid-credential;",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "error_message"
      ],
      "line": 15,
      "id": "user-login-successfully;user-should-not-able-to-login-with-invalid-credential;;1"
    },
    {
      "cells": [
        "",
        "",
        "Please enter your email"
      ],
      "line": 16,
      "id": "user-login-successfully;user-should-not-able-to-login-with-invalid-credential;;2"
    },
    {
      "cells": [
        "Name1@gmail.com",
        "",
        "Login was unsuccessful.Please correct the errors and try again.No customer account found"
      ],
      "line": 17,
      "id": "user-login-successfully;user-should-not-able-to-login-with-invalid-credential;;3"
    },
    {
      "cells": [
        "",
        "Abc123",
        "Please enter your email"
      ],
      "line": 18,
      "id": "user-login-successfully;user-should-not-able-to-login-with-invalid-credential;;4"
    },
    {
      "cells": [
        "Name1@gmail.com",
        "Abc124",
        "Login was unsuccessful.Please correct the error and try again.No customer account found"
      ],
      "line": 19,
      "id": "user-login-successfully;user-should-not-able-to-login-with-invalid-credential;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4457298500,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepsDefs.user_is_on_homepage()"
});
formatter.result({
  "duration": 126632599,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "User should not able to login with invalid credential",
  "description": "",
  "id": "user-login-successfully;user-should-not-able-to-login-with-invalid-credential;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@login"
    },
    {
      "line": 1,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user click on login",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user type invalid \"\" and \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user should not able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user get \"Please enter your email\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "MyStepsDefs.userClickOnLogin()"
});
formatter.result({
  "duration": 1185121300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 19
    },
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "MyStepsDefs.userTypeInvalidAnd(String,String)"
});
formatter.result({
  "duration": 136616100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.userClickOnLoginButton()"
});
formatter.result({
  "duration": 52386500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.userShouldNotAbleToLoginSuccessfully()"
});
formatter.result({
  "duration": 21800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter your email",
      "offset": 10
    }
  ],
  "location": "MyStepsDefs.userGet(String)"
});
formatter.result({
  "duration": 30002601,
  "status": "passed"
});
formatter.after({
  "duration": 785605500,
  "status": "passed"
});
formatter.before({
  "duration": 3022990900,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepsDefs.user_is_on_homepage()"
});
formatter.result({
  "duration": 888300,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "User should not able to login with invalid credential",
  "description": "",
  "id": "user-login-successfully;user-should-not-able-to-login-with-invalid-credential;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@login"
    },
    {
      "line": 1,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user click on login",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user type invalid \"Name1@gmail.com\" and \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user should not able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user get \"Login was unsuccessful.Please correct the errors and try again.No customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "MyStepsDefs.userClickOnLogin()"
});
formatter.result({
  "duration": 1137221700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name1@gmail.com",
      "offset": 19
    },
    {
      "val": "",
      "offset": 41
    }
  ],
  "location": "MyStepsDefs.userTypeInvalidAnd(String,String)"
});
formatter.result({
  "duration": 120583400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.userClickOnLoginButton()"
});
formatter.result({
  "duration": 54157100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.userShouldNotAbleToLoginSuccessfully()"
});
formatter.result({
  "duration": 16300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful.Please correct the errors and try again.No customer account found",
      "offset": 10
    }
  ],
  "location": "MyStepsDefs.userGet(String)"
});
formatter.result({
  "duration": 32899500,
  "status": "passed"
});
formatter.after({
  "duration": 1247767899,
  "status": "passed"
});
formatter.before({
  "duration": 3152094100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepsDefs.user_is_on_homepage()"
});
formatter.result({
  "duration": 1218500,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "User should not able to login with invalid credential",
  "description": "",
  "id": "user-login-successfully;user-should-not-able-to-login-with-invalid-credential;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@login"
    },
    {
      "line": 1,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user click on login",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user type invalid \"\" and \"Abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user should not able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user get \"Please enter your email\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "MyStepsDefs.userClickOnLogin()"
});
formatter.result({
  "duration": 1131839500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 19
    },
    {
      "val": "Abc123",
      "offset": 26
    }
  ],
  "location": "MyStepsDefs.userTypeInvalidAnd(String,String)"
});
formatter.result({
  "duration": 131295200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.userClickOnLoginButton()"
});
formatter.result({
  "duration": 50207801,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.userShouldNotAbleToLoginSuccessfully()"
});
formatter.result({
  "duration": 19201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter your email",
      "offset": 10
    }
  ],
  "location": "MyStepsDefs.userGet(String)"
});
formatter.result({
  "duration": 43330801,
  "status": "passed"
});
formatter.after({
  "duration": 1030980099,
  "status": "passed"
});
formatter.before({
  "duration": 3179728200,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepsDefs.user_is_on_homepage()"
});
formatter.result({
  "duration": 1173899,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "User should not able to login with invalid credential",
  "description": "",
  "id": "user-login-successfully;user-should-not-able-to-login-with-invalid-credential;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@login"
    },
    {
      "line": 1,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user click on login",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user type invalid \"Name1@gmail.com\" and \"Abc124\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user should not able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user get \"Login was unsuccessful.Please correct the error and try again.No customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "MyStepsDefs.userClickOnLogin()"
});
formatter.result({
  "duration": 1131791499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name1@gmail.com",
      "offset": 19
    },
    {
      "val": "Abc124",
      "offset": 41
    }
  ],
  "location": "MyStepsDefs.userTypeInvalidAnd(String,String)"
});
formatter.result({
  "duration": 125852100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.userClickOnLoginButton()"
});
formatter.result({
  "duration": 51040400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.userShouldNotAbleToLoginSuccessfully()"
});
formatter.result({
  "duration": 15500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful.Please correct the error and try again.No customer account found",
      "offset": 10
    }
  ],
  "location": "MyStepsDefs.userGet(String)"
});
formatter.result({
  "duration": 43973500,
  "status": "passed"
});
formatter.after({
  "duration": 1004323000,
  "status": "passed"
});
});