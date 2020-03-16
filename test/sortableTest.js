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
        one.dragAndDrop(seven, 500);
        seven.dragAndDrop(one, 500);

         //Item 6 - Pos. 2
         browser.pause(1000);
         one.dragAndDrop(six, 500);
         six.dragAndDrop(one, 500);

         //Item 5 - Pos. 3
         browser.pause(1000);
         one.dragAndDrop(five, 500);
         five.dragAndDrop(one, 500);

         //Item 4 - Pos. 4
         browser.pause(1000);
         one.dragAndDrop(four, 500);
         four.dragAndDrop(one, 500);

          //Item 3 - Pos. 5
          browser.pause(1000);
          one.dragAndDrop(three, 500);
          three.dragAndDrop(one, 500);

           //Item 2 - Pos. 6
           browser.pause(1000);
           one.dragAndDrop(two, 500);
           two.dragAndDrop(one, 500);
 
           browser.pause(500);  
           
           //Verificar que están en sentido inverso
           const sortable = $("#sortable");
            var i;
            var itemList = [];
            //Añadir el orden final en un array
            for (i = 0; i < sortable.$$('li').length; i++) {
                itemList.push(sortable.$$('li')[i].getText());
        }
        //Imprimir el array
            console.log(itemList);

        //Comprobar que el array es correcto
            if ((itemList[0] == 'Item 7') && 
            (itemList[1] == 'Item 6') &&
            (itemList[2] == 'Item 5') &&
            (itemList[3] == 'Item 4') &&
            (itemList[4] == 'Item 3') &&
            (itemList[5] == 'Item 2') &&
            (itemList[6] == 'Item 1')) {
                console.log('The list was reverse sorted successfully! ');
            }
            else {
                console.log('The was a problem! List not reverse sorted');
            }

    });
});