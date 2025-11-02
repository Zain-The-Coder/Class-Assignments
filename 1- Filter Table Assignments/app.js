let itemName = document.getElementById("item-name");
let itemCategorey = document.getElementById("item-categorey");
let itemType = document.getElementById("item-type");
let userInput = document.getElementById("userInput");
let table = document.getElementById("table");
let firstButton = document.getElementById("firstButton");
let secondButton = document.getElementById("secondButton");
let thirdButton = document.getElementById("thirdButton");
let message = document.getElementById("msg");
message.innerHTML = "Please Select At Least One Button !" ;

let isFilter = "" ;

function button1 () {
    message.innerHTML = "" ;
    isFilter = "name"
    firstButton.style.backgroundColor = "bisque" ;
    secondButton.style.backgroundColor = "white";
    thirdButton.style.backgroundColor = "white" ;
    itemName.style.color = "blue" ;
    itemCategorey.style.color = "white" ;
    itemType.style.color = "white" ;


    userInput.addEventListener("keyup" , () => {

        if(isFilter !== "name") {
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
    message.innerHTML = "" ;
    isFilter = "categorey";
    firstButton.style.backgroundColor = "white" ;
    secondButton.style.backgroundColor = "bisque" ;
    thirdButton.style.backgroundColor = "white";
    itemCategorey.style.color = "blue" ;
    itemName.style.color = "white" ;
    itemType.style.color = "white" ;


    userInput.addEventListener("keyup" , () => {
        if(isFilter !== "categorey") {
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



function button3 () {
    message.innerHTML = "" ;
    isFilter = "type" ;
    itemType.style.color = "blue" ;
    itemCategorey.style.color = "white" ;
    itemName.style.color = "white" ;
    thirdButton.style.backgroundColor = "bisque" ;
    secondButton.style.backgroundColor = "white";
    firstButton.style.backgroundColor = "white" ;

    userInput.addEventListener("keyup" , () => {
        if(isFilter !== "type") {
            return ;
        }

        let itemList = (table.childNodes[1].childNodes);

        for(let i = 0 ; i < itemList.length; i++) {
            if(itemList[i].nodeType === 1) {
                let elementType = (itemList[i].childNodes[2].textContent);
                if(elementType.toLowerCase().indexOf(userInput.value) !== -1) {
                    itemList[i].style.display = "" ;
                } else {
                    itemList[i].style.display = "none" ;
                }
            }
        }
    })
}
