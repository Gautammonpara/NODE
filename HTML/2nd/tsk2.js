
window.onload = function () {
    let a = [{
        "key": 1,
        "value": "apple"
    }]
    let ob = {}
    let c = 1
    let b
    const text1 = document.getElementById("b1");
    const button = document.getElementById("btn1");
    const ans = document.getElementById("pg1");
    button.addEventListener('click', () => {
        // b = text1.value;
        // a.push(b);
        // console.log(a)
        // ans.value = a;
        // const ob=Object.assign({},a);
        // console.log(ob);
        ob.key = c++;
        ob.value = text1.value;
        a.push(ob);
        console.log(a);
    });

};