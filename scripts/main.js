

// for scroll behaviour
const whatSection = document.getElementById("what");
const whatBounds = whatSection.getBoundingClientRect()
const explainBtn = document.getElementById("explain")

function scrollToWhat() {
    console.log("Scrolling to", whatBounds.y)
    scrollTo(0, whatBounds.y)
}

explainBtn.addEventListener("click", scrollToWhat)

if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}


// for download buttons
const downloadPage = "https://google.com"
const downloadBtns = document.getElementsByClassName("downloadBtn");

function visitDownloadPage() {
    window.open(downloadPage, '_blank').focus();
}

for (const btn of downloadBtns) {
    btn.addEventListener("click", visitDownloadPage)
}

