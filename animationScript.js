function changePage(num) {
    const images = document.querySelectorAll("[id^='image']");
    for (const image of images) { image.classList.remove('roadCurrent'); }

    const selectedImage = document.getElementById(`image${num}`);
    selectedImage.classList.add('roadCurrent');
    if (num != 7) { resetQuestionMarkDot(); }
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
        setTimeout(() => { animateQuestionMarkDot(); }, 1500);
        document.getElementById("page1").style.left = "-600vw";
        document.getElementById("page2").style.left = "-500vw";
        document.getElementById("page3").style.left = "-400vw";
        document.getElementById("page4").style.left = "-300vw";
        document.getElementById("page5").style.left = "-200vw";
        document.getElementById("page6").style.left = "-100vw";
        document.getElementById("page7").style.left = "0vw";
    }
}

// Examples page 2
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
            document.getElementById("exampleBar4").style.width = frame + "%";
            frame++;
        }
        else { clearInterval(id); }
    }, 10);
}
function exampleBar4smaller() {
    let frame = 100;
    const id = setInterval(() => {
        if (frame >= 5) {
            document.getElementById("exampleBar4").style.width = frame + "%";
            frame--;
        }
        else { clearInterval(id); }
    }, 10);
}

// Example page 3
let durationNum = 0, timingNum = 0, iterationNum = 0, directionNum = 0, fillModeNum = 0, playStateNum = 0, currentDuration = 5000;
function page3exp1select(num) {
    const selectables = document.querySelectorAll("[id^='page3exp1select']");
    for (const selectable of selectables) { selectable.style.color = "var(--text-color)"; }
    document.getElementById("page3exp1animatedElement").style.animationName = "page3exp1animation1";
    document.getElementById("page3exp1selectText").style.fontSize = "24px";
    document.getElementById("page3exp1animatedElement").style.backgroundColor = "var(--text-color)";
    if (num == 0) {
        document.getElementById("page3exp1select0a").style.color = "rgb(105, 175, 255)";
        document.getElementById("page3exp1select0b").style.color = "rgb(105, 175, 255)";
        document.getElementById("page3exp1select0c").style.color = "rgb(105, 175, 255)";
        document.getElementById("page3exp1selectText").style.color = "rgb(105, 175, 255)";
        document.getElementById("page3exp1selectText").style.fontSize = "22px";
        document.getElementById("page3exp1selectText").innerHTML = "<img src='./images/info.svg' class='page3exp1selectImg'>animation<span style='color: var(--text-color)'>: </span><span style='color: rgb(255, 105, 105)'>name </span><span style='color: rgb(105, 255, 155)'>duration </span><span style='color: rgb(255, 105, 105)'>timing-function </span><span style='color: rgb(105, 255, 155)'>delay </span><span style='color: rgb(255, 205, 105)'>iteration-count </span><span style='color: rgb(255, 105, 105)'>direction </span><span style='color: rgb(255, 105, 105)'>fill-mode </span><span style='color: rgb(255, 105, 105)'>play-state</span><span style='color: var(--text-color)'>;</span>";
        document.getElementById("page3exp1select1a").style.color = "rgb(255, 105, 105)";
        document.getElementById("page3exp1select2a").style.color = "rgb(105, 255, 155)";
        document.getElementById("page3exp1select3").style.color = "rgb(255, 105, 105)";
        document.getElementById("page3exp1select4").style.color = "rgb(105, 255, 155)";
        document.getElementById("page3exp1select5").style.color = "rgb(255, 205, 105)";
        document.getElementById("page3exp1select6").style.color = "rgb(255, 105, 105)";
        document.getElementById("page3exp1select7").style.color = "rgb(255, 105, 105)";
        document.getElementById("page3exp1select8").style.color = "rgb(255, 105, 105)";
    } else if (num == 1) {
        document.getElementById("page3exp1select1a").style.color = "rgb(255, 105, 105)";
        document.getElementById("page3exp1select1b").style.color = "rgb(255, 105, 105)";
        document.getElementById("page3exp1select1c").style.color = "rgb(255, 205, 105)";
        document.getElementById("page3exp1select1d").style.color = "rgb(255, 205, 105)";
        document.getElementById("page3exp1select1e").style.color = "rgb(255, 105, 105)";
        document.getElementById("page3exp1select1f").style.color = "rgb(255, 205, 105)";
        document.getElementById("page3exp1select1g").style.color = "rgb(255, 205, 105)";
        document.getElementById("page3exp1selectText").style.color = "rgb(255, 105, 105)";
        document.getElementById("page3exp1selectText").innerHTML = "<img src='./images/info.svg' class='page3exp1selectImg'>animation-name: example1Animation";
    } else if (num == 2) {
        document.getElementById("page3exp1animatedElement").style.backgroundColor = "rgb(105, 255, 155)";
        document.getElementById("page3exp1select2a").style.color = "rgb(105, 255, 155)";
        document.getElementById("page3exp1select2b").style.color = "rgb(105, 255, 155)";
        document.getElementById("page3exp1select2c").style.color = "rgb(105, 255, 155)";
        document.getElementById("page3exp1select2d").style.color = "rgb(105, 255, 155)";
        document.getElementById("page3exp1select2e").style.color = "rgb(105, 255, 155)";
        document.getElementById("page3exp1selectText").style.color = "rgb(105, 255, 155)";
        page3exp1durationTest(durationNum);
    } else if (num == 3) {
        document.getElementById("page3exp1animatedElement").style.backgroundColor = "rgb(255, 105, 105)";
        document.getElementById("page3exp1select3").style.color = "rgb(255, 105, 105)";
        document.getElementById("page3exp1select2b").style.color = "rgb(255, 105, 105)";
        document.getElementById("page3exp1select2c").style.color = "rgb(255, 105, 105)";
        document.getElementById("page3exp1select2d").style.color = "rgb(255, 105, 105)";
        document.getElementById("page3exp1select2e").style.color = "rgb(255, 105, 105)";
        document.getElementById("page3exp1selectText").style.color = "rgb(255, 105, 105)";
        page3exp1timingFunction(timingNum);
    } else if (num == 4) {
        document.getElementById("page3exp1animatedElement").style.backgroundColor = "rgb(105, 255, 155)";
        setTimeout(() => { document.getElementById("page3exp1animatedElement").style.backgroundColor = "var(--text-color)"; }, 1000);
        document.getElementById("page3exp1select4").style.color = "rgb(105, 255, 155)";
        document.getElementById("page3exp1selectText").style.color = "rgb(105, 255, 155)";
        document.getElementById("page3exp1selectText").innerHTML = "<img src='./images/info.svg' class='page3exp1selectImg'><span onclick='page3exp1delayTest()'>animation-delay: 1s</span>";
        page3exp1delayTest();
    } else if (num == 5) {
        page3exp1iterationTest(iterationNum);
    } else if (num == 6) {
        document.getElementById("page3exp1animatedElement").style.backgroundColor = "rgb(255, 105, 105)";
        document.getElementById("page3exp1select6").style.color = "rgb(255, 105, 105)";
        document.getElementById("page3exp1selectText").style.color = "rgb(255, 105, 105)";
        page3exp1directionTest(directionNum);
    } else if (num == 7) {
        document.getElementById("page3exp1animatedElement").style.backgroundColor = "rgb(255, 105, 105)";
        document.getElementById("page3exp1select7").style.color = "rgb(255, 105, 105)";
        document.getElementById("page3exp1selectText").style.color = "rgb(255, 105, 105)";
        page3exp1fillModeTest(fillModeNum);
    } else if (num == 8) {
        page3exp1playStateTest(playStateNum);
    } else if (num == 9) {
        document.getElementById("page3exp1animatedElement").style.backgroundColor = "rgb(255, 105, 105)";
        document.getElementById("page3exp1select9a").style.color = "rgb(255, 105, 105)";
        document.getElementById("page3exp1select9b").style.color = "rgb(255, 205, 105)";
        document.getElementById("page3exp1select9c").style.color = "rgb(255, 205, 105)";
        document.getElementById("page3exp1selectText").innerHTML = "<img src='./images/info.svg' class='page3exp1selectImg'>";
    }
}

