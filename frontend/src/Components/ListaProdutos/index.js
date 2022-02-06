import React, {useState} from 'react'
import Lista from '../Lista'
import Produtos from '../Produtos'

function ListaProdutos() {
	
	const [produtos, setProdutos] = useState([])

	const adicionaProduto = produto => {
		if(!produto.text || /^\s*$/.test(produto.text))
		{
			return;
		}

		const newProdutos = [produto, ...produtos]
		setProdutos(newProdutos)
	}

	const atualizeProduto = (produtoID, novoProduto) => {
		if(!novoProduto.text || /^\s*$/.test(novoProduto.text))
		{
			return;
		}
		setProdutos(prev => prev.map(item => (item.id === produtoID ? novoProduto : item)))
	}

	const removaProduto = id => {
		const removaArr = [...produtos].filter(produto => produto.id !== id)
		setProdutos(removaArr)
	}
	
	const completeProduto = id => {
		let updateProdutos = produtos.map(produto => {
			if(produto.id === id)
			{
				produto.isComplete = !produto.isComplete
			}
			return produto
		})
		setProdutos(updateProdutos)
	}

	return (
		<div>
			<h1>Entre com seu produtos!</h1>
			<Lista onSubmit={adicionaProduto}/>
			<Produtos 
				produtos={produtos} 
				completeProduto={completeProduto} 
				removaProduto={removaProduto}
				atualizeProduto={atualizeProduto}
			/>
		</div>
	)
}

export default ListaProdutos