function startTerminal() {
    var term = new Terminal({
        cursorBlink: "block",
        theme: {
            foreground: "#fff",
            background: "transparent",
            cursor: "#fff"
        },
        allowTransparency: true
    });
    term.open(document.getElementById("terminal"));
    term.focus();
}

(function() {
    document.onkeyup = function(e) {
        if (e.which == 13) {
            console.log(e);
            document.onkeyup = null;

            const element = document.getElementById('terminal');
            var pos = -100;
            var id = setInterval(frame, 1);
            function frame() {
                if (pos == 5) {
                    clearInterval(id);
                } else {
                    element.style.top = pos + "%";
                    pos++;
                }
            }

            startTerminal();
        }
    };
})();