const pool = require("../../config/database");

module.exports = {
    create: (data, cb) => {
        pool.query(`insert into registration(firstName, lastName, gender, email, password, number) values(?, ?, ?, ?, ?, ?)`,
            [
                data.first_name,
                data.last_name,
                data.gender,
                data.email,
                data.password,
                data.number,
            ],
            (error, results, fields) => {
                if (error) {
                    return cb(error);
                }
                return cb(null, results);
            }
            );
    },
    getUsers: callBack => {
        pool.query(`select * from registration`,
        [],
        (error, results, fields) => {
            if (error) {
                return callBack(error);
            }
            return callBack(null, results);
        }
        );
    },
    getUserById: (id, callBack) => {
        pool.query(
            `select * from registration where id = ?`,
            [id],
            (error, results, fields) => {
                if(error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    updateUser: (data, callBack) => {
        pool.query(
            `update registration set firstName = ?, lastName = ?, gender = ?, email = ?, password = ?, number = ? where id = ?`,
            [
                data.first_name,
                data.last_name,
                data.gender,
                data.email,
                data.password,
                data.number,
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },
    deleteUser: (data, callBack) => {
        pool.query(
            `delete from registration where id = ?`,
            [data.id],
            (error, results, fields) => {
                if(error) {
                    return callBack(error)
                }
                return callBack(null, results[0]);
            }
        );
    },
    getUserByEmail: (email, callBack) => {
        pool.query(
            `select * from registration where email = ?`,
            [email],
            (error, results, fields) => {
                if(error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    }
};