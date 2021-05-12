function resizeWidthOnly(a, b) {
    let c = [window.innerWidth];
    return onresize = function () {
        let d = window.innerWidth,
            e = c.length;
        c.push(d);
        if (c[e] !== c[e - 1]) {
            clearTimeout(b);
            b = setTimeout(a, 50);
        }
    }, a;
}

let closeWindow = document.getElementById("modal-window_close");
// When the user clicks on (x), close the modal
closeWindow.onclick = function () {
    document.getElementById("modal_answer").classList.add("visually-hidden");
}

// Get the button to close the modal
let btnClose = document.getElementById("btn-close");
btnClose.onclick = function () {
    document.getElementById("modal_answer").classList.add("visually-hidden");
}

// The outside user clicks of the modal window, close it
window.addEventListener("click", function (event) {
    if (event.target == document.getElementById("modal_answer")) {
        document.getElementById("modal_answer").classList.add("visually-hidden");
    }
});
