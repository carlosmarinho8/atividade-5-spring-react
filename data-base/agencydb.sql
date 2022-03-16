# Criando base de dados
CREATE DATABASE agencydb;
# Usando a base de dados
USE agencydb;
# Criando a tabela de clientes
CREATE TABLE clients(
id bigint PRIMARY KEY AUTO_INCREMENT NOT NULL,
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

# Atualizando o telephone do cliente João
UPDATE clients
SET phone = 88889999
WHERE id = 1;
SELECT * FROM clients;

# Deletando a cliente Maria pois não está ativa
DELETE FROM clients
WHERE id = 2;
SELECT * FROM clients;

# Criando tabela de viagens
CREATE TABLE trips(
id bigint PRIMARY KEY AUTO_INCREMENT NOT NULL,
fk int,
FOREIGN KEY(FK) REFERENCES  clients(id),
destiny varchar(255),
destination_date date,
destination_time time
)

# Inserindo valores na tabela de viagens
INSERT INTO trips (fk, destiny, destination_date, destination_time) values (1, 'new york', '2022-03-20', '18:00:00');

# Selecionando toda tabela viagens atraves de uma stored procedure
DELIMITER $$
CREATE PROCEDURE GetTrips()
BEGIN
	SELECT id, fk, destiny, destination_date, destination_time
	FROM trips
    ORDER BY id;
END$$
DELIMITER ;

# Chamando a procedure
CALL getTrips();

# Fazendo um inner join usando a chave estrangeira
SELECT name, age, gender, phone, email, cpf, published, destiny, destination_date, destination_time
FROM clients
INNER JOIN trips
ON clients.id = trips.fk
ORDER BY name;
