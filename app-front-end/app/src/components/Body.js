import React, { Component } from 'react'
import axios from 'axios'

const baseConnection = axios.create({
	baseURL: 'http://localhost:5000',
})

class Body extends Component {
	state = {
		title: '',
		body: '', // resposta do request
		message: '', // envio para o request
	}

	handleSubmit = (event) => {
		alert(`Mensagem enviada: ${this.state.message}`)
        event.preventDefault()
        
        baseConnection.post('/terceiroEndpoint/'+ this.state.message).then((response) => {
            console.log(response.data)

            this.setState({
				title: response.data.title,
				body: response.data.message,
			})
    })

	}

	primeiroEndpoint = async () => {
		const response = await baseConnection.get('/primeiroEndpoint')

		console.log(response.data)

		this.setState({
			title: response.data.title,
			body: response.data.message,
		})
	}

	segundoEndpoint = async () => {
		const response = await baseConnection.get('/segundoEndpoint')

		console.log(response.data)

		this.setState({
			title: response.data.title,
			body: response.data.message,
		})
	}

	//a função render deve ter dentro dela apenas componentes que renderizam.
	//metodos da classe como handleSubmit acima devem ficar fora
	render() {
		return (
			<div>
				<header className="App-header">
					<button onClick={this.primeiroEndpoint}>
						PRIMEIRO ENDPOINT
					</button>
					<button onClick={this.segundoEndpoint}>
						SEGUNDO ENDPOINT
					</button>
				</header>

				<form onSubmit={this.handleSubmit}>
					<p>
						Insira a mensagem que deseja enviar para o terceiro
						endpoint:
					</p>
					<input
						type="text"
						value={this.state.message}
						/* isso faz o elemento p mais abaixo atualizar conforme
                        se digita no form, mas esse formulario na vdd não envia nada */
						onChange={(e) =>
							this.setState({ message: e.target.value })
						}
					/>
					<input type="submit" value="Enviar" />
				</form>

				<article>
					<h1>{this.state.title}</h1>
					<p>{this.state.body}</p>
				</article>
			</div>
		)
	}
}

export default Body