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
    const { id_profesor } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM profesor WHERE id_profesor = ?', [id_profesor], (err, profes) => {
            res.render('edicionProfe', {
                data: profes[0]
            });
        });
    });
};

controller.actualizar = (req, res) => {
    const { id_profesor } = req.params;
    const profeActualizado = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE profesor set ? WHERE id_profesor = ?', [profeActualizado, id_profesor], (err, profes) => {
            res.redirect('/list');
        });
    });
};

controller.borrar = (req, res) => {
    const { id_profesor } = req.params;

    req.getConnection((err, conn) => {
        conn.query('DELETE FROM profesor WHERE id_profesor = ?', [id_profesor], (err, rows) => {
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
  const query = "SELECT * FROM profesor WHERE apellido_nombre LIKE ?";
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

//Modulo para profesor materias

controller.profmat = (req, res) => {
  const { id_profesor } = req.params;
  const sql = `
    SELECT id_profesor, apellido_nombre,
           id_materia, nombre_materia
    FROM profesor 
    LEFT JOIN materia ON id_profesor
    ORDER BY id_profesor;
  `;

  req.getConnection(sql, [id_profesor], (err, conn) => {
    conn.query(sql, (err, results) => {
      if (err) throw err;
        res.render('profMateria', { profesor: results});
    });
  });
};

module.exports = controller;


// Agrupar resultados por profesor
    /* const profesores = [];
    const map = {};

    results.forEach(row => {
      if (!map[row.id_profesor]) {
        map[row.id_profesor] = {
          id: row.id_profesor,
          nombre: row.apellido_nombre,
          materias: []
        };
        profesores.push(map[row.id_profesor]);
      }
      if (row.id_materia) {
        map[row.id_profesor].materias.push({
          id: row.id_materia,
          nombre: row.materia_nombre
        });
      }
    }); */