describe('Go to ToolsQA WebPage Sortable', () => {
    it('Sort the items', () => {
      
        browser.url('https://demoqa.com/sortable/');

        const one = $("//ul[@id='sortable']/li[1]");
        const two = $("//ul[@id='sortable']/li[2]");
        const three = $("//ul[@id='sortable']/li[3]");
        const four = $("//ul[@id='sortable']/li[4]");
        const five = $("//ul[@id='sortable']/li[5]");
        const six = $("//ul[@id='sortable']/li[6]");
        const seven = $("//ul[@id='sortable']/li[7]");

        //Item 7 - Pos. 1
        one.dragAndDrop(seven,1000);
        seven.dragAndDrop(one, 1000);

         //Item 6 - Pos. 2
         browser.pause(2000);
         one.dragAndDrop(six,1000);
         six.dragAndDrop(one, 1000);

         //Item 5 - Pos. 3
         browser.pause(2000);
         one.dragAndDrop(five,1000);
         five.dragAndDrop(one, 1000);

         //Item 4 - Pos. 4
         browser.pause(2000);
         one.dragAndDrop(four,1000);
         four.dragAndDrop(one, 1000);

          //Item 3 - Pos. 5
          browser.pause(2000);
          one.dragAndDrop(three,1000);
          three.dragAndDrop(one, 1000);

           //Item 2 - Pos. 6
           browser.pause(2000);
           one.dragAndDrop(two,1000);
           two.dragAndDrop(one, 1000);
 
           browser.pause(2000);        

    });
});