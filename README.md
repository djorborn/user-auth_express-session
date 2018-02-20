# Express Session
User accounts and login with express session

### Back-end
1. Express for framework
2. Mongoose for mongodb Schema
3. connect-mongodb-session for session store
4. bcrypt for password hashing
5. pug for view engine

### Front-end
1. bulma for css styling
2. axios for ajax request

## Pseudocode
### main
1. localhost:port "browser"
2. if none exist, express-session makes a session that express can get to via "req.session"
3. check if session id belongs to any users
  * yes?: session.auth = true
  * no?: goto login session.auth = false
  
4. if auth is false goto login else finish request like goto home page

### register
1. New User can create account from /register
2. form with fields for at least username and password
3. when form submitted a post request is made that..
 * checks fields are not empty
 * creates new user object(document)
 * set new user's session key value to req.session.id
 * set req.session.auth = true
 * save new user to database
 * redirect to main / page