function page3exp1durationTest(num) {
    page3exp1delayTest();
    if (num == 0) {
        document.getElementById("page3exp1select2a").innerHTML = "5s";
        document.getElementById("page3exp1selectText").innerHTML = "<img src='./images/info.svg' class='page3exp1selectImg'><span onclick='page3exp1durationTest(1)'>animation-duration: 5s</span>";
        document.getElementById("page3exp1animatedElement").style.animationDuration = "5s";
        durationNum = 1; currentDuration = 5000;
    } else if (num == 1) {
        document.getElementById("page3exp1select2a").innerHTML = "1s";
        document.getElementById("page3exp1selectText").innerHTML = "<img src='./images/info.svg' class='page3exp1selectImg'><span onclick='page3exp1durationTest(2)'>animation-duration: 1s</span>";
        document.getElementById("page3exp1animatedElement").style.animationDuration = "1s";
        durationNum = 2; currentDuration = 1000;
    } else if (num == 2) {
        document.getElementById("page3exp1select2a").innerHTML = "100ms";
        document.getElementById("page3exp1selectText").innerHTML = "<img src='./images/info.svg' class='page3exp1selectImg'><span onclick='page3exp1durationTest(3)'>animation-duration: 100ms</span>";
        document.getElementById("page3exp1animatedElement").style.animationDuration = "100ms";
        durationNum = 0; currentDuration = 100;
    }
}

function page3exp1timingFunction(num) {
    if (num == 0) {
        document.getElementById("page3exp1animatedElement").style.animationTimingFunction = "ease-in-out";
        document.getElementById("page3exp1select3").innerHTML = "ease-in-out";
        document.getElementById("page3exp1selectText").innerHTML = "<img src='./images/info.svg' class='page3exp1selectImg'><span onclick='page3exp1timingFunction(1)'>animation-timing-function: ease-in-out</span>";
        timingNum = 1;
    } else if (num == 1) {
        document.getElementById("page3exp1animatedElement").style.animationTimingFunction = "ease";
        document.getElementById("page3exp1select3").innerHTML = "ease";
        document.getElementById("page3exp1selectText").innerHTML = "<img src='./images/info.svg' class='page3exp1selectImg'><span onclick='page3exp1timingFunction(2)'>animation-timing-function: ease</span>";
        timingNum = 2;
    } else if (num == 2) {
        document.getElementById("page3exp1animatedElement").style.animationTimingFunction = "ease-in";
        document.getElementById("page3exp1select3").innerHTML = "ease-in";
        document.getElementById("page3exp1selectText").innerHTML = "<img src='./images/info.svg' class='page3exp1selectImg'><span onclick='page3exp1timingFunction(3)'>animation-timing-function: ease-in</span>";
        timingNum = 3;
    } else if (num == 3) {
        document.getElementById("page3exp1animatedElement").style.animationTimingFunction = "ease-out";
        document.getElementById("page3exp1select3").innerHTML = "ease-out";
        document.getElementById("page3exp1selectText").innerHTML = "<img src='./images/info.svg' class='page3exp1selectImg'><span onclick='page3exp1timingFunction(4)'>animation-timing-function: ease-out</span>";
        timingNum = 4;
    } else if (num == 4) {
        document.getElementById("page3exp1animatedElement").style.animationTimingFunction = "linear";
        document.getElementById("page3exp1select3").innerHTML = "linear";
        document.getElementById("page3exp1selectText").innerHTML = "<img src='./images/info.svg' class='page3exp1selectImg'><span onclick='page3exp1timingFunction(5)'>animation-timing-function: linear</span>";
        timingNum = 5;
    } else if (num == 5) {
        document.getElementById("page3exp1animatedElement").style.animationTimingFunction = "step-start";
        document.getElementById("page3exp1select3").innerHTML = "step-start";
        document.getElementById("page3exp1selectText").innerHTML = "<img src='./images/info.svg' class='page3exp1selectImg'><span onclick='page3exp1timingFunction(6)'>animation-timing-function: step-start</span>";
        timingNum = 6;
    } else if (num == 6) {
        document.getElementById("page3exp1animatedElement").style.animationTimingFunction = "step-end";
        document.getElementById("page3exp1select3").innerHTML = "step-end";
        document.getElementById("page3exp1selectText").innerHTML = "<img src='./images/info.svg' class='page3exp1selectImg'><span onclick='page3exp1timingFunction(7)'>animation-timing-function: step-end</span>";
        timingNum = 7;
    } else if (num == 7) {
        document.getElementById("page3exp1animatedElement").style.animationTimingFunction = "cubic-bezier(0.1, -0.6, 0.2, 0)";
        document.getElementById("page3exp1select3").innerHTML = "cubic-bezier(0.1, -0.6, 0.2, 0)";
        document.getElementById("page3exp1selectText").innerHTML = "<img src='./images/info.svg' class='page3exp1selectImg'><span onclick='page3exp1timingFunction(8)'>animation-timing-function: cubic-bezier(0.1, -0.6, 0.2, 0)</span>";
        timingNum = 8;
    } else if (num == 8) {
        document.getElementById("page3exp1animatedElement").style.animationTimingFunction = "steps(6)";
        document.getElementById("page3exp1select3").innerHTML = "steps(6)";
        document.getElementById("page3exp1selectText").innerHTML = "<img src='./images/info.svg' class='page3exp1selectImg'><span onclick='page3exp1timingFunction(9)'>animation-timing-function: steps(6)</span>";
        timingNum = 9;
    } else if (num == 9) {
        document.getElementById("page3exp1animatedElement").style.animationTimingFunction = "ease-in-out";
        document.getElementById("page3exp1select3").innerHTML = "ease-in-out";
        document.getElementById("page3exp1selectText").innerHTML = "<img src='./images/info.svg' class='page3exp1selectImg'><span onclick='page3exp1timingFunction(1)'>animation-timing-function: ease-in-out</span>";
        timingNum = 0;
    }
}

