 
//ill = "piece2"
//x = 2
//y = 2
//changePiece();
//changePiece(x, y);
/*function enterPiece() {
    str = "piece2";
    changePiece(str);
}/**/
function playTheGame() {
    do {
    //get x's input
    //
    //
    //check if space is already occupied (i.e., lock cell [this will be differet from  the cpp lab])
    } while (winner == 'false');

}


x = `<img src="./assets/xpic.png" alt="picture of an 'X'" style="width:84px">`;
o = `<img src="./assets/opic.png" alt="picture of an 'O'" style="width:100px">`;
b = `<img src="./assets/blank.png" alt="picture of blank space" style="width:100px"></img>`;
str = "piece2";
t = 'x';
turn_count = 0;
function observeBoard() {
    //turn_count++;
    if ((turn_count % 2) == 0) {
    t = 'x';
    animateTransition(x, str);
    }
    else {
    t = 'o';
    animateTransition(o, str);
    }
    
}

function animateTransition(m, s) {
    //z = a * b;
    //str = "piece2";
    //x = `<img src="./assets/xpic.png" alt="picture of an 'X'" style="width:84px"></button>`;
    document.getElementById(s).innerHTML = m;
    //console.log(z);
    //so if i'm right, we'll be declaring and re-declaring turn here... or something
}

function enterBoard() {
    
    if ((turn_count % 2) == 0) {
    t = 'x';
    enterPiece(x, str);
    }
    else {
    t = 'o';
    enterPiece(o, str);
    }
    turn_count++;
}

function enterPiece(m, s) {
    document.getElementById(s).innerHTML = m;
}

//dummy variable