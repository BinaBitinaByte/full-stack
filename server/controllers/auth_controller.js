//when you first make a controller file, use module.exports so you dont forget

//bcrypt is only used in controller file, not in index.js, so this is the file to require it
const bcrypt = require('bcryptjs')
const signup = async (req, res) => {
    //how you run this signup sql: first get db in signup function
    const db = req.app.get("db")
    const { username, password } = req.body;
    //.hash is what creates the promise
    //expecting a string that we want to protect
    //if you have string, manually add salt. if num, automatically adds salt for you
    //salt makes sure every character is diff
    //we are also saving this in a var
    const hash = await bcrypt.hash(password, 12 );
    console.log(hash);
        //db.signup is going to create a promise & going to always return an arr
        const result = db.signup([username, hash])
        //adding a .catch
        .catch(err => {
            res.status(400).json({error: "Username already exists"})
        })
        req.session = { username: result.username }
        res.json(result);
//before we save username,pw we want to hash it so it doesnt show up in plain text
//for hashing, we need bcryptjs
//use postman to text backend if front end is not built
//in this case in postman, put POST, put it on "BODY" & raw & JSON(application/json)
//http://localhost:5050/auth/signup


}

module.exports = {
    signup:signup
}