function page3exp1delayTest() {
    document.getElementById("page3exp1animatedElement").style.animationName = "page3exp1animation2";
    setTimeout(() => { document.getElementById("page3exp1animatedElement").style.animationName = "page3exp1animation1"; }, 100);
}

function page3exp1iterationTest(num) {
    page3exp1delayTest();
    if (num == 0) {
        document.getElementById("page3exp1select5").innerHTML = "infinite";
        document.getElementById("page3exp1select5").style.color = "rgb(255, 205, 105)";
        document.getElementById("page3exp1selectText").innerHTML = "<img src='./images/info.svg' class='page3exp1selectImg'><span onclick='page3exp1iterationTest(1)'>animation-iteration-count: infinite</span>";
        document.getElementById("page3exp1selectText").style.color = "rgb(255, 205, 105)";
        document.getElementById("page3exp1animatedElement").style.animationIterationCount = "infinite";
        document.getElementById("page3exp1animatedElement").style.backgroundColor = "rgb(255, 205, 105)";
        iterationNum = 1;
    } else if (num == 1) {
        document.getElementById("page3exp1select5").innerHTML = "1";
        document.getElementById("page3exp1select5").style.color = "rgb(255, 205, 105)";
        document.getElementById("page3exp1selectText").innerHTML = "<img src='./images/info.svg' class='page3exp1selectImg'><span onclick='page3exp1iterationTest(2)'>animation-iteration-count: 1</span>";
        document.getElementById("page3exp1selectText").style.color = "rgb(255, 205, 105)";
        document.getElementById("page3exp1animatedElement").style.animationIterationCount = "1";
        document.getElementById("page3exp1animatedElement").style.backgroundColor = "rgb(255, 205, 105)";
        setTimeout(() => { document.getElementById("page3exp1animatedElement").style.backgroundColor = "var(--text-color)"; }, (currentDuration + 1000));
        iterationNum = 2;
    } else if (num == 2) {
        document.getElementById("page3exp1select5").innerHTML = "2";
        document.getElementById("page3exp1select5").style.color = "rgb(255, 205, 105)";
        document.getElementById("page3exp1selectText").innerHTML = "<img src='./images/info.svg' class='page3exp1selectImg'><span onclick='page3exp1iterationTest(0)'>animation-iteration-count: 2</span>";
        document.getElementById("page3exp1selectText").style.color = "rgb(255, 205, 105)";
        document.getElementById("page3exp1animatedElement").style.animationIterationCount = "2";
        document.getElementById("page3exp1animatedElement").style.backgroundColor = "rgb(255, 205, 105)";
        setTimeout(() => { document.getElementById("page3exp1animatedElement").style.backgroundColor = "var(--text-color)"; }, ((currentDuration * 2) + 1000));
        iterationNum = 0;
    }
}

function page3exp1directionTest(num) {
    page3exp1delayTest();
    if (num == 0) {
        document.getElementById("page3exp1select6").innerHTML = "alternate";
        document.getElementById("page3exp1selectText").innerHTML = "<img src='./images/info.svg' class='page3exp1selectImg'><span onclick='page3exp1directionTest(1)'>animation-direction: alternate</span>";
        document.getElementById("page3exp1animatedElement").style.animationDirection = "alternate";
        directionNum = 1;
    } else if (num == 1) {
        document.getElementById("page3exp1select6").innerHTML = "normal";
        document.getElementById("page3exp1selectText").innerHTML = "<img src='./images/info.svg' class='page3exp1selectImg'><span onclick='page3exp1directionTest(2)'>animation-direction: normal</span>";
        document.getElementById("page3exp1animatedElement").style.animationDirection = "normal";
        directionNum = 2;
    } else if (num == 2) {
        document.getElementById("page3exp1select6").innerHTML = "reverse";
        document.getElementById("page3exp1selectText").innerHTML = "<img src='./images/info.svg' class='page3exp1selectImg'><span onclick='page3exp1directionTest(3)'>animation-direction: reverse</span>";
        document.getElementById("page3exp1animatedElement").style.animationDirection = "reverse";
        directionNum = 3;
    } else if (num == 3) {
        document.getElementById("page3exp1select6").innerHTML = "alternate-reverse";
        document.getElementById("page3exp1selectText").innerHTML = "<img src='./images/info.svg' class='page3exp1selectImg'><span onclick='page3exp1directionTest(0)'>animation-direction: alternate-reverse</span>";
        document.getElementById("page3exp1animatedElement").style.animationDirection = "alternate-reverse";
        directionNum = 0;
    }
}

