# Criando base de dados
CREATE DATABASE agencydb;
# Usando a base de dados
USE agencydb;
# Criando a tabela de clientes
CREATE TABLE clients(
id int PRIMARY KEY AUTO_INCREMENT NOT NULL,
name varchar(255),
age int,
gender varchar(255),
phone bigint,
email varchar(255),
cpf bigint,
published boolean
);
# Inserindo valores na tabela clientes
INSERT INTO clients(name, age, gender, phone, email, cpf, published) values (
'João Almeida', 40, 'Masculino', 33334444, 'joao.almeide@outlook.com', 12345678945, true),
('Maria Santos', 35, 'Feminino', 44443333, 'maria.santos@outlook.com', 47512485746, false
);
# Selecionando toda tabela clientes atraves de uma stored procedure
DELIMITER $$
CREATE PROCEDURE GetClients()
BEGIN
	SELECT name, age, gender, phone, email, cpf, published
	FROM clients
    ORDER BY name;
END$$
DELIMITER ;
# Chamando a procudure
CALL GetCLients();