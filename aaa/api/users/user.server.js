const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
      pool.query(
        `insert into registration1 (nom, prenom, sex, email, password, number) 
                  values(?,?,?,?,?,?)`,
        [
          data.nom,
          data.prenom,
          data.sex,
          data.email,
          data.password,
          data.number
        ],
        (error, results, fields) => {
          if (error) {
            return callBack(error);
          }
          return callBack(null, results);
        }
      );
    },
    getUsers: callBack => {
      pool.query(
        `select id,nom,prenom,sex,email,number from registration1`,
        [],
        (error, results, fields) => {
          if (error) {
            return callBack(error);
          }
          return callBack(null, results);
        }
      );
    },
    getUserByUserId: (id, callBack) => {
      pool.query(
        `select id,nom,prenom,sex,email,number from registration1 where id = ?`,
        [id],
        (error, results, fields) => {
          if (error) {
            return callBack(error);
          }
          return callBack(null, results[0]);
        }
      );
    },
    getUserByUserEmail: (email, callBack) => {
      pool.query(
        `select * from registration1 where email = ?`,
        [email],
        (error, results, fields) => {
          if (error) {
            return callBack(error);
          }
          return callBack(null, results[0]);
        }
      );
  }
};