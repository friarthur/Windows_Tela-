CREATE DATABASE IF NOT EXISTS login_windows;
USE login_windows;

CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  senha VARCHAR(255) NOT NULL, 
  avatar VARCHAR(255) DEFAULT NULL 
);
INSERT INTO usuarios (nome, senha)
VALUES ('User', SHA2('1234', 256)); -- senha: 1234
