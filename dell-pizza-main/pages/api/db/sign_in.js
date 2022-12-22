import SQLite3 from 'sqlite3';


export default function signIn(req, res) {
    const db = new SQLite3.Database("db.sqlite", SQLite3.OPEN_READWRITE | SQLite3.OPEN_CREATE);
    const { email, password } = JSON.parse(req.body);
    db.each(`SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`, (error, row) => {
        if (error) return res.status(500).json(error);
        res.status(200).json({ user: row});
    });
}