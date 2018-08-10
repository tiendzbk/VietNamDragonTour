var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
//khoi tao schema
var DiscoverVietNamByStyle = new Schema({
    image: { type: String, required: true },
    titleTour: { type: String, required: true },
}, { collection: 'DiscoverVietNamByStyle' });
//tao models

var DiscoverVietNamByStyleModels = mongoose.model('DiscoverVietNamByStyleModels', DiscoverVietNamByStyle);
module.exports = DiscoverVietNamByStyleModels;