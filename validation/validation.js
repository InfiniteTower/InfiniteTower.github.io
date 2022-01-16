window.onload = function () {

    var refreshButton = document.getElementById("refresh");
    if (refreshButton.addEventListener) {
        refreshButton.addEventListener("click", refreshClick, false);
    } else if (refreshButton.attachEvent) {
        refreshButton.attachEvent("onclick", refreshClick);
    }

};

function refreshClick() {

    import {
        combined,
        pending
    } from '../submit/submit.js';

    alert(combined);
}

/*

function makeList(array) {
    // Create the list element:
    var list = document.createElement('ul');

    for (var i = 0; i < array.length; i++) {
        // Create the list item:
        var item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(array[i]));

        // Add it to the list:
        list.appendChild(item);
    }

    // Finally, return the constructed list:
    return list;
}

let pendingSubmissions = document.getElementById("pendinglist");
  
data.forEach((item)=>{
  let li = document.createElement("li");
  li.innerText = item;
  list.appendChild(li);
})

*/

