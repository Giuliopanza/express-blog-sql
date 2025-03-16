function checkTime(req, res, next){
    const currentTime = new Date().toLocaleDateString();
    console.log( `Ciao sei passato dal middleware il: ${ currentTime }` )

    next();
}

module.exports = checkTime;