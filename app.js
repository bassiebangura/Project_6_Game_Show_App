// gets start/reset btn and stores it in variable resetBtn
const resetBtn = document.getElementsByClassName("btn__reset")[0];

const qwerty = document.getElementById("qwerty"); //gets keyboard div
const phrase = document.getElementById("phrase"); // gets phrase div
let missed = 0; //initializes missed guesses

const phrases = ["blessed are the pure in heart",
                "blessed are those who hunger and thirst for righteous",
                "blessed are the peace makers",
                "blessed are the meek",
                "blessed are those who are persecuted for righteousness sake"];


const getRandomPhraseAsArray = arr => {
    //fxn takes an array, select random phrase from array, split at " " and returns new array of chars
    let randomPhrase = arr[Math.floor(Math.random() * arr.length)];
    console.log(randomPhrase.split(""))

    return randomPhrase.split("")
}

const addPhraseToDisplay = phraseInArrayFormat => {
    //for each character in the array, you’ll create a li elemnt and array item as textNode for li
    for (const item of phraseInArrayFormat) {
        let ul = document.getElementById("phrase");
        let li = document.createElement("li");
        li.textContent = item
        if (item != " ") {
            li.className = "letter"
            ul.appendChild(li)
        } else {
            li.className = "space"
            ul.appendChild(li)
        }    
    }
}

const phraseArray = getRandomPhraseAsArray(phrases);

addPhraseToDisplay(phraseArray);

//checkLetter fxn compares  button clicked to phrase 
const checkLetter = (btnText) => {
    let phraseLetterItems = document.querySelectorAll(".letter");
    //console.log(phraseLetterItems)
    let letterSelected;
    for( item of phraseLetterItems) { 
            //console.log(item)
        if ( btnText === item.textContent ) {
            item.className = "show"
           letterSelected = btnText;

        }
    }
    return letterSelected
      
} 

const itemsWithClassLetter = document.querySelectorAll(".letter")  
const checkWin = missed => {
    console.log("check your wininng bro!!")
    const itemsWithClassShow = document.querySelectorAll(".show");
    if ( itemsWithClassLetter.length === itemsWithClassShow.length) {
        console.log("you win bro")
        document.querySelector(".overlayStatement").textContent = "Congratulations!!! You Won!!!";
        document.getElementById("overlay").className = "win";
        document.getElementById("overlay").style.display = "flex";
        resetBtn.textContent = "Play Again";
        let restartBtn = document.querySelector(".win a")
        restartBtn.addEventListener("click", () => {
            location.reload(true);
        })
    } 

    if ( missed >= 5 ) {
        console.log("you lose bro")
        document.querySelector(".overlayStatement").textContent = "You Lose!!! Better Luck Next Time!!!";
        document.getElementById("overlay").className = "lose"
        document.getElementById("overlay").style.display = "flex"
        resetBtn.textContent = "Try Again" 
        let restartBtn = document.querySelector(".lose a")
        restartBtn.addEventListener("click", () => {
            location.reload(true);
        })
    }

}


//get all the buttons on the onscreen keyboard
const btns = document.querySelectorAll("button")
//console.log(btns)

//add click evenListeners to all the buttons on keyboard.
btns.forEach(btn => btn.addEventListener("click", ()=> {
    let btnText = btn.textContent;
    let letterFound = checkLetter(btnText);
    //console.log(letterFound)
    if (!letterFound) {
        missed += 1;
        let life = document.querySelectorAll(".tries img")[missed - 1]
        life.src = "images/lostHeart.png"
        console.log(missed)

    } else {
        //life.src = "images/lostHeart.png"

    }
    btn.disabled = "true";
    btn.className = "chosen"

    checkWin(missed);
    }
));

resetBtn.addEventListener("click", () => {
    document.getElementById("overlay").style.display = "none";
    }
)


// removes div with ID = overlay, and display divs with banner, phrase, keyboard and scoreboard .
resetBtn.addEventListener("click", () => {
    document.getElementById("overlay").style.display = "none";
    }
)
