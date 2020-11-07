function showTime() {

    let d = new Date();
    let n = d.toLocaleTimeString();
    document.getElementById('time').innerText = n;
}
setInterval("showTime()", 1000);


function increment() {
    console.log("AAAAA")
    document.getElementById('count').innerText = parseInt(document.getElementById('count').innerText) + 1;
}
