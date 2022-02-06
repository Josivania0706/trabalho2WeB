import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'
import Header from './Components/Header/index'
import ListaProdutos from './Components/ListaProdutos/index'

const Aplicacao = () => (
	<div className='aplicacao'>
		<Header/>
		<ListaProdutos/>
	</div>
)

ReactDOM.render(<Aplicacao/>, document.getElementById('root'))