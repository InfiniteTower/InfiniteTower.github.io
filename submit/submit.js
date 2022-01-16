window.onload = function () {

    var submitbutton = document.getElementById("submitbutton");
    if (submitbutton.addEventListener) {
        submitbutton.addEventListener("click", submitClick, false);
    } else if (submitbutton.attachEvent) {
        submitbutton.attachEvent("onclick", submitClick);
    }

};

function submitClick() {
    
    var username = document.getElementById("nameinput").value;
    var category = (document.querySelector('input[name="category"]:checked').value);
    var link = (document.getElementById("linkinput").value);
    const pending = [];
    
    var combined = username + ", " + category  + ", " + link;
    pending.push(combined);

    //alert("FUCK");

    /*export{
        combined,
        pending
    };*/
}
