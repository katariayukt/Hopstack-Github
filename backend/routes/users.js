const router = require('express').Router();
let User = require('../models/user.model');

router.post('/stored', (req,res)=>{
    console.log(req.body);

    const newUser = new User({
        _id : req.body.id,
        username : req.body.username,
        bio : req.body.bio,
        url : req.body.url,
        repos_no : req.body.repos_no,
        repos_url : req.body.repos_url
    })

    newUser.save()
        .then(()=>res.json('User added !!'))
        .catch(err => res.status(400).json('Error: '+err));
});

router.get('/read', async (req,res) => {
    User.findOne(req.query, (err, result) => {
        if(err){
            console.log(err);
        }
        res.send(result);
    })
    console.log(req.query.username);
})

module.exports = router;