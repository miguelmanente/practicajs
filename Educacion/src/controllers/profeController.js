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
            res.redirect('/list');
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
            res.redirect('/list');
        });
    });
};

controller.borrar = (req, res) => {
    const { idprofesor } = req.params;

    req.getConnection((err, conn) => {
        conn.query('DELETE FROM profesor WHERE idprofesor = ?', [idprofesor], (err, rows) => {
            res.redirect('/list');
        });  
    });
};

// Ruta para buscar profeosres por apellido.

controller.busca = (req, res) => {
  res.render('busqueda');
};

controller.busca1 = (req, res) => {
  const termino = req.body.apellido;
  const query = "SELECT * FROM profesor WHERE apellido LIKE ?";
  req.getConnection((err, conn) =>{
    conn.query(query, [`%${termino}%`], (err, resultados) => {
        if (err) throw err;
        res.render('resultados', { profesor: resultados });
    });
});
};

controller.inicio = (req, res) => {
    res.render('inicioApp');
};

module.exports = controller;