window.onload = function () {
    var submitbutton = document.getElementsByClassName("submitbutton");
    if (submitbutton.addEventListener) {
        submitbutton.addEventListener("click", submitClick, false);
    } else if (btn.attachEvent) {
        submitbutton.attachEvent("onclick", btnClick);
    }
};
function submitClick() {
    alert(document.getElementsByClassName("linkinput").value);
    alert(document.getElementById("category").value);
    alert(document.getElementsByClassName("nameinput").value);
}