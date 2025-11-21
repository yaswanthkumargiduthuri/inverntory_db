create database inventory_db;

CREATE TABLE categories (
  category_id INT AUTO_INCREMENT PRIMARY KEY,
  category_name VARCHAR(100) NOT NULL
);


CREATE TABLE suppliers (
  supplier_id INT AUTO_INCREMENT PRIMARY KEY,
  supplier_name VARCHAR(100) NOT NULL,
  contact_number VARCHAR(15)
);


CREATE TABLE products (
  product_id INT AUTO_INCREMENT PRIMARY KEY,
  product_name VARCHAR(100) NOT NULL,
  category_id INT,
  supplier_id INT,
  stock_quantity INT DEFAULT 0,
  price DECIMAL(10,2),
  FOREIGN KEY (category_id) REFERENCES categories(category_id),
  FOREIGN KEY (supplier_id) REFERENCES suppliers(supplier_id)
);


INSERT INTO categories (category_name) VALUES ('Electronics'), ('Groceries'), ('Furniture');



INSERT INTO suppliers (supplier_name, contact_number) VALUES ('ABC Traders', '9876543210'), ('Fresh Mart', '9123456789');


INSERT INTO products (product_name, category_id, supplier_id, stock_quantity, price)
VALUES
('TV', 1, 1, 10, 30000),
('Rice Bag', 2, 2, 50, 1200),
('Sofa Set', 3, 1, 5, 25000);

    select c.category_name,p.product_name,s.supplier_name,p.price,p.stock_quantity
    from products p
    join categories c on p.category_id=c.category_id
    join suppliers s on p.supplier_id=s.supplier_id
  
    select c.category_name,p.product_name,s.supplier_name,s.contact_number,p.price,p.stock_quantity
    from products p
    join categories c on p.category_id=c.category_id
    join suppliers s on p.supplier_id=s.supplier_id
  
    select c.category_name,p.product_name,s.supplier_name,p.price
    from products p
    join categories c on p.category_id=c.category_id
    join suppliers s on p.supplier_id=s.supplier_id
  



