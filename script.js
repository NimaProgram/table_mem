// -- -- -- -- -- Definition variable and constant -- -- -- -- -- //

const onSA = document.getElementsByClassName("attsel");
const onSD = document.getElementsByClassName("defsel");
const SA = document.querySelectorAll(".attsel");
const SD = document.querySelectorAll(".defsel");

const aSel_1 = document.getElementById("aSel_1");
const aSel_2 = document.getElementById("aSel_2");
const aSel_3 = document.getElementById("aSel_3");
const aSel_4 = document.getElementById("aSel_4");
const aSel_5 = document.getElementById("aSel_5");

const dSel_1 = document.getElementById("dSel_1");
const dSel_2 = document.getElementById("dSel_2");
const dSel_3 = document.getElementById("dSel_3");
const dSel_4 = document.getElementById("dSel_4");
const dSel_5 = document.getElementById("dSel_5");

let times = document.getElementById("times");
let times_2 = document.getElementById("times_2");

let names = ["Hqihqt", "Mir4i", "Xellq", "NiMA", "ii5yu", "dariru", "golzou", "Lya", "poppy", "syouyu"];
// -- -- -- -- -- onload -- -- -- -- -- //

window.onload = () => {
    times_2.style.display = 'none';
    times.style.display = 'none';
}


// -- -- -- -- -- Bonus script :) -- -- -- -- -- //

const cUp = () => {
    // let miltime = new Date().getTime();
    
    let miltime = Math.floor(n * 10);
    // times_2.innerHTML = n;
    times.innerHTML = miltime;
    times_2.style.width = (miltime * 20) + "px";
    times_2.style.height = (miltime * 20) + "px";
}
// setInterval(cUp, 100);


// -- -- -- -- -- Process which select box  was changed. -- -- -- -- -- //

onSA[0].onchange = event => {
    if(onSA[0].selectedIndex > 0){
        onSA[0].style.backgroundColor = "white"
    }else {
        onSA[0].style.backgroundColor = "#00000000"
    }
}

onSA[1].onchange = event => {
    if(onSA[1].selectedIndex > 0){
        onSA[1].style.backgroundColor = "white"
    }else {
        onSA[1].style.backgroundColor = "#00000000"
    }
}

onSA[2].onchange = event => {
    if(onSA[2].selectedIndex > 0){
        onSA[2].style.backgroundColor = "white"
    }else {
        onSA[2].style.backgroundColor = "#00000000"
    }
}
onSA[3].onchange = event => {
    if(onSA[3].selectedIndex > 0){
        onSA[3].style.backgroundColor = "white"
    }else {
        onSA[3].style.backgroundColor = "#00000000"
    }
}
onSA[4].onchange = event => {
    if(onSA[4].selectedIndex > 0){
        onSA[4].style.backgroundColor = "white"
    }else {
        onSA[4].style.backgroundColor = "#00000000"
    }
}

onSD[0].onchange = event => {
    if(onSD[0].selectedIndex > 0){
        onSD[0].style.backgroundColor = "white"
    }else {
        onSD[0].style.backgroundColor = "#00000000"
    }
}
onSD[1].onchange = event => {
    if(onSD[1].selectedIndex > 0){
        onSD[1].style.backgroundColor = "white"
    }else {
        onSD[1].style.backgroundColor = "#00000000"
    }
}
onSD[2].onchange = event => {
    if(onSD[2].selectedIndex > 0){
        onSD[2].style.backgroundColor = "white"
    }else {
        onSD[2].style.backgroundColor = "#00000000"
    }
}
onSD[3].onchange = event => {
    if(onSD[3].selectedIndex > 0){
        onSD[3].style.backgroundColor = "white"
    }else {
        onSD[3].style.backgroundColor = "#00000000"
    }
}
onSD[4].onchange = event => {
    if(onSD[4].selectedIndex > 0){
        onSD[4].style.backgroundColor = "white"
    }else {
        onSD[4].style.backgroundColor = "#00000000"
    }
}


