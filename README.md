# inverntory_db
demo_inventory

create database inventory_db;

use inventory_db;
  CREATE TABLE categories (
  category_id INT AUTO_INCREMENT PRIMARY KEY,
  category_name VARCHAR(100) NOT NULL
);


    
    
    select c.category_name,p.product_name,s.supplier_name,p.price,p.stock_quantity
    from products p
    join categories c on p.category_id=c.category_id
    join suppliers s on p.supplier_id=s.supplier_id
  
