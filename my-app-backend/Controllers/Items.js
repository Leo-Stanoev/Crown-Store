const Items = (req, res, db) => {
   
    db.select('*').from('Items')
    .then(item => {
        if (item.length){
            res.json(item)
        }
        else{
            res.status(400).json('It works, but there is nothing Here')
        }
    })
    .catch(err => res.status(400).json('Error'))

}

module.exports = {
    Items
}