-- Active: 1742066657806@@localhost@3306@bdcliente

CREATE DATABASE crudnodejsmysql;

use crudnodejsmysql;

CREATE TABLE customer (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(100) NOT NULL,
    phone VARCHAR(15)
);

SHOW TABLES;

DESCRIBE customer;