const assert = require('assert');

describe('Go to ToolsQA WebPage Droppable', () => {
    it('Drag and drop item and verify the action', () => {
      
        browser.url('https://demoqa.com/droppable/');
        const draggable = $("#draggable");
        const droppable = $("#droppable");
        // Drag & Drop
        draggable.dragAndDrop(droppable);
        browser.pause(2000);
        const Text = $("div#droppable > p");
        
        if (Text.getText() == 'Dropped!'){
            console.log('Everything was done okay!');
        }
        else{
            console.log('Not executed!');
        }
    });
});