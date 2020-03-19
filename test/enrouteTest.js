
describe('Complete Enroute QA Automation', () => {
    
    it('Open main page and verify page is opened', () => {
      
        browser.url('http://www.enroutesystems.com');
        const title = browser.getTitle();
        if (title == 'Enroute'){
            console.log('Landed on Enroute Homepage!');
        }
        else {
            console.log('This is not Enroute homepage!');
        }
    });
    
    it('Scroll to what we offer section and verify elements', () => {
      
        browser.url('http://www.enroutesystems.com');
        const scrollElem = $("/html//article[@id='post-6']/div[@class='entry-content']//h2/span[@class='background']");
        scrollElem.scrollIntoView();
        browser.pause(2000);
        const qa = $("/html//article[@id='post-6']/div/div[2]//a[1]");
        const sd = $("/html//article[@id='post-6']/div/div[2]//a[2]");
        const im = $("/html//article[@id='post-6']/div/div[2]//a[3]");
        const dm = $("/html//article[@id='post-6']/div/div[2]//a[4]");
        const am = $("/html//article[@id='post-6']/div/div[2]//a[5]");
        var services = [qa, sd, im, dm, am];
        const content = $(".tab");
        var i;
        for (i = 0; i < services.length; i++) {
            services[i].click();
            if (content !== null){
                console.log('The tab number '+ i +' has a header and description.')
            }
            else{
                console.log('The tab number ' + i + 'is empty')
            }
                browser.pause(1000);
        }
    });   
        
    it('Navigate to Contact Page and verify its open', () => {
     
        const scrollElem = $("//ul[@id='menu-main']//a[@href='http://www.enroutesystems.com/contact/']");
        scrollElem.scrollIntoView();
        browser.pause(2000);
        scrollElem.click();
        browser.switchWindow('Contact – Enroute');
        browser.pause(2000);
        const title = browser.getTitle();
        if (title == 'Contact – Enroute'){
            console.log('Landed on Enroute Contact Us!');
        }
        else {
            console.log('This is not Enroute homepage!');
        }
    });
        
    it('Fill all fields from Contact Us Page', () => {

        const scrollElem = $("/html//main[@id='main']/article/div[@class='entry-content']//span[.='Reach out to us']");
        scrollElem.scrollIntoView();
        browser.pause(2000);
        const name = $("/html//main[@id='main']/article/div[@class='entry-content']/div[@class='contact-map']//div[@role='form']/form[@action='/contact/#wpcf7-f23-p17-o1']//input[@name='your-name']");
        const email = $("/html//main[@id='main']/article/div[@class='entry-content']/div[@class='contact-map']//div[@role='form']/form[@action='/contact/#wpcf7-f23-p17-o1']//input[@name='your-email']");
        const subject = $("/html//main[@id='main']/article/div[@class='entry-content']/div[@class='contact-map']//div[@role='form']/form[@action='/contact/#wpcf7-f23-p17-o1']//input[@name='your-subject']");
        const message = $("/html//main[@id='main']/article/div[@class='entry-content']/div[@class='contact-map']//div[@role='form']/form[@action='/contact/#wpcf7-f23-p17-o1']//textarea[@name='your-message']");
        name.setValue('Alan Arguello Orozco');
        email.setValue('Alan.arguello@enroutesystems.com');
        subject.setValue('Testing my test');
        message.setValue('JW Player Team Rocks!');
        browser.pause(3000); 
        const sendButton = $("/html//main[@id='main']/article/div[@class='entry-content']//div[@role='form']/form[@action='/contact/#wpcf7-f23-p17-o1']//input[@value='Send']");
        console.log(sendButton.isEnabled());
    });
    
});