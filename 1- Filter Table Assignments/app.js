let itemName = document.getElementById("item-name");
let itemCategorey = document.getElementById("item-categorey");
let itemType = document.getElementById("item-type");
let userInput = document.getElementById("userInput");
let table = document.getElementById("table");
let firstButton = document.getElementById("firstButton");
let secondButton = document.getElementById("secondButton");
let thirdButton = document.getElementById("thirdButton");

let ifFilter = "" ;

function button1 () {
    ifFilter = "name"
    firstButton.style.backgroundColor = "bisque" ;
    itemName.style.color = "blue" ;
    userInput.addEventListener("keyup" , () => {

        if(ifFilter !== "name") {
            return ;
        }
        let itemsName = table.childNodes[1].childNodes;

        for(let i = 0 ; i < itemsName.length ; i++) {
            if(itemsName[i].nodeType === 1) {
                let tableRow = itemsName[i]
                let elementName = (tableRow.childNodes[0].textContent);
                if(elementName.toLowerCase().indexOf(userInput.value) !== -1) {
                    tableRow.style.display = "" ;
                } else {
                    tableRow.style.display = "none";
                }
            }
        }        
    })
}

function button2 () {
    ifFilter = "categorey";
    secondButton.style.backgroundColor = "bisque" ;
    itemCategorey.style.color = "blue" ;
    userInput.addEventListener("keyup" , () => {
        if(ifFilter !== "categorey") {
            return ;
        }
        let itemsName = (table.childNodes[1].childNodes);
        for(let i = 0 ; i < itemsName.length; i++) {
            if(itemsName[i].nodeType === 1){
                let tableRow = itemsName[i];
                let elementCategorey = (tableRow.childNodes[1].textContent);
                if(elementCategorey.toLowerCase().indexOf(userInput.value) !== -1) {
                    tableRow.style.display = ""
                } else {
                    tableRow.style.display = "none" ;
                }
            }
        }
    })
}
