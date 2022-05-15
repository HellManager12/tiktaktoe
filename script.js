const ares = document.getElementsByClassName("area-wrapper");
const gamestart = () => {
    let fieeld = document.getElementById("selector");
    let value = fieeld.value;
    if (value == 3) {
        workarea3();
    } else if (value == 4) {
        workarea4();
    } else if (value == 5) {
        workarea5();
    }
    document.getElementById("selectfield").style.display = "none";
    document.getElementById("rest").style.display = "block";
};
const divfield3 = document.createElement("div");
divfield3.setAttribute("id", "area");
const divfield4 = document.createElement("div");
divfield4.setAttribute("id", "area4");
const divfield5 = document.createElement("div");
divfield5.setAttribute("id", "area5");
const box = document.createElement("div");
box.setAttribute("class", "box");

const workarea3 = () => {
    ares[0].appendChild(divfield3);
    let fork = document.getElementById("area");
    fork.appendChild(box);
    for (let i = 0; i < 8; i++) {
        fork.appendChild(box.cloneNode(true));
    }
    let move = 0;
    fork.addEventListener("click", (e) => {
        if (e.target.classList[1] == "clicked") {
            alert(
                "вы пытаетесь поставить в одну и ту же клетку и крестик и нолик!!!"
            );
        } else if ((e.target.classList[0] = "box")) {
            move % 2 === 0 ? (e.target.innerHTML = "X") : (e.target.innerHTML = "O");
            e.target.classList.add("clicked");
            move++;
            check3(move);
        }
    });
};

const workarea4 = () => {
    ares[0].appendChild(divfield4);
    let fork1 = document.getElementById("area4");
    fork1.appendChild(box);
    for (let i = 0; i < 15; i++) {
        fork1.appendChild(box.cloneNode(true));
    }
    let move = 0;
    fork1.addEventListener("click", (e) => {
        if (e.target.classList[1] == "clicked") {
            alert(
                "вы пытаетесь поставить в одну и ту же клетку и крестик и нолик!!!"
            );
        } else if ((e.target.classList[0] = "box")) {
            move % 2 === 0 ? (e.target.innerHTML = "X") : (e.target.innerHTML = "O");
            e.target.classList.add("clicked");
            move++;
            check4(move);
        }
    });
};

const workarea5 = () => {
    ares[0].appendChild(divfield5);
    let fork2 = document.getElementById("area5");
    fork2.appendChild(box);
    for (let i = 0; i < 24; i++) {
        fork2.appendChild(box.cloneNode(true));
    }
    let move = 0;
    fork2.addEventListener("click", (e) => {
        if (e.target.classList[1] == "clicked") {
            alert(
                "вы пытаетесь поставить в одну и ту же клетку и крестик и нолик!!!"
            );
        } else if ((e.target.classList[0] = "box")) {
            move % 2 === 0 ? (e.target.innerHTML = "X") : (e.target.innerHTML = "O");
            e.target.classList.add("clicked");
            move++;
            check5(move);
        }
    });
};

const check3 = (move) => {
    const boxes = document.getElementsByClassName("box");

    const arr = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (i = 0; i < arr.length; i++) {
        if (
            boxes[arr[i][0]].innerHTML == "X" &&
            boxes[arr[i][1]].innerHTML == "X" &&
            boxes[arr[i][2]].innerHTML == "X"
        ) {
            result = "крестиков";
            prepareResult(result);
        } else if (
            boxes[arr[i][0]].innerHTML == "O" &&
            boxes[arr[i][1]].innerHTML == "O" &&
            boxes[arr[i][2]].innerHTML == "O"
        ) {
            result = "ноликов";
            prepareResult(result);
        } else if (move == 9) {
            result = "дружбы";
            prepareResult(result);
        }
    }
};

const check4 = (move) => {
    const boxes = document.getElementsByClassName("box");

    const arr = [
        [0, 1, 2, 3],
        [4, 5, 6, 7],
        [8, 9, 10, 11],
        [12, 13, 14, 15],
        [0, 4, 8, 12],
        [1, 5, 9, 13],
        [2, 6, 10, 14],
        [3, 7, 11, 15],
        [0, 5, 10, 15],
        [3, 6, 9, 12],
    ];
    for (i = 0; i < arr.length; i++) {
        if (
            boxes[arr[i][0]].innerHTML == "X" &&
            boxes[arr[i][1]].innerHTML == "X" &&
            boxes[arr[i][2]].innerHTML == "X" &&
            boxes[arr[i][3]].innerHTML == "X"
        ) {
            result = "крестиков";
            prepareResult(result);
        } else if (
            boxes[arr[i][0]].innerHTML == "O" &&
            boxes[arr[i][1]].innerHTML == "O" &&
            boxes[arr[i][2]].innerHTML == "O" &&
            boxes[arr[i][3]].innerHTML == "O"
        ) {
            result = "ноликов";
            prepareResult(result);
        } else if (move == 16) {
            result = "дружбы";
            prepareResult(result);
        }
    }
};
const check5 = (move) => {
    const boxes = document.getElementsByClassName("box");

    const arr = [
        [0, 1, 2, 3, 4],
        [5, 6, 7, 8, 9],
        [10, 11, 12, 13, 14],
        [15, 16, 17, 18, 19],
        [20, 21, 22, 23, 24],
        [0, 5, 10, 15, 20],
        [1, 6, 11, 16, 21],
        [2, 7, 12, 17, 22],
        [3, 8, 13, 18, 23],
        [4, 9, 14, 19, 24],
        [0, 6, 12, 18, 24],
        [4, 8, 12, 16, 20],
    ];
    for (i = 0; i < arr.length; i++) {
        if (
            boxes[arr[i][0]].innerHTML == "X" &&
            boxes[arr[i][1]].innerHTML == "X" &&
            boxes[arr[i][2]].innerHTML == "X" &&
            boxes[arr[i][3]].innerHTML == "X" &&
            boxes[arr[i][4]].innerHTML == "X"
        ) {
            result = "крестиков";
            prepareResult(result);
        } else if (
            boxes[arr[i][0]].innerHTML == "O" &&
            boxes[arr[i][1]].innerHTML == "O" &&
            boxes[arr[i][2]].innerHTML == "O" &&
            boxes[arr[i][3]].innerHTML == "O" &&
            boxes[arr[i][4]].innerHTML == "O"
        ) {
            result = "ноликов";
            prepareResult(result);
        } else if (move == 16) {
            result = "дружбы";
            prepareResult(result);
        }
    }
};

const prepareResult = (winner) => {
    alert(`Победа ${winner} !`);
    location.reload();
};