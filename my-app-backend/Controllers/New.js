const New = (req, res, db) => {
    const{UserID, TransactionType, ItemGoldCost, ItemID} = req.body;
    
    db.transaction(trx => {
        trx.insert({
            UserID: parseInt(UserID),
            TransactionType: TransactionType,
            CreationDate: new Date(),
            CompletionDate: new Date(),
            ItemGoldCost: parseInt(ItemGoldCost),
            Completed: 'false',
            MatchedOrderID: 0,
            ItemID: parseInt(ItemID),
        })
        .into('Transactions')
        .returning('TransactionID')
        .then(_TransactionID => {
            return trx('Transactions')
            .returning('*')
            .then(transaction =>{
                res.json(transaction);
            })
        })
        .then(trx.commit)
        .catch(trx.rollback)
    })
    .catch(err => res.status(400).json(err + 'Problem with creating'))
}
module.exports = {
    New: New
}