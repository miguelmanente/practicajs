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

    const sql = `SELECT
            p.id_profesor,
            p.apellido_nombre,
            GROUP_CONCAT(DISTINCT m.nombre_materia ORDER BY m.nombre_materia SEPARATOR ' ') AS materias,
            GROUP_CONCAT(DISTINCT c.nombre_curso ORDER BY c.nombre_curso SEPARATOR '||') AS cursos,
            GROUP_CONCAT(DISTINCT h.dia_semana,': ' SEPARATOR '||') AS dias,
            GROUP_CONCAT(DISTINCT h.hora_inicio,'   ' SEPARATOR '||') AS horas_inicio,
            GROUP_CONCAT(DISTINCT h.hora_fin,' --- ' SEPARATOR '||') AS horas_fin
            FROM profesor p
            LEFT JOIN profesor_materia pm ON pm.id_profesor = p.id_profesor
            LEFT JOIN materia m           ON m.id_materia   = pm.id_materia
            LEFT JOIN curso c             ON c.id_profesor  = p.id_profesor
            LEFT JOIN horario h           ON h.id_curso     = c.id_curso
            GROUP BY p.id_profesor, p.apellido_nombre
            ORDER BY p.apellido_nombre;
    `;
    /* const sql = `SELECT p.id_profesor, p.apellido_nombre, (SELECT GROUP_CONCAT(DISTINCT m.nombre_materia SEPARATOR ', ') FROM profesor_materia pm JOIN materia m ON pm.id_materia = m.id_materia WHERE pm.id_profesor = p.id_profesor), (SELECT GROUP_CONCAT(DISTINCT c.nombre_curso SEPARATOR ', ') FROM curso c WHERE c.id_profesor = p.id_profesor), (SELECT GROUP_CONCAT(DISTINCT CONCAT(h.dia_semana, ' ', h.hora_inicio, '-', h.hora_fin) SEPARATOR ', ') FROM curso c JOIN horario h ON c.id_curso = h.id_curso WHERE c.id_profesor = p.id_profesor) FROM profesor p ORDER BY  p.apellido_nombre;*/
    
    req.getConnection((err, conn) => {
    
        conn.query(sql, (err, results) => {
        
            const profesores = {};
            let r = { materias: null };
    
            results.forEach(r => {
                r.materias = r.materias ? r.materias.split(" "):[];
                r.cursos   = r.cursos   ? r.cursos.split("||")   : [];
                r.dias     = r.dias ? r.dias.split("||") : [];
                r.horas_inicio = r.horas_inicio ? r.horas_inicio.split("||") : [];
                r.horas_fin    = r.horas_fin ? r.horas_fin.split("||") : [];
          });
        
        // Convertir el objeto a un array para renderizarlo 
            res.render("profesores", { profesores: results});
        });
    });
};


//Exportamos el controlador
module.exports = controller;


