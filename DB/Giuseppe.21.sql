CREATE TABLE FERRARA_CATEGORY (
    id_category NUMBER(16) PRIMARY KEY NOT NULL,
    name VARCHAR2(200)
    );
    
    INSERT INTO ferrara_category (id_category, name)
VALUES 
  (1, 'Elettronica');
  INSERT INTO ferrara_category (id_category, name)
VALUES 
  (2, 'Dispositivi Mobili');
  INSERT INTO ferrara_category (id_category, name)
VALUES 
  (3, 'Gaming e Intrattenimento');
  
CREATE TABLE FERRARA_EMPLOYEES (
    id_employee NUMBER(16) PRIMARY KEY NOT NULL,
    name VARCHAR2(255),
    email VARCHAR2(255),
    role VARCHAR2(255)
);

INSERT INTO ferrara_employees (id_employee, name, email, role)
VALUES 
  (1, 'Giuseppe Ferrara', 'giuseppe.ferrara@email.com', 'Manager');
  
  INSERT INTO ferrara_employees (id_employee, name, email, role)
VALUES 
  (2, 'Moreno Noto', 'moreno.noto@email.com', 'Impiegato');
  
  INSERT INTO ferrara_employees (id_employee, name, email, role)
VALUES 
  (3, 'Dario Spanò', 'dario.spano@email.com', 'Impiegato');
  
  INSERT INTO ferrara_employees (id_employee, name, email, role)
VALUES 
  (4, 'Giuseppe Argirì', 'giuseppe.argiri@email.com', 'Impiegato');
  
  INSERT INTO ferrara_employees (id_employee, name, email, role)
VALUES 
  (5, 'Salvatore Valore', 'salvatore.valore@example.com', 'Impiegato');
  
  INSERT INTO ferrara_employees (id_employee, name, email, role)
VALUES 
  (6, 'Rosario Morrone', 'rosario.marrone@email.com', 'Impiegato');
  
  INSERT INTO ferrara_employees (id_employee, name, email, role)
VALUES 
  (7, 'Luca Martini', 'luca.martini@email.com', 'Impiegato');
  
  INSERT INTO ferrara_employees (id_employee, name, email, role)
VALUES 
  (8, 'Giulia Colombo', 'giulia.colombo@example.com', 'Impiegato');
  
  INSERT INTO ferrara_employees (id_employee, name, email, role)
VALUES 
  (9, 'Sara Viola', 'sara.viola@email.com', 'Impiegato');
  
  INSERT INTO ferrara_employees (id_employee, name, email, role)
VALUES 
  (10, 'Giovanni Di Salvo', 'giovanni.disalvo@email.com', 'Impiegato');
  


CREATE TABLE FERRARA_PRODUCTS(
    id_product NUMBER(16) PRIMARY KEY NOT NULL,
    name VARCHAR2(200),
    description VARCHAR2(255),
    category  NUMBER(16),
    quantity NUMBER(16),
    price decimal,
    FOREIGN KEY (category) REFERENCES FERRARA_CATEGORY(id_category)
);


INSERT INTO ferrara_products (id_product, name, description, category, quantity, price)
VALUES 
  (1, 'Laptop Dell XPS 15', 'Laptop potente per professionisti', 1, 50, 2699.99);
  
  INSERT INTO ferrara_products (id_product, name, description, category, quantity, price)
VALUES
  (2, 'Smartphone Samsung Galaxy S21', 'Ultimo smartphone Android di Samsung', 2, 100, 899.99);
  
  INSERT INTO ferrara_products (id_product, name, description, category, quantity, price)
VALUES
  (3, 'Smart TV Sony Bravia 65 pollici', 'TV 4K con schermo LED e HDR', 1, 30, 1499.99);
  
  INSERT INTO ferrara_products (id_product, name, description, category, quantity, price)
VALUES
  (4, 'Macchina Fotografica Canon EOS R6', 'Fotocamera mirrorless professionale', 3, 20, 2499.99);
  
  INSERT INTO ferrara_products (id_product, name, description, category, quantity, price)