function page3exp1fillModeTest(num) {
    page3exp1delayTest();
    if (num == 0) {
        document.getElementById("page3exp1select7").innerHTML = "none";
        document.getElementById("page3exp1selectText").innerHTML = "<img src='./images/info.svg' class='page3exp1selectImg'><span onclick='page3exp1fillModeTest(1)'>animation-fill-mode: none</span>";
        document.getElementById("page3exp1animatedElement").style.animationFillMode = "none";
        fillModeNum = 1;
    } else if (num == 1) {
        document.getElementById("page3exp1select7").innerHTML = "forwards";
        document.getElementById("page3exp1selectText").innerHTML = "<img src='./images/info.svg' class='page3exp1selectImg'><span onclick='page3exp1fillModeTest(2)'>animation-fill-mode: forwards</span>";
        document.getElementById("page3exp1animatedElement").style.animationFillMode = "forwards";
        fillModeNum = 2;
    } else if (num == 2) {
        document.getElementById("page3exp1select7").innerHTML = "backwards";
        document.getElementById("page3exp1selectText").innerHTML = "<img src='./images/info.svg' class='page3exp1selectImg'><span onclick='page3exp1fillModeTest(3)'>animation-fill-mode: backwards</span>";
        document.getElementById("page3exp1animatedElement").style.animationFillMode = "backwards";
        fillModeNum = 3;
    } else if (num == 3) {
        document.getElementById("page3exp1select7").innerHTML = "both";
        document.getElementById("page3exp1selectText").innerHTML = "<img src='./images/info.svg' class='page3exp1selectImg'><span onclick='page3exp1fillModeTest(0)'>animation-fill-mode: both</span>";
        document.getElementById("page3exp1animatedElement").style.animationFillModeanimationFillMode = "both";
        fillModeNum = 0;
    }
}

function page3exp1playStateTest(num) {
    if (num == 0) {
        document.getElementById("page3exp1select8").innerHTML = "running";
        document.getElementById("page3exp1selectText").innerHTML = "<img src='./images/info.svg' class='page3exp1selectImg'><span onclick='page3exp1playStateTest(1)'>animation-play-state: running</span>";
        document.getElementById("page3exp1select8").style.color = "rgb(255, 105, 105)";
        document.getElementById("page3exp1selectText").style.color = "rgb(255, 105, 105)";
        document.getElementById("page3exp1animatedElement").style.animationPlayState = "running";
        document.getElementById("page3exp1animatedElement").style.backgroundColor = "rgb(255, 105, 105)";
        playStateNum = 1;
    } else if (num == 1) {
        document.getElementById("page3exp1select8").innerHTML = "paused";
        document.getElementById("page3exp1selectText").innerHTML = "<img src='./images/info.svg' class='page3exp1selectImg'><span onclick='page3exp1playStateTest(0)'>animation-play-state: paused</span>";
        document.getElementById("page3exp1select8").style.color = "rgb(105, 255, 155)";
        document.getElementById("page3exp1selectText").style.color = "rgb(105, 255, 155)";
        document.getElementById("page3exp1animatedElement").style.animationPlayState = "paused";
        document.getElementById("page3exp1animatedElement").style.backgroundColor = "rgb(105, 255, 155)";
        playStateNum = 0;
    }
}

function page3nextExp(num) {
    if (num == 0) {
        document.getElementById("page3part1").style.top = "-100vh";
        document.getElementById("page3part2").style.top = "0";
    } else if (num == 1) {
        document.getElementById("page3part1").style.top = "0";
        document.getElementById("page3part2").style.top = "100vh";
    }
}

