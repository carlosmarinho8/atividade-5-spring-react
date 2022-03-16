package com.carlosmarinho8.agency_without_borders.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.carlosmarinho8.agency_without_borders.model.*;
public interface ClientRepository extends JpaRepository <Client, Long>{
	List<Client> findByPublished(boolean published);
	List<Client> findByNameContaining(String name);
}
