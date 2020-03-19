describe('Go to ToolsQA WebPage Selectable', () => {
    it('Check wheter items are selectable or not', () => {
      
       browser.url('https://demoqa.com/selectable/');
       const selectable = $("#selectable");
       var i;
        for (i = 0; i < selectable.$$('li').length; i++) {
            selectable.$$('li')[i].click();
            browser.pause(2000);
        }
    });
});
