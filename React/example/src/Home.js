import axios from 'axios'
import { Component } from 'react'
import Button from './Button/Button'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      counter: 1,
      loading: false,
      users: [],
    }
  }

  getUsers() {
    this.setState({ loading: true })
    setTimeout(() => {
      this.setState({ loading: false })
    }, 3000)
    axios.get('https://jsonplaceholder.typicode.com/users').then((data) =>
      this.setState({
        users: data.data.splice(0, 3),
      })
    )
  }

  multiplicarPor2() {
    this.setState({ counter: this.state.counter * 2 })
  }

  dividirPor2() {
    this.setState({ counter: this.state.counter / 2 })
  }

  sumar10() {
    this.setState({ counter: this.state.counter + 10 })
  }

  restar10() {
    this.setState({ counter: this.state.counter - 10 })
  }
  render() {
    return (
      <>
        <h2>Contador: {this.state.counter}</h2>
        <Button functionWhenClick={() => this.multiplicarPor2()}>
          Multiplicar por 2
        </Button>
        <Button functionWhenClick={() => this.dividirPor2()}>
          Dividir por 2
        </Button>
        <Button functionWhenClick={() => this.sumar10()}>Sumar 10</Button>
        <Button functionWhenClick={() => this.restar10()}>Restar 10</Button>

        <br />
        <br />
        <Button functionWhenClick={() => this.getUsers()}>
          Llamar Usuarios
        </Button>

        {this.state.loading ? (
          'Obteniendo usuarios. Aguarde un momento...'
        ) : (
          <ul>
            {this.state.users.map((user) => (
              <li key={'user_' + user.id}>
                Nombre: {user.name}
                Email: {user.email}
              </li>
            ))}
          </ul>
        )}
      </>
    )
  }
}

export default Home
