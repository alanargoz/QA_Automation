const defineSupportCode = require('cucumber').defineSupportCode;
require('chromedriver');
var webdriver = require('selenium-webdriver');
const {By} = require('selenium-webdriver');
const {until} = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('chrome').build();
defineSupportCode(function({ Given, Then, When }) {

    Given('I land on Cinépolis website', function () {
        driver.get('https://cinepolis.com/');
    });

    Then('I verify I\'m on Cinépolis website', function () {
        console.log(driver.getTitle());
    });

    Then('I go to cities box and select Morelia', function () {
        driver.findElement(By.xpath("/html//select[@id='cmbCiudades']")).click();
        driver.findElement(By.xpath("/html//select[@id='cmbCiudades']//option[text()='Morelia']")).click();
    });

    Then('I go to cinemas box and select Cinépolis Morelia Centro', function () {
        
        driver.findElement(By.xpath("/html//select[@id='cmbComplejos']")).click()
        driver.sleep(500);
    });

    Given('I land on Cinépolis Morelia Centro billboards', function () {
        driver.get('https://cinepolis.com/cartelera/morelia/cinepolis-morelia-centro');
        driver.sleep(1000);
    });

    Then('I choose Bloodshot as the movie I want to watch', function () {
        driver.findElement(By.xpath("/html//a[@id='34490-cinepolis-morelia-centro-bloodshot']")).click();
    });

    Then('I choose an hour for selected movie', function () {
        driver.get('https://cinepolis.com/pelicula/bloodshot');
        driver.sleep(500);
        driver.findElement(By.xpath("/html//div[@id='synopsis']//div[@class='horariosDesc-complejo']/div[6]/div[@class='ng-scope']//a[@href='https://compra.cinepolis.com/?cinemaVistaId=208&showtimeVistaId=8756']")).click();
        driver.sleep(500);
    });

    Given('I\'m on the site to buy my ticket', function () {
        driver.get('https://compra.cinepolis.com/?cinemaVistaId=208&showtimeVistaId=8758');
    });

    Then('I choose to Continue as guest', function () {
        driver.findElement(By.xpath("/html//div[@id='root']//section[@role='main']/section[@class='main']//a[@href='/boletos']")).click();
        driver.sleep(500);
    });

    Then('I buy one ticket for adults price', function () {
        const buyFrame = driver.findElement(By.xpath("//iframe[contains(@src,'//8267269.fls.doubleclick.net/activityi;src=8267269;type=mx-upi;cat=mx_ci00d;ord=4288792015676;gtm=2wg340;auiddc=94932097.1584384447;~oref=https%3A%2F%2Fcompra.cinepolis.com%2F%3FcinemaVistaId%3D208%26showtimeVistaId%3D8758?')]"));
        driver.switchTo().frame(buyFrame); 
        driver.sleep(500);
        driver.findElement(By.xpath("//button[@class='ticket__action'][@aria-label='Añadir un boleto ADULTO']")).click();
        driver.sleep(500);
    });

    Then('I click Continue', function () {
        driver.findElement(By.xpath("//div[@id='root']//section[@role='main']/section[@class='main']//a[@href='/asientos']")).click();
        driver.sleep(500);
    });

    Then('I choose a free seat', function () {
        driver.findElement(By.xpath("//span[@class='seat__num'][@aria-label='A1']")).click();
        driver.sleep(500);
        driver.findElement(By.xpath("//button[@class='btn btn--primary']")).click();
    });

    Then('I fill the Personal Info Section', function () {
        driver.findElement(By.xpath("/html//input[@id='first_name']")).sendKeys('Alan');
        driver.findElement(By.xpath("/html//input[@id='last_name']")).sendKeys('Arguello');
        driver.findElement(By.xpath("/html//input[@id='email']")).sendKeys('alan.arguello@gmail.com');
    });
});
