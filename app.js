/* gets start/reset btn and stores it in variable resetBtn */
let resetBtn = document.getElementsByClassName("btn__reset")[0];


/* removes div with ID = overlay, and display divs with banner, phrase, keyboard and scoreboard */
resetBtn.addEventListener("click", () => {
    document.getElementById("overlay").style.display = "none";
    }
)
