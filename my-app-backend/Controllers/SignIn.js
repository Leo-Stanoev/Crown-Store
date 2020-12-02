const SignIn = (bcrypt,db) => (req, res) => {
    const{UserEmail,Password} = req.body;
    if(!UserEmail || !Password){
        return res.status(400).json("Enter something please");
    }
    db.select('UserEmail', 'PasswordHash').from('HashedPasswords')
      .where('UserEmail', '=', UserEmail)
      .then(data => {
        const Valid = bcrypt.compareSync(Password, data[0].PasswordHash);
        if(Valid) {
            return db.select('*').from('Users')
            .where('UserEmail', '=', UserEmail)
            .then(user => {
                res.json(user[0])
            })
            .catch(err => res.status(400).json('There was an issue logging in'))
        } else {
            res.status(400).json("Username or password are wrong")
        }
      })
      .catch(err => res.status(400).json("Username or password are wrong"))
}

module.exports = {
    SignIn: SignIn
}