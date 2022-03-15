// componente tem formulário para submissão de novo Cliente.

import React, { Component } from "react";
import ClientDataService from "../services/client.service";

export default class AddClient extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeCpf = this.onChangeCpf.bind(this);
    this.saveClient = this.saveClient.bind(this);
    this.newClient = this.newClient.bind(this);

    this.state = {
      id: null,
      name: "",
      age: null,
      gender: "",
      phone: null,
      email: "",
      cpf: null, 
      published: false,
      submitted: false
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeAge(e) {
    this.setState({
      age: e.target.value
    });
  }

  onChangeGender(e) {
    this.setState({
      gender: e.target.value
    });
  }

  onChangePhone(e) {
    this.setState({
      phone: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangeCpf(e) {
    this.setState({
      cpf: e.target.value
    });
  }
  saveClient() {
    var data = {
      name: this.state.name,
      age: this.state.age,
      gender: this.state.gender,
      phone: this.state.phone,
      email: this.state.email,
      cpf: this.state.cpf,
    };

    ClientDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          age: response.data.age,
          gender: response.data.gender,
          phone: response.data.phone,
          email: response.data.email,
          cpf: response.data.cpf,
          published: response.data.published,
          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newClient() {
    this.setState({
      id: null,
      name: "",
      age: null,
      gender: "",
      phone: null,
      email: "",
      cpf: null, 
      published: false,
      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>Você enviou com sucesso!</h4>
            <button className="btn btn-success" onClick={this.newClient}>
              Adicionar
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={this.state.name}
                onChange={this.onChangeName}
                name="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="age">Idade</label>
              <input
                type="text"
                className="form-control"
                id="age"
                required
                value={this.state.age}
                onChange={this.onChangeAge}
                name="age"
              />
            </div>

            <div className="form-group">
              <label htmlFor="gender">Gênero</label>
              <input
                type="text"
                className="form-control"
                id="gender"
                required
                value={this.state.gender}
                onChange={this.onChangeGender}
                name="gender"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Telefone</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                required
                value={this.state.phone}
                onChange={this.onChangePhone}
                name="phone"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input
                type="text"
                className="form-control"
                id="email"
                required
                value={this.state.email}
                onChange={this.onChangeEmail}
                name="email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="cpf">CPF</label>
              <input
                type="text"
                className="form-control"
                id="cpf"
                required
                value={this.state.cpf}
                onChange={this.onChangeCpf}
                name="cpf"
              />
            </div>
            <button onClick={this.saveClient} className="btn btn-success">
              Enviar
            </button>
          </div>
        )}
      </div>
    );
  }
}
