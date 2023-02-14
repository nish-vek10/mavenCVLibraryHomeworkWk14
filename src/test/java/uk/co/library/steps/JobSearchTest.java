package uk.co.library.steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uk.co.library.pages.HomePage;
import uk.co.library.pages.ResultPage;

public class JobSearchTest {

    HomePage homePage = new HomePage();
    ResultPage resultPage = new ResultPage();

    @Given("^User is on homepage$")
    public void userIsOnHomepage() {
    }

    @When("^User clicks on Accept Cookies$")
    public void userClicksOnAcceptCookies() throws InterruptedException {
        new HomePage().acceptCookiesAndSwitchToIframe();
    }

    @And("^User enters Job Title \"([^\"]*)\"$")
    public void userEntersJobTitle(String jobTitle) {
        homePage.enterJobTitle(jobTitle);
    }

    @And("^User enters Location \"([^\"]*)\"$")
    public void userEntersLocation(String location) {
        homePage.enterLocation(location);
    }

    @And("^User selects distance from dropdown menu \"([^\"]*)\"$")
    public void userSelectsDistanceFromDropdownMenu(String distance) {
        homePage.selectDistance(distance);
    }

    @And("^User clicks on More Search Options link$")
    public void userClicksOnMoreSearchOptionsLink() {
        homePage.clickOnMoreSearchOptionLink();
    }

    @And("^User enters Minimum Salary \"([^\"]*)\"$")
    public void userEntersMinimumSalary(String minSalary) {
        homePage.enterMinSalary(minSalary);
    }

    @And("^User enters Maximum Salary \"([^\"]*)\"$")
    public void userEntersMaximumSalary(String maxSalary) {
        homePage.enterMaxSalary(maxSalary);
    }

    @And("^And User selects Salary Type from dropdown menu \"([^\"]*)\"$")
    public void andUserSelectsSalaryTypeFromDropdownMenu(String salaryType) {
        homePage.selectSalaryType(salaryType);
    }

    @And("^And User selects Job Type from dropdown menu \"([^\"]*)\"$")
    public void andUserSelectsJobTypeFromDropdownMenu(String jobType) {
        homePage.selectJobType(jobType);
    }

    @And("^User clicks on Find Jobs button$")
    public void userClicksOnFindJobsButton() {
        homePage.clickOnFindJobsButton();
    }

    @Then("^User should verify the Header Text \"([^\"]*)\"$")
    public void userShouldVerifyTheHeaderText(String result) {
        resultPage.verifyTheResults(result);
    }
}
