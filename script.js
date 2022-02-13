
let times = document.getElementById("times");

const cUp = () => {
    // let miltime = new Date().getTime();
    let miltime = Math.random();
    times.innerHTML = miltime * 100000000000000000;
}

setInterval(cUp, 50);