VALUES
  (5, 'Cuffie Bose QuietComfort 45', 'Cuffie con cancellazione attiva del rumore', 2, 80, 349.99);
  
  INSERT INTO ferrara_products (id_product, name, description, category, quantity, price)
VALUES
  (6, 'Smartwatch Apple Watch Series 7', 'Orologio intelligente con monitoraggio avanzato della salute', 1, 120, 399.99);
  
  INSERT INTO ferrara_products (id_product, name, description, category, quantity, price)
VALUES
  (7, 'Console Sony PlayStation 5', 'Ultima console di gioco di Sony', 3, 40, 499.99);
  
  INSERT INTO ferrara_products (id_product, name, description, category, quantity, price)
VALUES
  (8, 'Tablet Microsoft Surface Pro 8', 'Potente tablet con Windows 11', 2, 60, 899.99);
  
  INSERT INTO ferrara_products (id_product, name, description, category, quantity, price)
VALUES
  (9, 'Stampante HP LaserJet Pro M404dn', 'Stampante laser monocromatica affidabile', 1, 30, 199.99);
  
  INSERT INTO ferrara_products (id_product, name, description, category, quantity, price)
VALUES
  (10, 'Monitor Dell UltraSharp U2721DE', 'Monitor QHD da 27 pollici con USB-C', 3, 50, 349.99);



CREATE TABLE FERRARA_MOVEMENTS (
    id_movement NUMBER(16) PRIMARY KEY NOT NULL,
    product NUMBER(16),
    quantity_change NUMBER(16),
    timestamp TIMESTAMP,
    type VARCHAR2(255),
    FOREIGN KEY (product) REFERENCES FERRARA_PRODUCTS(id_product)
);


INSERT INTO ferrara_movements (id_movement, product, quantity_change, timestamp, type)
VALUES 
  (1, 1, 20, TIMESTAMP '2024-02-13 08:00:00', 'Arrivo in Magazzino');
  
  INSERT INTO ferrara_movements (id_movement, product, quantity_change, timestamp, type)
VALUES
  (2, 6, 10, TIMESTAMP '2024-07-12 09:30:00', 'Vendita');
  
  INSERT INTO ferrara_movements (id_movement, product, quantity_change, timestamp, type)
VALUES
  (3, 1, 30, TIMESTAMP '2024-05-12 10:45:00', 'Arrivo in Magazzino');
  
  INSERT INTO ferrara_movements (id_movement, product, quantity_change, timestamp, type)
VALUES
  (4, 4, -5, TIMESTAMP '2024-01-12 12:15:00', 'Arrivo in Magazzino');
  
  INSERT INTO ferrara_movements (id_movement, product, quantity_change, timestamp, type)
VALUES
  (5, 5, 15, TIMESTAMP '2024-09-12 14:00:00', 'Arrivo in Magazzino');
  
  INSERT INTO ferrara_movements (id_movement, product, quantity_change, timestamp, type)
VALUES
  (6, 7, -25, TIMESTAMP '2024-12-12 15:30:00', 'Vendita');
  
  INSERT INTO ferrara_movements (id_movement, product, quantity_change, timestamp, type)
VALUES
  (7, 6, 20, TIMESTAMP '2024-02-10 17:00:00', 'Arrivo in Magazzino');
  
  INSERT INTO ferrara_movements (id_movement, product, quantity_change, timestamp, type)
VALUES
  (8, 8, -15, TIMESTAMP '2024-02-06 18:45:00', 'Vendita');
  
  INSERT INTO ferrara_movements (id_movement, product, quantity_change, timestamp, type)
VALUES
  (9, 9, 25, TIMESTAMP '2024-02-12 20:00:00', 'Vendita');
  
  INSERT INTO ferrara_movements (id_movement, product, quantity_change, timestamp, type)
VALUES
  (10, 10, -20, TIMESTAMP '2024-03-12 21:30:00', 'Vendita');
  


