$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/buyBookProduct.feature");
formatter.feature({
  "line": 2,
  "name": "Buy product successfully",
  "description": "",
  "id": "buy-product-successfully",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@all"
    }
  ]
});
formatter.before({
  "duration": 4240275200,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Register user should able to buy books product successfully",
  "description": "",
  "id": "buy-product-successfully;register-user-should-able-to-buy-books-product-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@buyProduct"
    },
    {
      "line": 3,
      "name": "@reg"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is on register page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters all required registration details",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user click on register",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user click on continue",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user click on books",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user select First Prize Pies book product",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user click on shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user click on checkout",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enter billing details and click continue",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User select shipping option and click continue",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User select credit card and click continue",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user enter all visa card details and click continue",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User click on confirmation",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user should able to buy book product successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepsDefs.user_is_on_register_page()"
});
formatter.result({
  "duration": 790057100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_enters_all_required_registration_details()"
});
formatter.result({
  "duration": 6775160700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_click_on_register()"
});
formatter.result({
  "duration": 55600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_click_on_continue()"
});
formatter.result({
  "duration": 23300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_click_on_books()"
});
formatter.result({
  "duration": 1166438400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_select_First_Prize_Pies_book_product()"
});
formatter.result({
  "duration": 1099987000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_click_on_add_to_cart_button()"
});
formatter.result({
  "duration": 1214715100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_click_on_shopping_cart()"
});
formatter.result({
  "duration": 24300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_click_on_checkout()"
});
formatter.result({
  "duration": 3145954700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_enter_billing_details_and_click_continue()"
});
formatter.result({
  "duration": 495894500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_select_shipping_option_and_click_continue()"
});
formatter.result({
  "duration": 10107668500,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"input#shippingoption_1\"}\n  (Session info: chrome\u003d91.0.4472.106)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-FJ91MTP\u0027, ip: \u0027192.168.0.13\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 91.0.4472.106, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: C:\\Users\\User\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:60955}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 2545170b0aad6504a1d848d8aab6f986\n*** Element info: {Using\u003dcss selector, value\u003dinput#shippingoption_1}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.example.Utils.clickOnElement(Utils.java:33)\r\n\tat org.example.ShippingMethodPage.selectShippingOption(ShippingMethodPage.java:11)\r\n\tat org.example.MyStepsDefs.user_select_shipping_option_and_click_continue(MyStepsDefs.java:124)\r\n\tat ✽.And User select shipping option and click continue(src/test/resources/features/buyBookProduct.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyStepsDefs.user_select_credit_card_and_click_continue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepsDefs.user_enter_all_visa_card_details_and_click_continue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepsDefs.user_click_on_confirmation()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepsDefs.user_should_able_to_buy_book_product_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("!!!!!......Scenario Failed....");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1094104400,
  "status": "passed"
});
});