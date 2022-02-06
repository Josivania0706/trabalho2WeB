import Lista  from "../models/Lista"

class ListaController{
    
    async index(req, res){
        try{
            const data = await Lista.findAll({
                limit: 1000,
            })
            return res.json(data)
        }catch(e){
            console.log("Erro: ", e)
        }
    }
    //exibir lista por id
    async exibir(req,res){
        try{
            const id = parseInt(req.params.id)
            const list = await Lista.findByPk(id)
            const status = list ? 200:404
        return res.status(status).json(list)
        }catch(e){
            console.log("Erro: ", e)
        }
       
    }

    //cria uma item da lista
    async create(req,res){
        try{
            const {name} = req.body
            const novoItem = await Lista.create({
                name
            })
            
        return res.status(201).json(novoItem)
        }catch(e){
            console.log("Erro ao tentar  inserir item: : ", e)
        }
    }

    //atualiza uma empresa
    async update(req,res){
        try{
            const id = parseInt(req.params.id)
            const {name} = req.body
            const retornoStatus = id >= 0 ? 200:400

            const list = await Lista.findByPk(id)
            const NovoItem = await list.update({
                name
            })  
        return res.status(retornoStatus).json(NovoItem)
        }catch(e){
            console.log("Erro ao tentar atualizar item: : ", e)
        }
    }

    //Excluir um item da lista
    async Excluir(req,res){
        try{
            const id = parseInt(req.params.id)
        
            const list = await Lista.findByPk(id)
            const retornoStatus = id >= 0 ? 200:400
            
            list.destroy()

            
        return res.status(retornoStatus).json()
        }catch(e){
            console.log("Erro ao tentar deletar item: : ", e)
        }
    }
}

export default  new ListaController()