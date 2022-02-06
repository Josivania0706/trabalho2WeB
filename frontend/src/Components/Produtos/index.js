import React, {useState} from 'react'
import Lista from '../Lista'
import {RiCloseCircleLine} from 'react-icons/ri'
import {FiEdit} from 'react-icons/fi'

function Produtos({produtos, completeProduto, removaProduto, atualizeProduto}) {
	
	const [att, setAtt] = useState({
		id: null,
		valor: ''
	})

	const submitAtualiza = value => {
		atualizeProduto(att.id, value)
		setAtt({
			id: null,
			value: ''
		})
	}

	if(att.id)
	{
		return <Lista att={att} onSubmit={submitAtualiza}/>
	}

	return produtos.map((produto, index) => (
		//Verificar se o produto está completo ou não
		<div className={produto.isComplete ? 'produto-row complete' : 'produto-row'} key={index}>

			<div key={produto.id} onClick={() => completeProduto(produto.id)}>
				{produto.text}
			</div>

			<div className="icones">
				<RiCloseCircleLine
					onClick={() => removaProduto(produto.id)}
					className="delete-icone"
				/>
				<FiEdit
					onClick={() => setAtt({id: produto.id, valor: produto.text})}
					className="atualiza-icone"
				/>
			</div>

		</div>
	))
}

export default Produtos