// -- -- -- -- -- Randomize team member sheets -- -- -- -- -- //

const runs = () => {
    nA = nB = nC = nD = nE = nF = nG = nH = nI = nJ = -1;
    tmp = [];

    while (nA == -1){
        nA = Math.floor(Math.random() * 10);
        hqt = nA;
        tmp = [nA];
    }
    while (nB == -1 || tmp.includes(nB) == true){
        nB = Math.floor(Math.random() * 10);
        mir = nB;
        tmp = [nA];
    }
    while (nC == -1 || tmp.includes(nC) == true){
        nC = Math.floor(Math.random() * 10);
        xel = nC;
        tmp = [nA, nB];
    }
    while (nD == -1 || tmp.includes(nD) == true){
        nD = Math.floor(Math.random() * 10);
        nim = nD;
        tmp = [nA, nB, nC];
    }
    while (nE == -1 || tmp.includes(nE) == true){
        nE = Math.floor(Math.random() * 10);
        ii5 = nE;
        tmp = [nA, nB, nC, nD];
    }
    while (nF == -1 || tmp.includes(nF) == true){
        nF = Math.floor(Math.random() * 10);
        dar = nF;
        tmp = [nA, nB, nC, nD, nE];
    }
    while (nG == -1 || tmp.includes(nG) == true){
        nG = Math.floor(Math.random() * 10);
        gol = nG;
        tmp = [nA, nB, nC, nD, nE, nF];
    }
    while (nH == -1 || tmp.includes(nH) == true){
        nH = Math.floor(Math.random() * 10);
        syc = nH;
        tmp = [nA, nB, nC, nD, nE, nF, nG];
    }
    while (nI == -1 || tmp.includes(nI) == true){
        nI = Math.floor(Math.random() * 10);
        pop = nI;
        tmp = [nA, nB, nC, nD, nE, nF, nG, nH];
    }
    while (nJ == -1 || tmp.includes(nJ) == true){
        nJ = Math.floor(Math.random() * 10);
        syo = nJ;
        tmp = [nA, nB, nC, nD, nE, nF, nG, nH, nI];
    }
    tmp = [nA, nB, nC, nD, nE, nF, nG, nH, nI, nJ];
    console.log(tmp);

    i = 0;


// -- -- -- -- -- Assign to Select box -- -- -- -- -- //

    while (i < tmp.length){
        if(tmp[0] == i){
            aSel_1.selectedIndex = i+1;
        }
        i++;
    }

    i = 0;

    while (i < tmp.length){
        if(tmp[1] == i){
            aSel_2.selectedIndex = i+1;
        }
        i++;
    }

    i = 0;

    while (i < tmp.length){
        if(tmp[2] == i){
            aSel_3.selectedIndex = i+1;
        }
        i++;
    }

    i = 0;

    while (i < tmp.length){
        if(tmp[3] == i){
            aSel_4.selectedIndex = i+1;
        }
        i++;
    }

    i = 0;

    while (i < tmp.length){
        if(tmp[4] == i){
            aSel_5.selectedIndex = i+1;
        }
        i++;
    }

    i = 0;

    while (i < tmp.length){
        if(tmp[5] == i){
            dSel_1.selectedIndex = i+1;
        }
        i++;
    }

    i = 0;

    while (i < tmp.length){
        if(tmp[6] == i){
            dSel_2.selectedIndex = i+1;
        }
        i++;
    }

    i = 0;

    while (i < tmp.length){
        if(tmp[7] == i){
            dSel_3.selectedIndex = i+1;
        }
        i++;
    }

    i = 0;

    while (i < tmp.length){
        if(tmp[8] == i){
            dSel_4.selectedIndex = i+1;
        }
        i++;
    }

    i = 0;

    while (i < tmp.length){
        if(tmp[9] == i){
            dSel_5.selectedIndex = i+1;
        }
        i++
    }

    i = 0;


// -- -- -- -- -- Change to background-color for white -- -- -- -- -- //

    while(i < onSA.length){
        onSA[i].style.backgroundColor = "white";
        i++;
    }

    i = 0;

    while(i < onSD.length){
        onSD[i].style.backgroundColor = "white";
        i++;
    }
}


