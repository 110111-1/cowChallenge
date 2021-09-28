const userInfo = require('./information');
const cowsay = require("cowsay");
console.log(cowsay.say({
    text : `Bonjour ${userInfo.nom} qui travaille à ${userInfo.campus}`,
    e : "oO",
    T : "U "
}));