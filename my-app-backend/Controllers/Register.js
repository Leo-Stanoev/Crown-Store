const Register = (req, res, db, bcrypt) => {
    const{UserName,UserEmail,Password, UserServer, UserFaction} = req.body;
    if(!UserName || !UserEmail || !Password || !UserServer || !UserFaction){
        return res.status(400).json("naah")
    }
    const hash = bcrypt.hashSync(Password);
    db.transaction(trx => {
        trx.insert({
            PasswordHash:hash,
            UserEmail:UserEmail
        })
        .into('HashedPasswords')
        .returning('UserEmail')
        .then(UserEmail => {
            return trx('Users')
            .returning('*')
            .insert({
                UserName: UserName,
                UserEmail: UserEmail[0],
                UserJoinDate: new Date(),
                UserServer: UserServer,
                UserFaction: UserFaction,
                UserRating: 0,
                UserCompletedTransactions: 0
            })
            .then(user =>{
                res.json(user[0]);
            })
        })
        .then(trx.commit)
        .catch(trx.rollback)
    })
    .catch(err => res.status(400).json('Problem with registering'))
}

module.exports = {
    Register: Register
}