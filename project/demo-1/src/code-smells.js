function codeSmellExample(a, b, c, d, e, f) {
    let g;
    let h;
    let i;
    let value;
    if (a) {
        if (b) {
            if (c) {
                if (d) {
                    if (e) {
                        console.log("Nested adventures!");
                        value = a + b + c + d + e;
                    }
                }
            }
        }
    } else if (a) {
        console.log(f);
        value = f;
    } else {
        console.log(f);
        value = f;
    }
    return value;
}

module.exports = {
    codeSmellExample
};