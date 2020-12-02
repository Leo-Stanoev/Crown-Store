const CompleteTransaction = (req, res, db) => {
    const{TransactionID, PosterID, LoggedUserID, Rating} = req.body;
    var x = db('Ratings').where('RatedUserID', '=', PosterID).avg('Rating')

            db('Users')
            .returning('*')
            .where('UserID', '=', PosterID)
            .increment('UserCompletedTransactions', 1)

        .then(_Transactions => {
            return db('Users')
            .returning('*')
            .where('UserID', '=', LoggedUserID)
            .increment('UserCompletedTransactions', 1)
        })
        .then(_Transactions => {
            return db('Transactions')
            .returning('*')
            .where('TransactionID', '=', TransactionID)
            .update({
                Completed: "True"
            })
        .then(_Ratings => {
            return db('Ratings')
            .insert({
                TransactionID: TransactionID,
                RatedUserID: PosterID,
                Rating: Rating,
                RatingGiverID: LoggedUserID
            })
        })
        .then(_Ratings => {
            return db('Users')
            .where('UserID', '=', PosterID)
            .update({
                UserRating: x
            })
        })
        .then(_Return => {
            return db('Transactions')
            .returning('*')
        })
        })
        .then(transaction =>{
            res.json(transaction);
             })
}

module.exports = {
    CompleteTransaction
}