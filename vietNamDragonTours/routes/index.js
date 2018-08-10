var express = require('express');
var router = express.Router();
var HmongPeopleModel = require("../models/ethnicPeople");

var DiscoverVietNamByStyleModels = require("../models/DiscoverVietNamByStyle.js");

/* GET home page. */
router.get('/', function(req, res, next) {
    DiscoverVietNamByStyleModels.find({}, function(err, data) {
        if (err) throw err;
        var chunkData = [];
        var chunkSize = 4;
        for (var i = 0; i < data.length; i += chunkSize) {
            chunkData.push(data.slice(i, i + chunkSize));
        }
        res.render('index', { title: 'Viet Nam Dragon Tour', DisVnByStyle: chunkData });
    })
});

router.get('/contact-us', (req, res) => {
    res.render('contactUs', { title: 'Contact Us' })
});

router.get('/visa-services', (req, res) => {
    res.render('visaServices', { title: 'Visa Services' })
});

router.get('/traveller-s-faq', (req, res) => {
    res.render('FAQ', { title: 'FAQ question' });
});
router.get('/terms-conditions', function(req, res) {
    res.render('termsConditions', { title: 'terms condition' })
});

router.get('/ethnic-groups', function(req, res) {
    res.render("ethnicGroup");
})

router.get('/ethnic-groups/:ethnicParam', function(req, res) {
    if (req.params.ethnicParam === "h-mong-people") {
        HmongPeopleModel.HmongPeople.find({ nameEthnic: "H'MONG PEOPLE" }, function(err, data) {
            res.render("../views/ethnic_group/HmongPeople.hbs", { hmpp: data });
        })
    }

    if (req.params.ethnicParam === "cham-people") {
        HmongPeopleModel.ChamPeople.find({ nameEthnic: "CHAM PEOPLE" }, function(err, data) {
            res.render("../views/ethnic_group/chamPeople.hbs", { champp: data });
        })
    }
    if (req.params.ethnicParam === "ede-people") {
        HmongPeopleModel.EdePeople.find({ nameEthnic: "EDE PEOPLE" }, function(err, data) {
            res.render("../views/ethnic_group/edePeople.hbs", { edepp: data });
        })
    }
    if (req.params.ethnicParam === "kho-mer-people") {
        HmongPeopleModel.KhomerPeople.find({ nameEthnic: "KHO'MER PEOPLE" }, function(err, data) {
            res.render("../views/ethnic_group/khomerPeople.hbs", { khpp: data });
        })
    }
    if (req.params.ethnicParam === "muong-people") {
        HmongPeopleModel.MuongPeople.find({ nameEthnic: "MUONG PEOPLE" }, function(err, data) {
            res.render("../views/ethnic_group/muongPeople.hbs", { muongpp: data });
        })
    }
    if (req.params.ethnicParam === "thai-people") {
        HmongPeopleModel.MuongPeople.find({ nameEthnic: "THAI PEOPLE" }, function(err, data) {
            res.render("../views/ethnic_group/thaiPeople.hbs", { thaipp: data });
        })
    }
    if (req.params.ethnicParam === "kinh-people") {
        HmongPeopleModel.KinhPeople.find({ nameEthnic: "KINH PEOPLE" }, function(err, data) {
            res.render("../views/ethnic_group/KinhPeople.hbs", { kinhpp: data });
        })
    }
    if (req.params.ethnicParam === "dao-people") {
        HmongPeopleModel.DaoPeople.find({ nameEthnic: "DAO PEOPLE" }, function(err, data) {
            res.render("../views/ethnic_group/DaoPeople.hbs", { daopp: data });
        })
    }
    if (req.params.ethnicParam === "hoa-people") {
        HmongPeopleModel.HoaPeople.find({ nameEthnic: "HOA PEOPLE" }, function(err, data) {
            res.render("../views/ethnic_group/HoaPeople.hbs", { hoapp: data });
        })
    }
})



module.exports = router;