function index(req,res) {

    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM tasks', (err, tasks) =>{
            if(err){
                res.json(err);
            }
            res.render ('tasks/index', { tasks })
            console.log(tasks)
        })
    });
}

function create(req,res) {
    res.render ('tasks/create')
}

function home(req,res) {
    res.render ('home')
}

function store(req,res) {
    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query('INSERT INTO tasks SET ?', [data], (err, rows) => {
            res.redirect('/tasks');
            console.log(rows)
        });
    });
}

function eliminar(req,res) {
    const id = req.body.id;
    req.getConnection((err, conn) =>{
        conn.query('DELETE FROM tasks WHERE id = ?', [id], (err, rows) => {
            res.redirect('/tasks');
        });
    });
}

function editar(req, res) {
    const id = req.params.id;

    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM tasks WHERE id = ?', [id], (err, tasks) =>{
            if(err){
                res.json(err);
            }
            res.render ('tasks/editar', { tasks })
            console.log(tasks)
        })
    });
}

function actualizar(req, res) {
    const id = req.params.id;
    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query('UPDATE tasks SET ? WHERE id = ?', [data, id], (err, rows) =>{
            res.redirect('/tasks')
        } )
    })
}

function ver(req, res) {
    const id = req.params.id;

    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM tasks WHERE id = ?', [id], (err, tasks) =>{
            if(err){
                res.json(err);
            }
            res.render ('tasks/ver', { tasks })
            console.log(tasks)
        })
    });
}


module.exports = {
    index: index,
    create: create,
    home: home,
    store: store,
    eliminar: eliminar,
    editar: editar,
    actualizar: actualizar,
    ver: ver,
}