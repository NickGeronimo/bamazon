DROP DATABASE IF EXISTS bamazon;


CREATE DATABASE bamazon;

USE  bamazon;

CREATE TABLE products (
 item_id INT NOT NULL AUTO_INCREMENT,
 product_name VARCHAR(45) NULL,
 department_name VARCHAR(45), 
 price DECIMAL(10,2) NULL,
 stock_quantity INT(100),
 PRIMARY KEY (item_id)
);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Wheels", "Transport","75.00",20);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Rations", "Food","5.00",100);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Rope", "Supplies","10.00",50);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Tarp", "Supplies","30.00",60);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Horse", "Food","350.00",10);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Gun", "Supplies","100.00",50);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Water", "Food","30.00",100);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Clothes", "Supplies","7.00",100);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Lumber", "Supplies","10.00",70);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Animal Feed", "Supplies", "100.00",1000);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Ammo", "Supplies","100.00",1000);





select * from products;