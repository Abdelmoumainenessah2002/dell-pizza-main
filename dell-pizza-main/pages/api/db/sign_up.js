import SQLite3 from 'sqlite3';


export default async function signUp(req, res) {
    const db = new SQLite3.Database("db.sqlite", SQLite3.OPEN_READWRITE | SQLite3.OPEN_CREATE);
    console.log(typeof req.body);
    db.exec(`INSERT INTO users(email, password, first_name, last_name, mobile)VALUES('${req.body.email}', '${req.body.password}', '${req.body.first_name}', '${req.body.last_name}', '${req.body.mobile}')`, () => {
        res.redirect('/', 200);
    });
}