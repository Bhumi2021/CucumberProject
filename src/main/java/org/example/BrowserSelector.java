package org.example;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

public class BrowserSelector extends BasePage {
    LoadProperty loadProperty=new LoadProperty();
    String browserName=loadProperty.getProperty("browser");
    public static final String AUTOMATE_USERNAME = "bhu_pmEYsi";
    public static final String AUTOMATE_ACCESS_KEY = "qHqsFKzcPppybDBnq6K9";
    public static final String URL = "https://" + AUTOMATE_USERNAME + ":" + AUTOMATE_ACCESS_KEY + "@hub-cloud.browserstack.com/wd/hub";
    public static final boolean browserStack=false;

    DesiredCapabilities caps = new DesiredCapabilities();
    public void openBrowser(){
        if (browserStack) {
            if (browserName.equalsIgnoreCase("firefox"))
            {
                caps.setCapability("os", "Windows");
                caps.setCapability("os_version", "10");
                caps.setCapability("browser", "Firefox");
                caps.setCapability("browser_version", "latest");
                caps.setCapability("browserstack.local", "false");
                caps.setCapability("browserstack.selenium_version", "3.141.59");

            } else if (browserName.equalsIgnoreCase("chrome"))
            {
                caps.setCapability("os", "Windows");
                caps.setCapability("os_version", "7");
                caps.setCapability("browser", "chrome");
                caps.setCapability("browser_version", "latest");
                caps.setCapability("browserstack.local", "false");
                caps.setCapability("browserstack.selenium_version", "3.5.2");

            } else if (browserName.equalsIgnoreCase("edge"))
            {
                caps.setCapability("os", "Windows");
                caps.setCapability("os_version", "10");
                caps.setCapability("resolution", "1920x1080");
                caps.setCapability("browser", "edge");
                caps.setCapability("browser_version", "latest");
                caps.setCapability("browserstack.local", "false");
                caps.setCapability("browserstack.selenium_version", "3.5.2");
            }

            try {
                driver = new RemoteWebDriver(new URL(URL), caps);
            } catch (MalformedURLException e) {
                e.printStackTrace();
            }
        }
        else {

            if (browserName.equalsIgnoreCase("chrome")) {
                System.setProperty("webdriver.chrome.driver", "src/test/resources/BrowserDrivers/chromedriver.exe");
                driver = new ChromeDriver();
            } else if (browserName.equalsIgnoreCase("edge")) {
                System.setProperty("webdriver.edge.driver", "src/test/resources/BrowserDrivers/msedgedriver.exe");
                driver = new EdgeDriver();
            } else if (browserName.equalsIgnoreCase("firefox")) {
                System.setProperty("webdriver.gecko.driver", "src/test/resources/BrowserDrivers/geckodriver.exe");
                driver = new FirefoxDriver();
            } else {
                System.out.println("in correct browser name of empty" + browserName);
            }
        }

            //maximise the browser window
            driver.manage().window().maximize();
            //applying implicitly wait to driver object
            driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        }


    }



