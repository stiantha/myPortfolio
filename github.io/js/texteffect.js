const u = "#¤!#¤%!%#!¤&#¤¤#¤%";
const a = document.getElementById("cmd1");
const b = document.getElementById("cmd2");
const c = document.getElementById("cmd3");
const d = document.getElementById("cmd4");

function scrambleText(element) {
    const originalText = element.innerText;

    let iterations = 0;
    const words = originalText.split(" ");

    const interval = setInterval(() => {
        const scrambledText = words
            .map((word) => {
                return word
                    .split("")
                    .map((char, i) => {
                        if (i < iterations) {
                            return char;
                        }
                        return u[Math.floor(Math.random() * 26)];
                    })
                    .join("");
            })
            .join(" ");

        element.innerText = scrambledText;

        if (iterations >= originalText.length) clearInterval(interval);

        iterations += 1 / 3;
    }, 100); // Adjust the interval duration here (e.g., 100 milliseconds)
}

if (a && b || c && d) {
    scrambleText(a);
    scrambleText(b);
    scrambleText(c);
    scrambleText(d);
 
}
