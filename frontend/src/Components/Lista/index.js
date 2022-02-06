import React, {useState, useEffect, useRef} from 'react'

function Lista(props) {
	const [input, setInput] = useState(props.att ? props.att.value : '')

	const inputRef = useRef(null)

	useEffect(() => {
		inputRef.current.focus()
	})

	const handleChange = e => {
		setInput(e.target.value)
	}

	const handleSubmit = e => {
		e.preventDefault();
		props.onSubmit({
			id:Math.floor(Math.random() * 1000),
			text: input
		})
		setInput('')
	}

	return (
		<form className='lista' onSubmit={handleSubmit}>
			{props.att ? ( 
				<>
					<input 
						type='text'
						placeholder='Atualize o produto...' 
						value={input} 
						name='text'
						className='produto-lista edit'
						onChange={handleChange}
						ref={inputRef}
					/>
					<button className='botao edit'>Atualizar</button>
				</>
			) : (
				<>
					<input 
						type='text'
						placeholder='Adicione um novo produto...' 
						value={input} 
						name='text'
						className='produto-lista'
						onChange={handleChange}
						ref={inputRef}
					/>
					<button className='botao'>Adicionar</button>
				</>
			)}			
		</form>
	)
}

export default Lista