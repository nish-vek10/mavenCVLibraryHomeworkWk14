package com.nopcommerce.demo.steps;

import com.nopcommerce.demo.pages.HomePage;
import com.nopcommerce.demo.pages.LoginPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class LoginTest {
    @Given("^User is on homepage$")
    public void userIsOnHomepage() {

    }

    @When("^User clicks on login link$")
    public void userClicksOnLoginLink() {
        new HomePage().clickOnLoginLink();
    }

    @Then("^User should navigate to login page successfully$")
    public void userShouldNavigateToLoginPageSuccessfully() {
        String actualMsg = new LoginPage().getWelcomeText(); //Get text from page
        String expectedMsg = "Welcome, Please Sign In!"; //Expected Message
        Assert.assertEquals(actualMsg, expectedMsg, "Login Page Verified!"); //Compare and Verify test
    }

    @And("^User enters email id \"([^\"]*)\"$")
    public void userEntersEmailId(String email) {
        new LoginPage().enterEmail(email);
    }

    @And("^User enters password \"([^\"]*)\"$")
    public void userEntersPassword(String password) {
        new LoginPage().enterPassword(password);
    }

    @And("^User clicks on login button$")
    public void userClicksOnLoginButton() {
        new LoginPage().clickOnLoginButton();
    }

    @Then("^User should see the error message \"([^\"]*)\"$")
    public void userShouldSeeTheErrorMessage(String errorMsg) {
        String actualErrorMsg = new LoginPage().getErrorMessage();
        String expectedErrorMsg = errorMsg;
        Assert.assertEquals(actualErrorMsg,expectedErrorMsg,"Error Message Verified!");
    }
}
