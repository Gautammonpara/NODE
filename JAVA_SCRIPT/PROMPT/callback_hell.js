// 1.
// console.log("I");

// // This will be shown after 2 seconds

// setTimeout(()=>{
//   console.log("eat");
// },2000)

// console.log("Ice Cream")

// 2.
let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};
let order = (fruit_name, call_production) => {
    setTimeout(() => {
        console.log(`fruit name ${stocks.Fruits[fruit_name]} selected`)
        call_production();
    }, 2000)

}
let production = () => {
    setTimeout(() => {
        console.log(`cut the fruit...`);
        setTimeout(() => {
            console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added...`);
            setTimeout(() => {
                console.log(`start a machine...`);
                setTimeout(() => {
                    console.log(`container was ${stocks.holder[1]} selected....`);
                    setTimeout(() => {
                        console.log(`toppings was ${stocks.toppings[0]} selected...`);
                        setTimeout(() => {
                            console.log(`serve ice cream...`);
                        }, 2000)
                    }, 3000)
                }, 2000)
            }, 1000)

        }, 1000)

    }, 2000)
}
order(0, production);