// Example page 4
function page4examples(num) {
    // Resetting Hover 1
    const hoverReds1 = document.getElementsByClassName("page4expHover1red");
    const hoverGolds1 = document.getElementsByClassName("page4expHover1gold");
    const hoverBlues1 = document.getElementsByClassName("page4expHover1blue");
    const hoverGreens1 = document.getElementsByClassName("page4expHover1green");
    for (const red of hoverReds1) { red.style.color = "rgb(255, 105, 105)"; }
    for (const gold of hoverGolds1) { gold.style.color = "rgb(255, 205, 105)"; }
    for (const blue of hoverBlues1) { blue.style.color = "rgb(105, 205, 255)"; }
    for (const green of hoverGreens1) { green.style.color = "rgb(105, 255, 155)"; }
    document.getElementById("page4expHover1").style.color = "var(--text-color)";

    // Resetting Hover 2
    const hoverReds2 = document.getElementsByClassName("page4expHover2red");
    const hoverGolds2 = document.getElementsByClassName("page4expHover2gold");
    const hoverBlues2 = document.getElementsByClassName("page4expHover2blue");
    const hoverGreens2 = document.getElementsByClassName("page4expHover2green");
    for (const red of hoverReds2) { red.style.color = "var(--road-color)"; }
    for (const gold of hoverGolds2) { gold.style.color = "var(--road-color)"; }
    for (const blue of hoverBlues2) { blue.style.color = "var(--road-color)"; }
    for (const green of hoverGreens2) { green.style.color = "var(--road-color)"; }
    document.getElementById("page4expHover2").style.color = "var(--road-color)";

    // Resetting Focus 1
    const focusReds1 = document.getElementsByClassName("page4expFocus1red");
    const focusGolds1 = document.getElementsByClassName("page4expFocus1gold");
    const focusBlues1 = document.getElementsByClassName("page4expFocus1blue");
    const focusGreens1 = document.getElementsByClassName("page4expFocus1green");
    for (const red of focusReds1) { red.style.color = "rgb(255, 105, 105)"; }
    for (const gold of focusGolds1) { gold.style.color = "rgb(255, 205, 105)"; }
    for (const blue of focusBlues1) { blue.style.color = "rgb(105, 205, 255)"; }
    for (const green of focusGreens1) { green.style.color = "rgb(105, 255, 155)"; }
    document.getElementById("page4expFocus1").style.color = "var(--text-color)";

    // Resetting Focus 2
    const focusReds2 = document.getElementsByClassName("page4expFocus2red");
    const focusGolds2 = document.getElementsByClassName("page4expFocus2gold");
    const focusBlues2 = document.getElementsByClassName("page4expFocus2blue");
    const focusGreens2 = document.getElementsByClassName("page4expFocus2green");
    for (const red of focusReds2) { red.style.color = "var(--road-color)"; }
    for (const gold of focusGolds2) { gold.style.color = "var(--road-color)"; }
    for (const blue of focusBlues2) { blue.style.color = "var(--road-color)"; }
    for (const green of focusGreens2) { green.style.color = "var(--road-color)"; }
    document.getElementById("page4expFocus2").style.color = "var(--road-color)";

    // Resetting focus input
    document.getElementById("page4focusExp").blur();

    // Resetting Checked 1
    const checkedReds1 = document.getElementsByClassName("page4expChecked1red");
    const checkedGolds1 = document.getElementsByClassName("page4expChecked1gold");
    const checkedBlues1 = document.getElementsByClassName("page4expChecked1blue");
    const checkedGreens1 = document.getElementsByClassName("page4expChecked1green");
    for (const red of checkedReds1) { red.style.color = "rgb(255, 105, 105)"; }
    for (const gold of checkedGolds1) { gold.style.color = "rgb(255, 205, 105)"; }
    for (const blue of checkedBlues1) { blue.style.color = "rgb(105, 205, 255)"; }
    for (const green of checkedGreens1) { green.style.color = "rgb(105, 255, 155)"; }
    document.getElementById("page4expChecked1").style.color = "var(--text-color)";

    // Resetting Checked 2
    const checkedReds2 = document.getElementsByClassName("page4expChecked2red");
    const checkedGolds2 = document.getElementsByClassName("page4expChecked2gold");
    const checkedBlues2 = document.getElementsByClassName("page4expChecked2blue");
    const checkedGreens2 = document.getElementsByClassName("page4expChecked2green");
    for (const red of checkedReds2) { red.style.color = "var(--road-color)"; }
    for (const gold of checkedGolds2) { gold.style.color = "var(--road-color)"; }
    for (const blue of checkedBlues2) { blue.style.color = "var(--road-color)"; }
    for (const green of checkedGreens2) { green.style.color = "var(--road-color)"; }
    document.getElementById("page4expChecked2").style.color = "var(--road-color)";

    // Resetting checkbox
    document.getElementById("page4checkedExp").checked = false;
    document.getElementById("page4checkedExp").setAttribute("onchange", "page4examples(3)");

    // Resetting Active 1
    const activeReds1 = document.getElementsByClassName("page4expActive1red");
    const activeGolds1 = document.getElementsByClassName("page4expActive1gold");
    const activeBlues1 = document.getElementsByClassName("page4expActive1blue");
    const activeGreens1 = document.getElementsByClassName("page4expActive1green");
    for (const red of activeReds1) { red.style.color = "rgb(255, 105, 105)"; }
    for (const gold of activeGolds1) { gold.style.color = "rgb(255, 205, 105)"; }
    for (const blue of activeBlues1) { blue.style.color = "rgb(105, 205, 255)"; }
    for (const green of activeGreens1) { green.style.color = "rgb(105, 255, 155)"; }
    document.getElementById("page4expActive1").style.color = "var(--text-color)";

    // Resetting Active 2
    const activeReds2 = document.getElementsByClassName("page4expActive2red");
    const activeGolds2 = document.getElementsByClassName("page4expActive2gold");
    const activeBlues2 = document.getElementsByClassName("page4expActive2blue");
    const activeGreens2 = document.getElementsByClassName("page4expActive2green");
    for (const red of activeReds2) { red.style.color = "var(--road-color)"; }
    for (const gold of activeGolds2) { gold.style.color = "var(--road-color)"; }
    for (const blue of activeBlues2) { blue.style.color = "var(--road-color)"; }
    for (const green of activeGreens2) { green.style.color = "var(--road-color)"; }
    document.getElementById("page4expActive2").style.color = "var(--road-color)";

    // Setting 1 on Hover
    if (num == 1) {
        for (const red of hoverReds1) { red.style.color = "gray"; }
        for (const gold of hoverGolds1) { gold.style.color = "gray"; }
        for (const blue of hoverBlues1) { blue.style.color = "gray"; }
        for (const green of hoverGreens1) { green.style.color = "gray"; }
        document.getElementById("page4expHover1").style.color = "gray";

        for (const red of hoverReds2) { red.style.color = "rgb(255, 105, 105)"; }
        for (const gold of hoverGolds2) { gold.style.color = "rgb(255, 205, 105)"; }
        for (const blue of hoverBlues2) { blue.style.color = "rgb(105, 205, 255)"; }
        for (const green of hoverGreens2) { green.style.color = "rgb(105, 255, 155)"; }
        document.getElementById("page4expHover2").style.color = "var(--text-color)";
    }

    // Setting 2 on Focus
    else if (num == 2) {
        document.getElementById("page4focusExp").focus();

        for (const red of focusReds1) { red.style.color = "gray"; }
        for (const gold of focusGolds1) { gold.style.color = "gray"; }
        for (const blue of focusBlues1) { blue.style.color = "gray"; }
        for (const green of focusGreens1) { green.style.color = "gray"; }
        document.getElementById("page4expFocus1").style.color = "gray";

        for (const red of focusReds2) { red.style.color = "rgb(255, 105, 105)"; }
        for (const gold of focusGolds2) { gold.style.color = "rgb(255, 205, 105)"; }
        for (const blue of focusBlues2) { blue.style.color = "rgb(105, 205, 255)"; }
        for (const green of focusGreens2) { green.style.color = "rgb(105, 255, 155)"; }
        document.getElementById("page4expFocus2").style.color = "var(--text-color)";
    }

    // Setting 3 on Checked (onchange)
    else if (num == 3) {
        document.getElementById("page4checkedExp").checked = true;
        document.getElementById("page4checkedExp").setAttribute("onchange", "page4examples(0)");

        for (const red of checkedReds1) { red.style.color = "gray"; }
        for (const gold of checkedGolds1) { gold.style.color = "gray"; }
        for (const blue of checkedBlues1) { blue.style.color = "gray"; }
        for (const green of checkedGreens1) { green.style.color = "gray"; }
        document.getElementById("page4expChecked1").style.color = "gray";

        for (const red of checkedReds2) { red.style.color = "rgb(255, 105, 105)"; }
        for (const gold of checkedGolds2) { gold.style.color = "rgb(255, 205, 105)"; }
        for (const blue of checkedBlues2) { blue.style.color = "rgb(105, 205, 255)"; }
        for (const green of checkedGreens2) { green.style.color = "rgb(105, 255, 155)"; }
        document.getElementById("page4expChecked2").style.color = "var(--text-color)";
    }

    // Setting 4 on Active (focus)
    else if (num == 4) {
        for (const red of activeReds1) { red.style.color = "gray"; }
        for (const gold of activeGolds1) { gold.style.color = "gray"; }
        for (const blue of activeBlues1) { blue.style.color = "gray"; }
        for (const green of activeGreens1) { green.style.color = "gray"; }
        document.getElementById("page4expActive1").style.color = "gray";

        for (const red of activeReds2) { red.style.color = "rgb(255, 105, 105)"; }
        for (const gold of activeGolds2) { gold.style.color = "rgb(255, 205, 105)"; }
        for (const blue of activeBlues2) { blue.style.color = "rgb(105, 205, 255)"; }
        for (const green of activeGreens2) { green.style.color = "rgb(105, 255, 155)"; }
        document.getElementById("page4expActive2").style.color = "var(--text-color)";
    }
}

