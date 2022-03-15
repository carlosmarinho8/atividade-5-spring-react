// // é uma interface que estende o JpaRepository para métodos CRUD e métodos de busca personalizada. Ele será conectado automaticamente no ClientController

package com.carlosmarinho8.agency_without_borders.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.carlosmarinho8.agency_without_borders.model.*;
public interface ClientRepository extends JpaRepository <Client, Long>{
	List<Client> findByPublished(boolean published);  // retorna todos os Clientes com valor publicado como entrada publicada.
	List<Client> findByNameContaining(String name);  //  retorna todos os Clientes cujo título contém o nome de entrada
}
