// gets start/reset btn and stores it in variable resetBtn
const resetBtn = document.getElementsByClassName("btn__reset")[0];

const qwerty = document.getElementById("qwerty"); //gets keyboard div
const phrase = document.getElementById("phrase"); // gets phrase div
let missed = 0; //initializes missed guesses

const phrases = ["Blessed are the pure in heart",
                "Blessed are those who hunger and thirst for righteous",
                "Blessed are the peace makers",
                "Blessed are the meek",
                "Blessed are those who are persecuted for righteousness sake"];


const getRandomPhraseAsArray = arr => {
    //fxn takes an array, select random phrase from array, split at " " and returns new array of chars
    let randomPhrase = arr[Math.floor(Math.random() * arr.length)]
    return randomPhrase.split("")
}
/*Create an addPhraseToDisplay function that loops through an array of characters. Inside the loop, 
for each character in the array, you’ll create a list item, put the character inside of the list item, 
and append that list item to the #phrase ul in your HTML. If the character in the array is a letter 
and not a space, 
the function should add the class “letter” to the list item.*/
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
let testbtn = document.getElementsByClassName("letter")
//console.log(testbtn)

//checkLetter fxn compares  button clicked to phrase 
const checkLetter = (btnText) => {
    let phraseLetterItems = document.getElementsByClassName("letter");
    for (const item of phraseLetterItems ) {
            phraseLetter = item.textNode
        if ( btnText === phraseLetter ) {
            item.className = "show"
            return phraseLetter;
            //disable button salected
        }
    }
    
}

//get all the buttons on the onscreen keyboard
const btns = document.querySelectorAll("button")
console.log(btns)

//add click evenListeners to all the buttons on keyboard.
btns.forEach(btn => btn.addEventListener("click", ()=> {
    let btnText = btn.textContent;
    console.log(btnText)
    checkLetter(btnText);
    btn.disabled = "true";
    btn.style.color = 'red';
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
