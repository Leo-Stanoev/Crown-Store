const GetProfile = (req, res, db) => {
    const{UserID} = req.params;
    db.select('*').from('Users').where({UserID})
    .then(user => {
        if (user.length){
            res.json(user[0])
        }
        else{
            res.status(400).json('Oops')
        }
    })
    .catch(err => res.status(400).json('Error'))
}

module.exports = {
    GetProfile
}