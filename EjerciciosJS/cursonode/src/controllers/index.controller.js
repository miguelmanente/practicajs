const controller = {}
const title = 'INDEX DESDE EL SERVIDOR CON PUG Y DESDE UNA VARIABLE'

controller.index =  (req, res)=>{
    //renderizado de contenido dinámico en el cliente(navegador)
    res.render('index',{title})
}

module.exports = controller