let cassetteTape = document.createElement("img")
let safe = document.createElement("div")
let itemsHeld = document.querySelector(".holdingItem")
let trash = document.querySelector(".trashCan")
let curtainEl = document.querySelector(".curtain");
let tapePlayer = document.querySelector(".tapeplayer")
let tvScreen = document.querySelector(".screen")
let key = document.createElement("img")
let door = document.createElement("img")
let main = document.querySelector(".main")
let body = document.querySelector(".body")

// function startGame () {
//     // iterate objects
// }
createTape();
createDoor();

trash.addEventListener("click", () => {
    if (trash.childElementCount === 1) {
        return;
    } else {
        alert("Only trash");
    }
});

function createTape () {
    cassetteTape.src = "images/tape.png";
    cassetteTape.classList.add("tape");
    trash.append(cassetteTape);
    cassetteTape.addEventListener("click", () => {
        if (itemsHeld.children[0].classList.contains("key")) {
            alert("You already found the key to leave! What are you going to do with a video tape you cheater?");
        }else{
            itemsHeld.innerHTML = ""
            itemsHeld.append(cassetteTape);
            alert("It's an old video tape");
        }
    });
};



function useTape () {
    cassetteTape.remove();
    itemsHeld.innerHTML = `<p class="nothing"></p>`;
    tvScreen.classList.add("tapeinserted");
};

tapePlayer.addEventListener("click", () => {
    if (itemsHeld.children[0].classList.contains("tape")) {
        useTape();
    } if (tvScreen.classList.contains("tapeinserted")) {
        alert("Inserted the tape!");
    } else {
        alert("Who uses a tape player nowadays?");
    }
});

tvScreen.addEventListener("click", () => {
    if (tvScreen.classList.contains("tapeinserted")) {
        alert("Must be a secret code!");
    } else {
        alert("Nothing is on the tv");
    }
});



curtainEl.addEventListener("click", () => {
    curtainEl.classList.add("open");
    alert("The suspicious curtain was hiding a safe!");
    createSafe();
}, { once: true });

function createSafe () {

    safe.classList.add("safe");
    safe.innerHTML = `<input class="code" type="text" maxlength="4" placeholder="0000"><button class="codesubmit">Open</button>`;
    curtainEl.append(safe);
    let button = document.querySelector(".codesubmit");
    button.addEventListener("click", () => {
        let passwordInput = document.querySelector(".code").value;
        if (passwordInput === "2431") {
            alert("The code was corret you genius!")
            // console.log("pw worked")
            safe.innerHTML = `<p class="safecontent"></p>`;
            createKey ();
        }else{
            alert("wrong code! try again.");
        }    
    })    
}    

function createKey () {
    key.src = "images/key.png";
    key.classList.add("key");
    let safeContent = document.querySelector(".safecontent");
    safeContent.append(key);
    key.addEventListener("click", () => {
        itemsHeld.innerHTML = ""
        itemsHeld.append(key);
        alert("It's a key!");
    })
};


function createDoor () {
    door.src = "images/doorclose.png";
    door.classList.add("door")
    main.children[1].append(door);
    door.addEventListener("click", () => {
        if (itemsHeld.children[0].classList.contains("key")) {
            useKey();
        }else{
            alert("It's locked...");
        }
    })
}


function useKey () {
    key.remove();
    itemsHeld.innerHTML = `<p class="nothing"></p>`;
    door.classList.add("open");
    // door.src = "images/dooropen.png";
    alert("Used the key!");
    body.classList.add("game-end");
};


let dvdPlayer = document.querySelector(".dvdplayer")
dvdPlayer.addEventListener("click", () => {
    alert("A dvd player but no dvds...")
})

// function createClickables () {
//    let leftWindow = document.createElement("img");
//    leftWindow.classList.add("clickable")
//    let rightWindow = document.createElement("img");
//    rightWindow.classList.add("clickable")
//    let dvdShelf = document.createElement("img");
//    dvdShelf.classList.add("clickable")
//    let computerMonitor = document.createElement("img");   
//    computerMonitor.classList.add("clickable")
// }

let clickables = [
    {
        name: "Left Window",
        class: "leftWindow",
        src: "images/window.png",
        modal: "main",
        message: "It's so nice out. There must be a way out"
    },
    {
        name: "Right Window",
        class: "rightWindow",
        src: "images/window.png",
        modal: "main",
        message: "Why are the window locks on the outside?"
    },
    {
        name: "DVD Shelf",
        class: "dvdShelf",
        src: "images/dvdshelf.png",
        modal: "right",
        message: "Freddy vs JSON, Arry Potter, Code III, Avatar The Way of Javascript"
    },
    {
        name: "Computer Monitor",
        class: "monitor",
        src: "images/monitor.png",
        modal: "left",
        message: "Seems like someone punched through the screen."
    },
    {
        name: "Plant",
        class: "plant1",
        src: "images/plant1.png",
        modal: "main",
        message: "It needs more water huh."
    },
    {
        name: "Plant",
        class: "plant2",
        src: "images/plant2.png",
        modal: "main",
        message: "This plant isn't even real..."
    }
]

for (i = 0; i < clickables.length; i++) {
    let clickable = document.createElement("img");
    let message = clickables[i].message;
    clickable.classList.add("clickable", clickables[i].class);
    clickable.src = clickables[i].src;
    clickable.addEventListener("click", () => [
        alert(message)
    ])
    let location = clickables[i].modal
    if (location === "main") {
        body.children[0].children[1].children[1].append(clickable)
    } if (location === "left") {
        body.children[1].children[1].children[1].append(clickable)
    } if (location === "right") {
        body.children[2].children[1].children[1].append(clickable)
    }
}