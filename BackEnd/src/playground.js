import "./database"

import Lista from "./app/models/Lista"

class Playground{
    static async play(){
       
        try{
            const lista = await Lista.create({
                name: "Recheado"
            }) 
        }catch(e){
           console.log('Erro ao criar: '+e)
        }
    }
}
Playground.play()

/*

 //listar
        //const lista = await Lista.findAll({
        //    attributes: ["id", "name"]
        //});
   //atualizar
   const empresa = await Empresa.findByPk(5)
            console.log("Antes: ",JSON.stringify(empresa, null, 2))

            const novaEmpresa = await empresa.update({
                status: "ARCHIVED"
            })
            console.log("Depois: ",JSON.stringify(novaEmpresa, null, 2))

//excluir
 const empresa = await Empresa.findByPk(7)
            empresa.destroy()*/