function page4disableTransition(onOff) {
    // 0 is on, 1 is off
    if (onOff == 0) {
        document.getElementById("page4disableTransition").setAttribute("onclick", "page4disableTransition(1)");
        document.getElementById("page4disableTransitionTime").innerHTML = "0s";
        document.getElementById("page4hoverExp").style.transition = "all 0s";
    } else if (onOff == 1) {
        document.getElementById("page4disableTransition").setAttribute("onclick", "page4disableTransition(0)");
        document.getElementById("page4disableTransitionTime").innerHTML = "1000ms";
        document.getElementById("page4hoverExp").style.transition = "all 1000ms";
    }
}

// Example page 5
let page5exp1currentPos = 4;
function page5control(num) {
    const page5exp1controls = document.getElementsByClassName("page5exp1control");
    for (const control of page5exp1controls) { control.style.border = "1px solid rgba(255, 255, 255, 0.5)"; }
    page5exp1controls[num].style.border = "4px solid rgb(255, 205, 105)";

    page5exp1currentPos = num;
    const animatedElement = document.getElementById("page5exp1animatedElement");
    if (num == 0) { animatedElement.style.top = "0px"; animatedElement.style.left = "0px"; page5showCode(1, ''); }
    else if (num == 1) { animatedElement.style.top = "0px"; animatedElement.style.left = "570px"; page5showCode(2, ''); }
    else if (num == 2) { animatedElement.style.top = "0px"; animatedElement.style.left = "1140px"; page5showCode(3, ''); }
    else if (num == 3) { animatedElement.style.top = "155px"; animatedElement.style.left = "0px"; page5showCode(4, ''); }
    else if (num == 4) { animatedElement.style.top = "155px"; animatedElement.style.left = "570px"; page5showCode(5, ''); }
    else if (num == 5) { animatedElement.style.top = "155px"; animatedElement.style.left = "1140px"; page5showCode(6, ''); }
    else if (num == 6) { animatedElement.style.top = "310px"; animatedElement.style.left = "0px"; page5showCode(7, ''); }
    else if (num == 7) { animatedElement.style.top = "310px"; animatedElement.style.left = "570px"; page5showCode(8, ''); }
    else if (num == 8) { animatedElement.style.top = "310px"; animatedElement.style.left = "1140px"; page5showCode(9, ''); }
}
function page5randomAnimation() { let randomNum = Math.floor(Math.random() * (8 - 0 + 1) + 0); page5control(randomNum); }

function page5colors(num) {
    const colorControls = document.querySelectorAll("[id^='page5exp1color']");
    for (const colorControl of colorControls) { colorControl.style.transform = ""; }

    const preColors = ["rgb(255, 0, 0)", "rgb(255, 154, 0)", "rgb(208, 222, 33)", "rgb(79, 220, 74)", "rgb(63, 218, 216)", "rgb(47, 201, 226)", "rgb(28, 127, 238)", "rgb(95, 21, 242)", "rgb(186, 12, 248)", "rgb(251, 7, 217)", "rgb(255, 255, 255)", "rgb(0, 0, 0)"];
    const animatedElement = document.getElementById("page5exp1animatedElement");

    if (num != 12) {
        animatedElement.style.backgroundColor = preColors[num];
        page5showCode(10, preColors[num]);
        colorControls[(num + 1)].style.transform = "scale(1.25)";
    }
    else if (num == 12) {
        let colorTest = 0;
        const id = setInterval(() => {
            animatedElement.style.backgroundColor = preColors[colorTest];
            page5showCode(10, preColors[colorTest]);

            for (const colorControl of colorControls) { colorControl.style.transform = ""; }
            colorControls[(colorTest + 1)].style.transform = "scale(1.25)";

            colorTest++;
            if (colorTest == 12) { clearInterval(id); }
        }, 500);
    }
}

