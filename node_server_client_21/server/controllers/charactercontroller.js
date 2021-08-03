let express = require('express');
let router = express.Router();
let validateSession = require('../middleware/validate-session');
const Character = require('../db').import('../models/character');

router.get('/character', validateSession, (req,res) =>
{
    res.send('Hey! This is a practice route!')
});

/* ***************
~~ Character Sheet Create ~~
******************/ 
router.post('/create', validateSession, (req, res) => {
    const Character = {
        name: req.body.character.name,
        race: req.body.character.race,
        alignment: req.body.character.alignment,
        owner: req.user.id
    }
    Character.create(character)
    .then(character => res.status(200).json(character))
    .catch(err => res.status(500).json({error: err}))
});

router.get('/', (req, res) => {
    Character.findAll()
    .then(characters => res.status(200).json(characters))
    .catch(err => res.status(500).json({error: err}))
});

router.get("/mine", validateSession, (req, res) => {
    let userid = req.user.id
    Character.findAll({
        where: {owner: userid}
    })
    .then(characters => res.status(200).json(characters))
    .catch(err => res.status(500).json({error :err}))
});

router.get('/:title', function (req, res) {
    let title = req.params.title;

    Character.findAll({
        where: {title: title}
    })
    .then(characters => res.status(200).json(characters))
    .catch(err => res.status(500).json ( {error: err}))
})


/* Update */

router.put("/update/:entryId", validateSession, function (req, res) {
    const updateCharacter = {
        name: req.body.character.name,
        race: req.body.character.race,
        alignment: req.body.character.alignment,
    };

    const query = {where: {id: req.params.entryId, owner: req.user.id}};

    Character.update(updateCharacter, query)
    .then((characters) => res.status(200).json(characters))
    .catch((err) => res.status(500).json({error: err}));
});

/*Delete*/

router.delete("/delete/id", validateSession, function(req, res) {
    const query = {where: {id: req.params.id, owner: req.user.id}};

    Character.destroy(query)
    .then(() => res.status(200).json({message: "Character Removed"}))
    .catch((err) => res.status(500).json({error: err}));
})


module.exports = router;