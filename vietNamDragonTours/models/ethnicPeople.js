var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var HmongPeople = new Schema({
    nameEthnic: { type: String, required: true },
    introductEthnic: { type: String, required: true },
    imagePath: { type: String, required: true },
    MeoFestival: { type: String, required: true },
}, { collection: 'ethnicGroups' });
var ChamPeople = new Schema({
    nameEthnic: { type: String, required: true },
    introductEthnic: { type: String, required: true },
    imagePath: { type: String, required: true },
    culture: { type: String, required: true },
}, { collection: 'ethnicGroups' });
var EdePeople = new Schema({
    nameEthnic: { type: String, required: true },
    introductEthnic: { type: String, required: true },
    imagePath: { type: String, required: true },
    lifeEde: { type: String, required: true },
}, { collection: 'ethnicGroups' });
var KhomerPeople = new Schema({
    nameEthnic: { type: String, required: true },
    introductEthnic: { type: String, required: true },
    OOCFestival: { type: String, required: true },
}, { collection: 'ethnicGroups' });
var MuongPeople = new Schema({
    nameEthnic: { type: String, required: true },
    introductEthnic: { type: String, required: true },
    imagePath: { type: String, required: true },
    khuaLUONG: { type: String, required: true },
}, { collection: 'ethnicGroups' });
var ThaiPeople = new Schema({
    nameEthnic: { type: String, required: true },
    introductEthnic: { type: String, required: true },
    imagePath: { type: String, required: true },
}, { collection: 'ethnicGroups' });
var KinhPeople = new Schema({
    nameEthnic: { type: String, required: true },
    introductEthnic: { type: String, required: true },
    imagePath: { type: String, required: true },
    customAndHabbit: { type: String },
    culture: { type: String, required: true },
    costumes: { type: String, required: true },
    economy: { type: String, required: true },
}, { collection: 'ethnicGroups' });
var DaoPeople = new Schema({
    nameEthnic: { type: String, required: true },
    introductEthnic: { type: String, required: true },
    imagePath: { type: String, required: true },
    customAndHabbit: { type: String },
    culture: { type: String, required: true },
    costumes: { type: String, required: true },
    economy: { type: String, required: true },
}, { collection: 'ethnicGroups' });
var HoaPeople = new Schema({
    nameEthnic: { type: String, required: true },
    introductEthnic: { type: String, required: true },
    customAndHabbit: { type: String },
    culture: { type: String, required: true },
    costumes: { type: String, required: true },
    economy: { type: String, required: true },
}, { collection: 'ethnicGroups' });




module.exports.HmongPeople = mongoose.model("HmongPeople", HmongPeople);
module.exports.ChamPeople = mongoose.model("ChamPeople", ChamPeople);
module.exports.EdePeople = mongoose.model("EdePeople", EdePeople);
module.exports.KhomerPeople = mongoose.model("KhomerPeople", KhomerPeople);
module.exports.MuongPeople = mongoose.model("MuongPeople", MuongPeople);
module.exports.ThaiPeople = mongoose.model("ThaiPeople", ThaiPeople);
module.exports.KinhPeople = mongoose.model("KinhPeople", KinhPeople);
module.exports.DaoPeople = mongoose.model("DaoPeople", DaoPeople);
module.exports.HoaPeople = mongoose.model("HoaPeople", HoaPeople);