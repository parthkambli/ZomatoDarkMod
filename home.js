function MyTheam(){
    document.body.classList.toggle('darkmode');
    document.getElementById("QuickSubHeading").classList.toggle('text-white');
    var SubHead = document.querySelectorAll("div.componentSubHeading");
    for(i = 0;i<SubHead.length;i++){
        SubHead[i].classList.toggle('text-white');
    }
    document.getElementsByTagName("header")[0].style.color = "black";
    var ModeBtn = document.getElementById("Mode-btn");
    ModeBtn.classList.toggle("btn-light");
    ModeBtn.classList.toggle("btn-dark");
    if (ModeBtn.innerHTML === "Dark Mode"){
        ModeBtn.innerHTML = "Light Mode";
    }
    else{
        ModeBtn.innerHTML = "Dark Mode";
    }
}