
// classe de modelo de dados corresponde à entidade e tabela clients.
package com.carlosmarinho8.agency_without_borders.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity  // A anotação indica que a classe é uma classe Java persistente.
@Table(name = "clients")  // anotação fornece a tabela que mapeia essa entidade.
public class Client {
	@Id  // anotação é para a chave primária.
	@GeneratedValue(strategy = GenerationType.AUTO)  /* anotação é usada para definir a estratégia de geração
	para a chave primária e significa campo de Incremento Automático.
	*/
	private long id;
	@Column(name = "name")  // anotação é usada para definir a coluna no banco de dados que mapeia o campo anotado.
	private String name;
	@Column(name = "age")
	private Integer age;
	@Column(name = "gender")
	private String gender;
	@Column(name = "phone")
	private Long phone;
	@Column(name = "email")
	private String email;
	@Column(name = "cpf")
	private Long cpf;
	@Column(name = "published")
	private boolean published;
	
	public Client() {
		
	}

	public Client(String name, Integer age, String gender, Long phone, String email, Long cpf, boolean published) {
		super();
		this.name = name;
		this.age = age;
		this.gender = gender;
		this.phone = phone;
		this.email = email;
		this.cpf = cpf;
		this.published = published;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public Long getPhone() {
		return phone;
	}

	public void setPhone(Long phone) {
		this.phone = phone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Long getCpf() {
		return cpf;
	}

	public void setCpf(Long cpf) {
		this.cpf = cpf;
	}

	public boolean isPublished() {
		return published;
	}

	public void setPublished(boolean published) {
		this.published = published;
	}

	@Override
	public String toString() {
		return "Client [id=" + id + ", name=" + name + ", age=" + age + ", gender=" + gender + ", phone=" + phone
				+ ", email=" + email + ", cpf=" + cpf + ", published=" + published + "]";
	}

}