function page5showCode(num, colorString) {
    const page5exp1codes = document.getElementsByClassName("page5exp1text");
    for (const code of page5exp1codes) { code.style.display = "none"; }

    const animatedElement = document.getElementById("page5exp1animatedElement");
    if (num == 0) {
        animatedElement.style.top = "155px";
        animatedElement.style.left = "570px";
        document.getElementById("page5exp1code1").style.display = "block";
    }
    else if (num == 1) { document.getElementById("page5exp1code2").style.display = "block"; }
    else if (num == 2) { document.getElementById("page5exp1code3").style.display = "block"; }
    else if (num == 3) { document.getElementById("page5exp1code4").style.display = "block"; }
    else if (num == 4) { document.getElementById("page5exp1code5").style.display = "block"; }
    else if (num == 5) { document.getElementById("page5exp1code6").style.display = "block"; }
    else if (num == 6) { document.getElementById("page5exp1code7").style.display = "block"; }
    else if (num == 7) { document.getElementById("page5exp1code8").style.display = "block"; }
    else if (num == 8) { document.getElementById("page5exp1code9").style.display = "block"; }
    else if (num == 9) { document.getElementById("page5exp1code10").style.display = "block"; }
    else if (num == 10) {
        animatedElement.style.top = "155px";
        animatedElement.style.left = "570px";
        document.getElementById("page5exp1code11").style.display = "block";
        document.getElementById("page5expRGB").innerHTML = '"' + colorString + '"';
    }
}

// Example page 6
function page6showText(num) {
    const page6textBlocks = document.querySelectorAll("[id^='page6exp1textBlock']");
    for (const textBlock of page6textBlocks) { textBlock.style.display = "none"; }

    if (num == 0) { document.getElementById("page6exp1textBlock1").style.display = "block"; }
    else if (num == 1) { document.getElementById("page6exp1textBlock2").style.display = "block"; }
    else if (num == 2) { document.getElementById("page6exp1textBlock3").style.display = "block"; }
    else if (num == 3) { document.getElementById("page6exp1textBlock4").style.display = "block"; }
    else if (num == 4) { document.getElementById("page6exp1textBlock5").style.display = "block"; }
    else if (num == 5) { document.getElementById("page6exp1textBlock6").style.display = "block"; }
    else if (num == 6) { document.getElementById("page6exp1textBlock7").style.display = "block"; }
    else if (num == 7) { document.getElementById("page6exp1textBlock8").style.display = "block"; }
    else if (num == 8) { document.getElementById("page6exp1textBlock8").style.display = "block"; }
    else if (num == 11) { document.getElementById("page6exp1textBlock12").style.display = "block"; }
    else if (num == 12) { document.getElementById("page6exp1textBlock13").style.display = "block"; }
}

function page6animateElement1() {
    page6showText(0);

    let frame = 0;
    const animatedElement = document.getElementById("page6exp1animatedElement");

    const id = setInterval(() => {
        if (frame <= 90) {
            animatedElement.style.top = frame + "%";
            frame++;
        }
        else { clearInterval(id); }
    }, 10);
}

function page6animateElement2() {
    page6showText(1);

    let frame = 0;
    const animatedElement = document.getElementById("page6exp1animatedElement");

    const id = setInterval(() => {
        if (frame <= 80) {
            animatedElement.style.left = frame + "%";
            frame++;
        }
        else { clearInterval(id); }
    }, 10);
}

function page6animateElement3() {
    page6showText(2);

    let frame = 0;
    const animatedElement = document.getElementById("page6exp1animatedElement");

    const id = setInterval(() => {
        if (frame <= 90) {
            animatedElement.style.top = frame + "%";
            animatedElement.style.left = (frame * (8 / 9)) + "%";
            frame++;
        }
        else { clearInterval(id); }
    }, 10);
}

function page6animateElement4() {
    page6showText(3);

    let frame = 0;
    const animatedElement = document.getElementById("page6exp1animatedElement");

    const id = setInterval(() => {
        if (frame <= 90) {
            animatedElement.style.top = frame + "%";
            frame++;
        } else if (frame <= 170) {
            animatedElement.style.left = (frame - 90) + "%";
            frame++;
        } else if (frame <= 260) {
            animatedElement.style.top = ((frame * -1) + 260) + "%";
            frame++;
        } else if (frame <= 340) {
            animatedElement.style.left = ((frame * -1) + 340) + "%";
            frame++;
        }
        else { clearInterval(id); }
    }, 10);
}

function page6animateElement5() {
    page6showText(4);

    let frame = 0;
    let topPos = 0;
    let leftPos = 0;
    const animatedElement = document.getElementById("page6exp1animatedElement");

    const id = setInterval(() => {
        if (frame <= 80) {
            animatedElement.style.left = leftPos + "%";
            frame++;
            leftPos++;
        } else if (frame <= 170) {
            animatedElement.style.top = topPos + "%";
            frame++;
            topPos++;
        } else if (frame <= 250) {
            animatedElement.style.left = leftPos + "%";
            frame++;
            leftPos--;
        } else if (frame <= 340) {
            animatedElement.style.top = topPos + "%";
            frame++;
            topPos--;
        }
        else { clearInterval(id); }
    }, 10);
}

function page6animateElement6() {
    page6showText(5);

    let frame = 0;
    let topPos = 0;
    let leftPos = 0;
    let xPos = -96;
    const animatedElement = document.getElementById("page6exp1animatedElement");

    const id = setInterval(() => {
        if (frame <= 191) {
            animatedElement.style.top = topPos + "%";
            animatedElement.style.left = leftPos + "%";
            frame++;
            xPos++;
            leftPos += 0.42;
            topPos = -0.01 * xPos ** 2 + 90;
        }
        else { clearInterval(id); }
    }, 10);
}

function page6animateElement7() {
    page6showText(6);

    let frame = 0;
    let xRadius = 95;
    let yRadius = 205;
    let angle = 0;

    const animatedElement = document.getElementById("page6exp1animatedElement");
    animatedElement.style.top = "205px";
    animatedElement.style.left = "95px";

    const id = setInterval(() => {
        if (frame <= 1000) {
            angle += 2;
            var newTop = yRadius * Math.sin(angle * (Math.PI / 180)) + 205;
            var newLeft = xRadius * Math.cos(angle * (Math.PI / 180)) + 95;
            animatedElement.style.top = newTop + "px";
            animatedElement.style.left = newLeft + "px";
            frame++;
        }
        else { clearInterval(id); }
    }, 10);
}

