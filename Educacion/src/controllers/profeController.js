const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM profesor', (err, profes) =>{
            if (err) {
                res.json(err);
            }
            res.render('profes', {
                data: profes});
        });
    });
};

controller.guardar =  (req, res) => {
    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query('INSERT INTO profesor set ?', [data], (err, profes) => {
            res.redirect('/');
        })
    })
};


controller.borrar = (req, res) => {
    const { idprofesor } = req.params;

    req.getConnection((err, conn) => {
        conn.query('DELETE FROM profesor WHERE idprofesor = ?', [idprofesor], (err, rows) => {
            res.redirect('/');
        });  
    });
};

module.exports = controller;