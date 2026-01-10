CREATE DATABASE nimap_machine_test;
USE nimap_machine_test;

CREATE TABLE categories(
    categories_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL

);

CREATE TABLE products(
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    product_name name VARCHAR(100) NOT NULL,
    category_id INT,
    Foreign KEY (category_id) REFERENCES categories(categories_id)
);
