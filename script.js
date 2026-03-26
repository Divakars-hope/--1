// Female symbol floating animation
function createSymbols() {
    for (let i = 0; i < 25; i++) {
        let symbol = document.createElement("div");
        symbol.classList.add("symbol");
        symbol.innerHTML = "♀";
        symbol.style.left = Math.random() * 100 + "vw";
        symbol.style.animationDuration = (6 + Math.random() * 10) + "s";
        symbol.style.fontSize = (15 + Math.random() * 20) + "px";
        document.body.appendChild(symbol);
    }
}

createSymbols();
