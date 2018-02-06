var express = require('express');
var router = express.Router();
// var mongoose = require('mongoose'); var db =
// mongoose.createConnection("mongodb://localhost:27017/champions");

/* users listing. */
router.get('/', function (req, res, next) {
    // res.send('respond with a resource');    db.model('champion').find({},
    // function(res, err){         console.log(res);         res.json(res);    });
    // var collection = db.collection('champions'); collection     .find() .lean()
    //   .exec(function (err, champions) {         return
    // res.json(JSON.stringify(champions));     }
    res.json([
        {
            id: 18,
            key: "Tristana",
            name: "Tristana",
            title: "the Yordle Gunner",
            position: ["bottom"],
            roles: ["physical","ranged","carry"],
            tags: [""],
            hasHardCC: false,
            aoeCC: true,
            __v: 0
        }, {
            id: 24,
            key: "Jax",
            name: "Jax",
            title: "Grandmaster at Arms",
            position: ["top"],
            roles: ["physical","bruiser"],
            tags: [""],
            hasHardCC: true,
            aoeCC: true,
            __v: 0
        }, {
            id: 37,
            key: "Sona",
            name: "Sona",
            title: "Maven of the Strings",
            position: ["bottom"],
            roles: ["support","healer","magic"],
            tags: [""],
            hasHardCC: true,
            aoeCC: true,
            __v: 0
        }, {
            id: 110,
            key: "Varus",
            name: "Varus",
            title: "the Arrow of Retribution",
            position: ["bottom"],
            roles: ["physical","ranged","carry"],
            tags: [""],
            hasHardCC: true,
            aoeCC: true,
            __v: 0
        }, {
            id: 114,
            key: "Fiora",
            name: "Fiora",
            title: "the Grand Duelist",
            position: ["top"],
            roles: ["physical","bruiser"],
            tags: [""],
            hasHardCC: false,
            aoeCC: false,
            __v: 0
        }, {
            id: 27,
            key: "Singed",
            name: "Singed",
            title: "the Mad Chemist",
            position: ["top"],
            roles: ["tank","magic"],
            tags: [""],
            hasHardCC: false,
            aoeCC: false,
            __v: 0
        }, {
            id: 223,
            key: "TahmKench",
            name: "Tahm Kench",
            title: "the River King",
            position: ["bottom"],
            roles: ["tank","support"],
            tags: [""],
            hasHardCC: true,
            aoeCC: false,
            __v: 0
        }, {
            id: 7,
            key: "Leblanc",
            name: "LeBlanc",
            title: "the Deceiver",
            position: ["middle"],
            roles: ["magic","assassin"],
            tags: [""],
            hasHardCC: true,
            aoeCC: false,
            __v: 0
        }, {
            id: 43,
            key: "Karma",
            name: "Karma",
            title: "the Enlightened One",
            position: ["bottom"],
            roles: ["support","magic"],
            tags: [""],
            hasHardCC: true,
            aoeCC: false,
            __v: 0
        }, {
            id: 68,
            key: "Rumble",
            name: "Rumble",
            title: "the Mechanized Menace",
            position: ["top"],
            roles: ["magic"],
            tags: [""],
            hasHardCC: false,
            aoeCC: true,
            __v: 0
        }, {
            id: 77,
            key: "Udyr",
            name: "Udyr",
            title: "the Spirit Walker",
            position: ["jungle","top"],
            roles: ["tank","bruiser","physical"],
            tags: [""],
            hasHardCC: false,
            aoeCC: false,
            __v: 0
        }, {
            id: 412,
            key: "Thresh",
            name: "Thresh",
            title: "the Chain Warden",
            position: ["bottom"],
            roles: ["support"],
            tags: [""],
            hasHardCC: true,
            aoeCC: true,
            __v: 0
        }, {
            id: 83,
            key: "Yorick",
            name: "Yorick",
            title: "Shepherd of Souls",
            position: ["top"],
            roles: ["bruiser","physical"],
            tags: [""],
            hasHardCC: false,
            aoeCC: false,
            __v: 0
        }, {
            id: 202,
            key: "Jhin",
            name: "Jhin",
            title: "the Virtuoso",
            position: ["bottom"],
            roles: ["physical","carry","ranged"],
            tags: [""],
            hasHardCC: true,
            aoeCC: false,
            __v: 0
        }, {
            id: 38,
            key: "Kassadin",
            name: "Kassadin",
            title: "the Void Walker",
            position: ["middle"],
            roles: ["magic","assassin"],
            tags: [""],
            hasHardCC: true,
            aoeCC: true,
            __v: 0
        }, {
            id: 141,
            key: "Kayn",
            name: "Kayn",
            title: "the Shadow Reaper",
            position: ["jungle","top"],
            roles: ["bruiser","physical","carry","tank"],
            tags: [""],
            hasHardCC: true,
            aoeCC: true,
            __v: 0
        }, {
            id: 516,
            key: "Ornn",
            name: "Ornn",
            title: "The Fire below the Mountain",
            position: ["top","bottom"],
            roles: ["tank","bruiser","support"],
            tags: [""],
            hasHardCC: true,
            aoeCC: true,
            __v: 0
        }, {
            id: 21,
            key: "MissFortune",
            name: "Miss Fortune",
            title: "the Bounty Hunter",
            position: ["bottom"],
            roles: ["carry","physical","ranged"],
            tags: [""],
            hasHardCC: false,
            aoeCC: true,
            __v: 0
        }, {
            id: 10,
            key: "Kayle",
            name: "Kayle",
            title: "The Judicator",
            position: ["top","jungle"],
            roles: ["magic","bruiser"],
            tags: [""],
            hasHardCC: false,
            aoeCC: false,
            __v: 0
        }, {
            id: 64,
            key: "LeeSin",
            name: "Lee Sin",
            title: "the Blind Monk",
            position: ["jungle"],
            roles: ["bruiser","physical","assassin"],
            tags: [""],
            hasHardCC: false,
            aoeCC: true,
            __v: 0
        }, {
            id: 157,
            key: "Yasuo",
            name: "Yasuo",
            title: "the Unforgiven",
            position: ["middle","top"],
            roles: ["physical","carry","melee"],
            tags: [""],
            hasHardCC: true,
            aoeCC: true,
            __v: 0
        }, {
            id: 119,
            key: "Draven",
            name: "Draven",
            title: "the Glorious Executioner",
            position: ["bottom"],
            roles: ["ranged","carry","physcial"],
            tags: [""],
            hasHardCC: false,
            aoeCC: true,
            __v: 0
        }, {
            id: 58,
            key: "Renekton",
            name: "Renekton",
            title: "the Butcher of the Sands",
            position: ["top"],
            roles: ["bruiser","tank","physical"],
            tags: [""],
            hasHardCC: true,
            aoeCC: false,
            __v: 0
        }, {
            id: 96,
            key: "KogMaw",
            name: "Kog'Maw",
            title: "the Mouth of the Abyss",
            position: ["bottom"],
            roles: ["magic","physical","carry","ranged"],
            tags: [""],
            hasHardCC: false,
            aoeCC: true,
            __v: 0
        }, {
            id: 120,
            key: "Hecarim",
            name: "Hecarim",
            title: "the Shadow of War",
            position: ["jungle"],
            roles: ["tank","bruiser","physical"],
            tags: [""],
            hasHardCC: true,
            aoeCC: true,
            __v: 0
        }, {
            id: 15,
            key: "Sivir",
            name: "Sivir",
            title: "the Battle Mistress",
            position: ["bottom"],
            roles: ["ranged","carry","physical"],
            tags: [""],
            hasHardCC: false,
            aoeCC: false,
            __v: 0
        }, {
            id: 127,
            key: "Lissandra",
            name: "Lissandra",
            title: "the Ice Witch",
            position: ["middle"],
            roles: ["magic","carry"],
            tags: [""],
            hasHardCC: true,
            aoeCC: true,
            __v: 0
        }, {
            id: 9,
            key: "Fiddlesticks",
            name: "Fiddlesticks",
            title: "the Harbinger of Doom",
            position: ["middle","jungle"],
            roles: ["magic","carry"],
            tags: [""],
            hasHardCC: true,
            aoeCC: false,
            __v: 0
        }, {
            id: 105,
            key: "Fizz",
            name: "Fizz",
            title: "the Tidal Trickster",
            position: ["middle"],
            roles: ["assassin","magic"],
            tags: [""],
            hasHardCC: true,
            aoeCC: true,
            __v: 0
        }, {
            id: 222,
            key: "Jinx",
            name: "Jinx",
            title: "the Loose Cannon",
            position: ["bottom"],
            roles: ["physical","ranged","carry"],
            tags: [""],
            hasHardCC: true,
            aoeCC: false,
            __v: 0
        }, {
            id: 80,
            key: "Pantheon",
            name: "Pantheon",
            title: "the Artisan of War",
            position: ["top","jungle"],
            roles: ["bruiser","assassin","physical"],
            tags: [""],
            hasHardCC: true,
            aoeCC: true,
            __v: 0
        }, {
            id: 35,
            key: "Shaco",
            name: "Shaco",
            title: "the Demon Jester",
            position: ["jungle"],
            roles: ["assassin","physical"],
            tags: [""],
            hasHardCC: false,
            aoeCC: false,
            __v: 0
        }, {
            id: 81,
            key: "Ezreal",
            name: "Ezreal",
            title: "the Prodigal Explorer",
            position: ["bottom"],
            roles: ["physical", "ranged", "carry"],
            tags: [""],
            hasHardCC: false,
            aoeCC: false,
            __v: 0
        }, {
            id: 91,
            key: "Talon",
            name: "Talon",
            title: "the Blade's Shadow",
            position: ["middle"],
            roles: ["physical","assassin"],
            tags: [""],
            hasHardCC: false,
            aoeCC: false,
            __v: 0
        }, {
            id: 6,
            key: "Urgot",
            name: "Urgot",
            title: "the Dreadnought",
            position: ["top"],
            roles: ["bruiser","tank","physical"],
            tags: [""],
            hasHardCC: true,
            aoeCC: false,
            __v: 0
        }, {
            id: 57,
            key: "Maokai",
            name: "Maokai",
            title: "the Twisted Treant",
            position: ["top"],
            roles: ["magic","tank","bruiser"],
            tags: [""],
            hasHardCC: true,
            aoeCC: true,
            __v: 0
        }, {
            id: 268,
            key: "Azir",
            name: "Azir",
            title: "the Emperor of the Sands",
            position: ["middle"],
            roles: ["carry","magic"],
            tags: [""],
            hasHardCC: false,
            aoeCC: true,
            __v: 0
        }, {
            id: 17,
            key: "Teemo",
            name: "Teemo",
            title: "the Swift Scout",
            position: ["middle","top","support"],
            roles: ["cancer","magic","physical","bruiser"],
            tags: [""],
            hasHardCC: false,
            aoeCC: true,
            __v: 0
        }, {
            id: 41,
            key: "Gangplank",
            name: "Gangplank",
            title: "the Saltwater Scourge",
            position: ["top"],
            roles: ["bruiser","physical","carry"],
            tags: [""],
            hasHardCC: false,
            aoeCC: true,
            __v: 0
        }, {
            id: 1,
            key: "Annie",
            name: "Annie",
            title: "the Dark Child",
            position: ["middle"],
            roles: ["magic","carry"],
            tags: [""],
            hasHardCC: true,
            aoeCC: true,
            __v: 0
        }, {
            id: 3,
            key: "Galio",
            name: "Galio",
            title: "the Colossus",
            position: ["middle","support"],
            roles: ["tank","magic","bruiser"],
            tags: [""],
            hasHardCC: true,
            aoeCC: true,
            __v: 0
        }, {
            id: 78,
            key: "Poppy",
            name: "Poppy",
            title: "Keeper of the Hammer",
            position: ["top"],
            roles: ["bruiser","physical","tank"],
            tags: [""],
            hasHardCC: true,
            aoeCC: true,
            __v: 0
        }, {
            id: 82,
            key: "Mordekaiser",
            name: "Mordekaiser",
            title: "the Iron Revenant",
            position: ["top","middle"],
            roles: ["magic","bruiser"],
            tags: [""],
            hasHardCC: false,
            aoeCC: false,
            __v: 0
        }, {
            id: 31,
            key: "Chogath",
            name: "Cho'Gath",
            title: "the Terror of the Void",
            position: ["top","middle"],
            roles: ["bruiser","tank","magic"],
            tags: [""],
            hasHardCC: false,
            aoeCC: true,
            __v: 0
        }, {
            id: 92,
            key: "Riven",
            name: "Riven",
            title: "the Exile",
            position: ["top"],
            roles: ["bruiser","assassin","physical"],
            tags: [""],
            hasHardCC: true,
            aoeCC: true,
            __v: 0
        }, {
            id: 150,
            key: "Gnar",
            name: "Gnar",
            title: "the Missing Link",
            position: ["top"],
            roles: ["physical","bruiser","tank"],
            tags: [""],
            hasHardCC: true,
            aoeCC: true,
            __v: 0
        }, {
            id: 5,
            key: "XinZhao",
            name: "Xin Zhao",
            title: "the Seneschal of Demacia",
            position: ["jungle","top"],
            roles: ["physical","bruiser"],
            tags: [""],
            hasHardCC: false,
            aoeCC: false,
            __v: 0
        }, {
            id: 420,
            key: "Illaoi",
            name: "Illaoi",
            title: "the Kraken Priestess",
            position: ["top"],
            roles: ["physical","bruiser"],
            tags: [""],
            hasHardCC: false,
            aoeCC: false,
            __v: 0
        }, {
            id: 85,
            key: "Kennen",
            name: "Kennen",
            title: "the Heart of the Tempest",
            position: ["top","middle"],
            roles: ["magic","carry"],
            tags: [""],
            hasHardCC: true,
            aoeCC: true,
            __v: 0
        }, {
            id: 266,
            key: "Aatrox",
            name: "Aatrox",
            title: "the Darkin Blade",
            position: ["top"],
            roles: ["bruiser","physical"],
            tags: [""],
            hasHardCC: false,
            aoeCC: true,
            __v: 0
        }
    ])

});

module.exports = router;
