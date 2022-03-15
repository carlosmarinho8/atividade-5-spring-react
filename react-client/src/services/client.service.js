// Esses componentes chamam métodos ClientDataService que usam axios para fazer solicitações HTTP e receber respostas.

import http from "../http-common";

class ClientDataService {
  getAll() {
    return http.get("/clients");
  }

  get(id) {
    return http.get(`/clients/${id}`);
  }

  create(data) {
    return http.post("/clients", data);
  }

  update(id, data) {
    return http.put(`/clients/${id}`, data);
  }

  delete(id) {
    return http.delete(`/clients/${id}`);
  }

  deleteAll() {
    return http.delete(`/clients`);
  }

  findByName(name) {
    return http.get(`/clients?name=${name}`);
  }
}

export default new ClientDataService();