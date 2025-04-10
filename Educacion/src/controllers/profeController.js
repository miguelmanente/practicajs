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

controller.edicion  = (req, res) => {
    const { idprofesor } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM profesor WHERE idprofesor = ?', [idprofesor], (err, profes) => {
            res.render('edicionProfe', {
                data: profes[0]
            });
        });
    });
};

controller.actualizar = (req, res) => {
    const { idprofesor } = req.params;
    const profeActualizado = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE profesor set ? WHERE idprofesor = ?', [profeActualizado, idprofesor], (err, profes) => {
            res.redirect('/');
        });
    });
};

controller.borrar = (req, res) => {
    const { idprofesor } = req.params;

    req.getConnection((err, conn) => {
        conn.query('DELETE FROM profesor WHERE id = ?', [idprofesor], (err, rows) => {
            res.redirect('/');
        });  
    });
};

controller.editar = (req, res) => {
    const { idprofesor } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM profesor WHERE idprofesor = ?', [idprofesor], (err, profes) => {
            res.render('editarProfe', {
                data: profes[0]
            });
        });
    });
};

module.exports = controller;