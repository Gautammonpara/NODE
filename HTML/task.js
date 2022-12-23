
window.onload = function () {
    const text1 = document.getElementById("b1");
    const text2 = document.getElementById("b2");
    const button = document.getElementById("btn1");
    const ans = document.getElementById("b3");
    button.addEventListener('click', () => {
        console.log("Button Clicks");
        console.log(`${text1} and ${text2} `);
        ans.value = (+text1.value + +text2.value);
    });

};

