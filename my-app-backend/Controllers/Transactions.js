const Transactions = (req, res, db) => {
   
    db.select('*').from('Transactions')
    .join('Items','Transactions.ItemID', 'Items.ItemID')
    .join('Users','Transactions.UserID','Users.UserID')
    .then(transactions => {
        if (transactions.length){
            res.json(transactions)
        }
        else{
            res.status(400).json('Empty')
        }
    })
    .catch(err => res.status(400).json('Error'))

}

module.exports = {
    Transactions
}