package org.example;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

public class LoginPage extends Utils{
    private By _typeEmail=By.cssSelector("input#Email.email");
    private By _typePassword=By.cssSelector("input#Password.password");
    //private By _clickOnLogin=By.xpath("//button[contains(@class,'button-1 login-button')]");
    private By _clickOnLogin=By.cssSelector("button.button-1.login-button");


    public void verifyCurrentURL(){
        String url="https://demo.nopcommerce.com/login?returnUrl=%2Fcart";
        //verifying url
        assertCurrentURL(url);
    }
    //Method with parameter
    public void typeEmailAndPassword(String email, String password){
        //type email
        enterText(_typeEmail,email);
        //type password
        enterText(_typePassword,password);
    }
    public void clickOnLoginButton(){
        //click on login button
        clickOnElement(_clickOnLogin);
    }
    public void userShouldNotLoginSuccessfullyAndSeeErrorMessage(String error_message)
    {
        //finding webElement for login field
        WebElement LoginValidationField=driver.findElement(By.cssSelector(".returning-wrapper.fieldset"));
        String ActualLoginValidation=LoginValidationField.getText();
        //Using if else condition
        if (error_message.equals(ActualLoginValidation)){
            System.out.println("Actual and Expected validation are same and it is:"+ActualLoginValidation);
        }else {
            System.out.println("Actual is:"+ActualLoginValidation);
            System.out.println("Expected is:"+error_message);
        }

    }
}
