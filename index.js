function timeout(ms) {
    return new Promise(function(resolve,reject) {
        setTimeout(resolve, ms,'done');
    })
}
timeout(1000).then((value) => {
    console.log(value);
})