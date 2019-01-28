
let resetBtn = document.getElementsByClassName("btn__reset");
console.log(resetBtn)
resetBtn[0].addEventListener("mouserover", () => {
    alert("hello");
    document.getElementById("overlay").style.display = "none";
    }
)
