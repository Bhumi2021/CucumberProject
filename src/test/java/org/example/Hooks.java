package org.example;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

import static org.apache.commons.io.FileUtils.copyFile;


public class Hooks extends Utils {
    BrowserSelector browserSelector=new BrowserSelector();
    String timeStamp=new SimpleDateFormat("yyyy.MM.dd.HH.mm.ss").format(new Date());

    @Before
    public void openBrowser() {
        //open the browser
        browserSelector.openBrowser();
        //open URL
        driver.get("https://demo.nopcommerce.com/");
    }
    @After
    public void closeBrowser(Scenario scenario){
        String screenShotName=scenario.getName().replaceAll(".,;:?!","")+timeStamp+".png";
        if (scenario.isFailed()){
            File sourcePath=((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
            File destinationPath=new File(System.getProperty("user.dir")+"/target/Destination/screenshot/"+screenShotName);
            try{
                   copyFile(sourcePath,destinationPath);
            }catch (IOException e){
                   e.printStackTrace();

            }
            scenario.write(("!!!!!......Scenario Failed...."));
            scenario.embed(((TakesScreenshot)driver).getScreenshotAs(OutputType.BYTES),"image/png");
        }
        driver.quit();
    }

}

