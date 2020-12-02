const GetTransactionPage = (req, res, db) => {
    const{TransactionID} = req.params;
    db.select('*').from('Transactions')
    .join('Items','Transactions.ItemID', 'Items.ItemID')
    .join('Users','Transactions.UserID','Users.UserID')
    .where({TransactionID})
    .then(item => {
        if (item.length){
            res.json(item[0])
        }
        else{
            res.status(400).json('Nothin')
        }
    })
    .catch(err => res.status(400).json('Error'))
}

module.exports = {
    GetTransactionPage
}