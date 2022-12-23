let pass = (callback) => {
    console.log(callback)
    return callback();
}
let again = () => {
    console.log("MY NAME IS GAUTAM....!")
}
pass(again)