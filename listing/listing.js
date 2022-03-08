function MyTheam(){

    document.body.classList.toggle('darkmode');
    document.getElementsByTagName("header")[0].style.color = "black";
    var ModeBtn = document.getElementById("Mode-btn");
    ModeBtn.classList.toggle('Mode-btn-light');
    if (ModeBtn.innerHTML === "Dark Mode") {
        ModeBtn.innerHTML = "Light Mode";
    }
    else {
        ModeBtn.innerHTML = "Dark Mode";
    }
}