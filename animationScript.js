function changePage(num) {
    const images = document.querySelectorAll("[id^='image']");
    for (const image of images) { image.classList.remove('roadCurrent'); }

    const selectedImage = document.getElementById(`image${num}`);
    selectedImage.classList.add('roadCurrent');

    if (num == 1) {
        document.getElementById("page1").style.left = "0vw";
        document.getElementById("page2").style.left = "100vw";
        document.getElementById("page3").style.left = "200vw";
        document.getElementById("page4").style.left = "300vw";
        document.getElementById("page5").style.left = "400vw";
        document.getElementById("page6").style.left = "500vw";
        document.getElementById("page7").style.left = "600vw";
    } else if (num == 2) {
        document.getElementById("page1").style.left = "-100vw";
        document.getElementById("page2").style.left = "0vw";
        document.getElementById("page3").style.left = "100vw";
        document.getElementById("page4").style.left = "200vw";
        document.getElementById("page5").style.left = "300vw";
        document.getElementById("page6").style.left = "400vw";
        document.getElementById("page7").style.left = "500vw";
    } else if (num == 3) {
        document.getElementById("page1").style.left = "-200vw";
        document.getElementById("page2").style.left = "-100vw";
        document.getElementById("page3").style.left = "0vw";
        document.getElementById("page4").style.left = "100vw";
        document.getElementById("page5").style.left = "200vw";
        document.getElementById("page6").style.left = "300vw";
        document.getElementById("page7").style.left = "400vw";
    } else if (num == 4) {
        document.getElementById("page1").style.left = "-300vw";
        document.getElementById("page2").style.left = "-200vw";
        document.getElementById("page3").style.left = "-100vw";
        document.getElementById("page4").style.left = "0vw";
        document.getElementById("page5").style.left = "100vw";
        document.getElementById("page6").style.left = "200vw";
        document.getElementById("page7").style.left = "300vw";
    } else if (num == 5) {
        document.getElementById("page1").style.left = "-400vw";
        document.getElementById("page2").style.left = "-300vw";
        document.getElementById("page3").style.left = "-200vw";
        document.getElementById("page4").style.left = "-100vw";
        document.getElementById("page5").style.left = "0vw";
        document.getElementById("page6").style.left = "100vw";
        document.getElementById("page7").style.left = "200vw";
    } else if (num == 6) {
        document.getElementById("page1").style.left = "-500vw";
        document.getElementById("page2").style.left = "-400vw";
        document.getElementById("page3").style.left = "-300vw";
        document.getElementById("page4").style.left = "-200vw";
        document.getElementById("page5").style.left = "-100vw";
        document.getElementById("page6").style.left = "0vw";
        document.getElementById("page7").style.left = "100vw";
    } else if (num == 7) {
        document.getElementById("page1").style.left = "-600vw";
        document.getElementById("page2").style.left = "-500vw";
        document.getElementById("page3").style.left = "-400vw";
        document.getElementById("page4").style.left = "-300vw";
        document.getElementById("page5").style.left = "-200vw";
        document.getElementById("page6").style.left = "-100vw";
        document.getElementById("page7").style.left = "0vw";
    }
}

function examples(openClose) {
    if (openClose == 0) {
        document.getElementById("methodsPage1").style.top = "-100vh";
        document.getElementById("methodsPage2").style.top = "0vh";
    } else if (openClose == 1) {
        document.getElementById("methodsPage1").style.top = "0vh";
        document.getElementById("methodsPage2").style.top = "100vh";
    }
}

function exampleBar3larger() { document.getElementById("exampleBar3").style.width = "100%"; }
function exampleBar3smaller() { document.getElementById("exampleBar3").style.width = "5%"; }

function exampleBar4larger() {
    let frame = 5;
    const id = setInterval(() => {
        if (frame <= 100) {
            document.getElementById("exampleBar4").style.width = frame+"%";
            frame++;
        }
        else { clearInterval(id); }
    }, 10);
}
function exampleBar4smaller() {
    let frame = 100;
    const id = setInterval(() => {
        if (frame >= 5) {
            document.getElementById("exampleBar4").style.width = frame+"%";
            frame--;
        }
        else { clearInterval(id); }
    }, 10);
}
