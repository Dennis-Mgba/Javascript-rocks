// alert('Hey there');

class ListBinding {
    constructor(listEle) { // when using the class the parameter enter will be the id of the html list <ul> grabbed and stored in a varaible
        // we are refrencing the html list element
        this.listElement = listEle;     // declare listElement
        this.textList = [
            'Never',
            'Stop',
            'Learning',
            // 'Javascript'
        ];
    }
    // Make a <li> element/tag
    static createListItem(txt) {
        let li = document.createElement("li");
        li.textContent = txt;
        return li;
    }

    update() {
        /* Remove all hard coded html <list> element*/
        while(this.listElement.firstChild) {
            this.listElement.removeChild(this.listElement.firstChild);
        }
        /* fill the <ul> <li> tags with the array textList item */
        for(let text of this.textList) {
            this.listElement.appendChild(ListBinding.createListItem(text));
        }
    }   // myListBinding.update();

    // Here let's create a method for dynamically adding a list content
    add(typeText) {
        this.textList.push(typeText);
        this.update();
    }   // call myListBinding.add("enter the string that you want to add");

    // Here we want to remove an element by index
    remove(index) {
        this.textList.splice(index, 1); // first parameter is from what position that we want to remove, second parameter is the number of index that we want to remove
        this.update();
    }   // call myListBinding.remove(enter the index number of the element that you want to remove);
}
