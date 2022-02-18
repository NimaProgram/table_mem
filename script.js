// -- -- -- -- -- Definition variable and constant -- -- -- -- -- //

const onSA = document.getElementsByClassName("attsel");
const onSD = document.getElementsByClassName("defsel");
let times = document.getElementById("times");


// -- -- -- -- -- onload -- -- -- -- -- //

window.onload = () => {
    times.style.display = 'none';
}


// -- -- -- -- -- Bocus script :) -- -- -- -- -- //

// const cUp = () => {
//     // let miltime = new Date().getTime();
//     let miltime = Math.random();
//     times.innerHTML = miltime * 100000000000000000;
// }
// setInterval(cUp, 50);


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