const taglines = [
    ["ideas at work", "Ideas that Work."],
    ["Proven Results", "Proven Performance"],
    ["The Practitioner's Perspective"]
]


let running = true;

while (running) {
    taglines.forEach(line => {
        setTimeout(() => {
            if (line.length === 1) {
                document.querySelector("h3").textContent = ""
                document.querySelector("h2").textContent = line[0]
            } else {
                document.querySelector("h3").textContent = line[0]
                document.querySelector("h2").textContent = line[1]
            }
        }, 12000);
    })
}