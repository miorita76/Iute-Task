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
