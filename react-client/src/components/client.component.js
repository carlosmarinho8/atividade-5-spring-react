// O componente tem um formulário para editar os detalhes do Cliente com base em :id.

import React, { Component } from "react";
import ClientDataService from "../services/client.service";

export default class Client extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeCpf = this.onChangeCpf.bind(this);
    this.getClient = this.getClient.bind(this);
    this.updatePublished = this.updatePublished.bind(this);
    this.updateClient = this.updateClient.bind(this);
    this.deleteClient = this.deleteClient.bind(this);

    this.state = {
      currentClient: {
        id: null,
        name: "",
        age: null,
        gender: "",
        phone: null,
        email: "",
        cpf: null,
        published: false
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getClient(this.props.match.params.id);
  }

  onChangeName(e) {
    const name = e.target.value;

    this.setState(function(prevState) {
      return {
        currentClient: {
          ...prevState.currentClient,
          name: name
        }
      };
    });
  }

  onChangeAge(e) {
    const age = e.target.value;
    
    this.setState(prevState => ({
      currentClient: {
        ...prevState.currentClient,
        age: age
      }
    }));
  }

  onChangeGender(e) {
    const gender = e.target.value;
    
    this.setState(prevState => ({
      currentClient: {
        ...prevState.currentClient,
        gender: gender
      }
    }));
  }

  onChangePhone(e) {
    const phone = e.target.value;
    
    this.setState(prevState => ({
      currentClient: {
        ...prevState.currentClient,
        phone: phone
      }
    }));
  }

  onChangeEmail(e) {
    const email = e.target.value;
    
    this.setState(prevState => ({
      currentClient: {
        ...prevState.currentClient,
        email: email
      }
    }));
  }

  onChangeCpf(e) {
    const cpf = e.target.value;
    
    this.setState(prevState => ({
      currentClient: {
        ...prevState.currentClient,
        cpf: cpf
      }
    }));
  }



  getClient(id) {
    ClientDataService.get(id)
      .then(response => {
        this.setState({
          currentClient: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updatePublished(status) {
    var data = {
      id: this.state.currentClient.id,
      name: this.state.currentClient.name,
      age: this.state.currentClient.age,
      gender: this.state.currentClient.gender,
      phone: this.state.currentClient.phone,
      email: this.state.currentClient.email,
      cpf: this.state.currentClient.cpf,
      published: status
    };

    ClientDataService.update(this.state.currentClient.id, data)
      .then(response => {
        this.setState(prevState => ({
          currentClient: {
            ...prevState.currentClient,
            published: status
          }
        }));
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateClient() {
    ClientDataService.update(
      this.state.currentClient.id,
      this.state.currentClient
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "O cliente foi atualizado com sucesso!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteClient() {    
    ClientDataService.delete(this.state.currentClient.id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/clients')
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentClient } = this.state;

    return (
      <div>
        {currentClient ? (
          <div className="edit-form">
            <h4>Cliente</h4>
            <form>
              <div className="form-group">
                <label htmlFor="name">Nome</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={currentClient.name}
                  onChange={this.onChangeName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="age">Idade</label>
                <input
                  type="text"
                  className="form-control"
                  id="age"
                  value={currentClient.age}
                  onChange={this.onChangeAge}
                />
              </div>

              <div className="form-group">
                <label htmlFor="gender">Gênero</label>
                <input
                  type="text"
                  className="form-control"
                  id="gender"
                  value={currentClient.gender}
                  onChange={this.onChangeAge}
                />
              </div>


              <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {currentClient.published ? "Publicado" : "Pendente"}
              </div>
            </form>

            {currentClient.published ? (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(false)}
              >
                Cancelar a publicação
              </button>
            ) : (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(true)}
              >
                Publicar
              </button>
            )}

            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteClient}
            >
              Deletar
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateClient}
            >
              Atualizar
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Clique em um cliente...</p>
          </div>
        )}
      </div>
    );
  }
}
