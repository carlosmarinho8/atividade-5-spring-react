// componente obtém e exibe Clientes.

import React, { Component } from "react";
import ClientDataService from "../services/client.service";
import { Link } from "react-router-dom";

export default class ClientsList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchName = this.onChangeSearchName.bind(this);
    this.retrieveClients = this.retrieveClients.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveClient = this.setActiveClient.bind(this);
    this.removeAllClients = this.removeAllClients.bind(this);
    this.searchName = this.searchName.bind(this);

    this.state = {
      clients: [],
      currentClient: null,
      currentIndex: -1,
      searchName: ""
    };
  }

  componentDidMount() {
    this.retrieveClients();
  }

  onChangeSearchName(e) {
    const searchName = e.target.value;

    this.setState({
      searchName: searchName
    });
  }

  retrieveClients() {
    ClientDataService.getAll()
      .then(response => {
        this.setState({
          clients: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveClients();
    this.setState({
      currentClient: null,
      currentIndex: -1
    });
  }

  setActiveClient(client, index) {
    this.setState({
      currentClient: client,
      currentIndex: index
    });
  }

  removeAllClients() {
    ClientDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchName() {
    this.setState({
      currentClient: null,
      currentIndex: -1
    });

    ClientDataService.findByName(this.state.searchName)
      .then(response => {
        this.setState({
          clients: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { searchName, clients, currentClient, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Buscar pelo nome"
              value={searchName}
              onChange={this.onChangeSearchName}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchName}
              >
                Buscar
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Lista de Clientes</h4>

          <ul className="list-group">
            {clients &&
              clients.map((client, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "ativo" : "")
                  }
                  onClick={() => this.setActiveClient(client, index)}
                  key={index}
                >
                  {client.name}
                </li>
              ))}
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllClients}
          >
            Remover todos
          </button>
        </div>
        <div className="col-md-6">
          {currentClient ? (
            <div>
              <h4>Clientes</h4>
              <div>
                <label>
                  <strong>Name:</strong>
                </label>{" "}
                {currentClient.name}
              </div>
              <div>
                <label>
                  <strong>Idade:</strong>
                </label>{" "}
                {currentClient.age}
              </div>
              <div>
                <label>
                  <strong>Gênero:</strong>
                </label>{" "}
                {currentClient.gender}
              </div>
              <div>
                <label>
                  <strong>Telefone:</strong>
                </label>{" "}
                {currentClient.phone}
              </div>
              <div>
                <label>
                  <strong>E-mail:</strong>
                </label>{" "}
                {currentClient.email}
              </div>
              <div>
                <label>
                  <strong>CPF:</strong>
                </label>{" "}
                {currentClient.cpf}
              </div>
              <div>
                <label>
                  <strong>Status:</strong>
                </label>{" "}
                {currentClient.published ? "Publicado" : "Pendente"}
              </div>

              <Link
                to={"/clients/" + currentClient.id}
                className="badge badge-warning"
              >
                Editar
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Por favor, click em um Cliente...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