function page6animateElement8() {
    page6showText(7);

    let frame = 0;
    let xRadius = 95;
    let yRadius = 205;
    let angle = 0;

    const animatedElement = document.getElementById("page6exp1animatedElement");
    animatedElement.style.top = "205px";
    animatedElement.style.left = "95px";

    const trailContainer = document.createElement("div");
    trailContainer.style.position = "absolute";
    trailContainer.style.top = "24px";
    trailContainer.style.left = "23px";
    document.getElementById("page6exp1animationBox").appendChild(trailContainer);

    let numTrailElements = 0;

    const id = setInterval(() => {
        if (frame <= 1000) {
            angle += 2;
            var newTop = yRadius * Math.sin(angle * (Math.PI / 180)) + 205;
            var newLeft = xRadius * Math.cos(angle * (Math.PI / 180)) + 95;
            animatedElement.style.top = newTop + "px";
            animatedElement.style.left = newLeft + "px";
            frame++;

            numTrailElements++;
            const trailElement = document.createElement("div");
            trailElement.style.width = "10px";
            trailElement.style.height = "10px";
            trailElement.style.borderRadius = "50%";
            trailElement.style.position = "absolute";
            trailElement.style.top = newTop + "px";
            trailElement.style.left = newLeft + "px";
            trailElement.style.backgroundColor = "#00ffff";
            trailElement.style.opacity = (numTrailElements / 50).toString();
            trailContainer.appendChild(trailElement);

            if (trailContainer.children.length > 50) {
                trailContainer.removeChild(trailContainer.firstChild);
                numTrailElements--;

                for (let i = 0; i < trailContainer.children.length; i++) { trailContainer.children[i].style.opacity = (i / 50).toString(); }
            }
        }
        else { clearInterval(id); trailContainer.remove(); }
    }, 10);
}

function page6animateElement9() {
    page6showText(8);

    let frame = 0;
    let amplitude = 100;
    let period = 200;
    let x = 0;
    let y = 0;

    const animatedElement = document.getElementById("page6exp1animatedElement");
    animatedElement.style.top = "100px";
    animatedElement.style.left = "0px";

    const trailContainer = document.createElement("div");
    trailContainer.style.position = "absolute";
    document.body.appendChild(trailContainer);

    const id = setInterval(() => {
        if (frame <= 100) {
            x += 5;
            y = amplitude * Math.sin((x / period) * (Math.PI * 2)) + 100;
            animatedElement.style.top = y + "px";
            animatedElement.style.left = x + "px";
            frame++;

            const trailElement = document.createElement("div");
            trailElement.style.width = "10px";
            trailElement.style.height = "10px";
            trailElement.style.borderRadius = "50%";
            trailElement.style.position = "absolute";
            trailElement.style.top = y + "px";
            trailElement.style.left = x + "px";
            trailElement.style.backgroundColor = "#00ffff";
            trailElement.style.opacity = "0.5";
            trailContainer.appendChild(trailElement);

            // Fade out the trailing elements
            for (let i = 0; i < trailContainer.children.length; i++) {
                const element = trailContainer.children[i];
                element.style.opacity = (1 - (i / trailContainer.children.length)).toString();
            }
        }
        else {
            clearInterval(id);
            trailContainer.remove();
        }
    }, 10);

}

function page6animateElementReset() {
    page6showText(11);

    const animatedElement = document.getElementById("page6exp1animatedElement");
    animatedElement.style.top = 0;
    animatedElement.style.left = 0;
}

// Question mark page 7
function animateQuestionMarkDot() {
    var dot = document.getElementById("questionMarkDot");
    let frame = 0, horChange = -935, vertChange = -625, test1 = 0, test2 = 0;
    const id = setInterval(() => {
        if (test1 == 0) { if (horChange <= 935) { horChange += 5; } else { test1 = 1; } } else if (test1 == 1) { if (horChange >= -935) { horChange -= 5; } else { test1 = 0; } }
        if (test2 == 0) { if (vertChange <= 75) { vertChange += 5; } else { test2 = 1; } } else if (test2 == 1) { if (vertChange >= -625) { vertChange -= 5; } else { test2 = 0; } }
        if (frame < 1318) { dot.style.transform = "translate(" + horChange + "px, " + vertChange + "px)"; frame++; } else { dot.style.backgroundColor = "white"; clearInterval(id); }
    }, 10);
}
function resetQuestionMarkDot() { document.getElementById("questionMarkDot").style.transform = "translate(-935px, -625px)"; document.getElementById("questionMarkDot").style.backgroundColor = "gray"; }
function continueQuestionMarkDot() {
    var dot = document.getElementById("questionMarkDot"), currentStyle = window.getComputedStyle(dot), matrix = new WebKitCSSMatrix(currentStyle.transform);
    dot.style.backgroundColor = "gray";
    let frame = 0, horChange = matrix.m41, vertChange = matrix.m42, test1 = 0, test2 = 0, plusMinus1 = 1, plusMinus2 = 1;
    if (horChange == 930) { plusMinus1 = -1; } if (vertChange == 70) { plusMinus2 = -1; }
    const id = setInterval(() => {
        if (test1 == 0) { if (horChange <= 935) { horChange += (plusMinus1 * 5); } else { test1 = 1; } } else if (test1 == 1) { if (horChange >= -935) { horChange -= (plusMinus1 * 5); } else { test1 = 0; } }
        if (test2 == 0) { if (vertChange <= 75) { vertChange += (plusMinus2 * 5); } else { test2 = 1; } } else if (test2 == 1) { if (vertChange >= -625) { vertChange -= (plusMinus2 * 5); } else { test2 = 0; } }
        if (horChange == 935 || horChange == -935) { plusMinus1 = 1; } if (vertChange == 75 || vertChange == -625) { plusMinus2 = 1; }
        if (vertChange == 75 && horChange == 935) { dot.style.backgroundColor = "white"; clearInterval(id); }
        else if (vertChange == 75 && horChange == -935) { dot.style.backgroundColor = "white"; clearInterval(id); }
        else if (vertChange == -625 && horChange == 935) { dot.style.backgroundColor = "white"; clearInterval(id); }
        else if (vertChange == -625 && horChange == -935) { dot.style.backgroundColor = "white"; clearInterval(id); }
        else { dot.style.transform = "translate(" + horChange + "px, " + vertChange + "px)"; frame++; }
    }, 10);
}