// -- -- -- -- -- Change all selects to white -- -- -- -- -- //

const towhite = () => { 
    i = 0;
    while(i < onSA.length){
        onSA[i].style.backgroundColor = "white";
        i++;
    }
    i = 0;
    while(i < onSD.length){
        onSD[i].style.backgroundColor = "white";
        i++;
    }
}


// -- -- -- -- -- Reflect saved preset -- -- -- -- -- //

/*

emp:0

HqiHqt:1  Mir4i:2  Xellq:3  NiMA:4  ii5yu:5

dariru:6  golzou:7  Lya:8  poppy:9  syouyu:10

*/

const ps1p = [3,5,8,1,9,4,2,10,6,7] // preset1

const ps_1_run = () => { // assign preset1
    aSel_1.selectedIndex = ps1p[0];
    aSel_2.selectedIndex = ps1p[1];
    aSel_3.selectedIndex = ps1p[2];
    aSel_4.selectedIndex = ps1p[3];
    aSel_5.selectedIndex = ps1p[4];
    dSel_1.selectedIndex = ps1p[5];
    dSel_2.selectedIndex = ps1p[6];
    dSel_3.selectedIndex = ps1p[7];
    dSel_4.selectedIndex = ps1p[8];
    dSel_5.selectedIndex = ps1p[9];
    towhite() // white select
}

const ps2p = [3,5,4,9,8,1,2,7,6,10] // preset2

const ps_2_run = () => { // assign preset2
    aSel_1.selectedIndex = ps2p[0];
    aSel_2.selectedIndex = ps2p[1];
    aSel_3.selectedIndex = ps2p[2];
    aSel_4.selectedIndex = ps2p[3];
    aSel_5.selectedIndex = ps2p[4];
    dSel_1.selectedIndex = ps2p[5];
    dSel_2.selectedIndex = ps2p[6];
    dSel_3.selectedIndex = ps2p[7];
    dSel_4.selectedIndex = ps2p[8];
    dSel_5.selectedIndex = ps2p[9];
    towhite() // white select
}


// -- -- -- -- -- Hide white display after loading -- -- -- -- -- //
let tptime = 1;
cps = 3; // カウントダウンの元の変数
const whiteScreen = document.getElementById("white_screen"); // 要素の取得
const counting = () => {
    tptime -= 0.01;
    whiteScreen.style.opacity = tptime;
    if (tptime <= 0) {
        clearInterval(cc);
        whiteScreen.style.display = "none";
    }
}
const pas = () => {
    cps -= 1; // 変数cpsを-1
    if (cps <= 0){
        cc = setInterval(counting,10);
        clearInterval(dd);
    }
}

const displayopen = () => {
    dd = setInterval(pas,1000); // インターバルのセット, 名前：dd, インターバル：1秒
}
    
    
// -- -- -- -- -- Reset selected -- -- -- -- -- //

// const attrash = document.getElementById("attrash")

const resetAtt = () => {
    i = 0;
    while(i < onSA.length){
        onSA[i].style.backgroundColor = "rgba(0, 0, 0, 0)";
        i++;
    }
    aSel_1.selectedIndex = 0;
    aSel_2.selectedIndex = 0;
    aSel_3.selectedIndex = 0;
    aSel_4.selectedIndex = 0;
    aSel_5.selectedIndex = 0;
}

const resetDef = () => {
    i = 0;
    while(i < onSD.length){
        onSD[i].style.backgroundColor = "rgba(0, 0, 0, 0)";
        i++;
    }
    dSel_1.selectedIndex = 0;
    dSel_2.selectedIndex = 0;
    dSel_3.selectedIndex = 0;
    dSel_4.selectedIndex = 0;
    dSel_5.selectedIndex = 0;
}