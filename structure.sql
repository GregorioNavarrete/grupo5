
 CREATE DATABASE Prisma;

 USE Prisma;

## para crear las tablas 

CREATE TABLE AUTHOR
       (
       ID_AUTHOR BIGINT NOT NULL,                              
       NAME VARCHAR(50) NOT NULL,                              
       BIOGRAPHY TEXT NOT NULL,                              
       IMAGE VARCHAR(100) NOT NULL,                              
       PRIMARY KEY
               (
               ID_AUTHOR
               )
       );



CREATE TABLE GENRE
       (
       ID_GENRE BIGINT NOT NULL,                              
       NAME VARCHAR(50) NOT NULL,
       IMAGE VARCHAR(100) NOT NULL, 
       PRIMARY KEY
               (
               ID_GENRE
               )
       );



CREATE TABLE EDITORIAL
       (
       ID_EDITORIAL BIGINT NOT NULL,                              
       NAME VARCHAR(50) NOT NULL,                              
       PRIMARY KEY
               (
               ID_EDITORIAL
               )
       );



CREATE TABLE SUPPORT
       (
       ID_SUPPORT BIGINT NOT NULL,                              
       NAME VARCHAR(50) NOT NULL,                              
       PRIMARY KEY
               (
               ID_SUPPORT
               )
       );



CREATE TABLE LANGUAGE
       (
       ID_LANGUAGE BIGINT NOT NULL,                              
       NAME VARCHAR(30) NULL,                              
       PRIMARY KEY
               (
               ID_LANGUAGE
               )
       );



CREATE TABLE COLLECTION
       (
       ID_COLLECTION BIGINT NOT NULL,                              
       NAME VARCHAR(50) NULL,                              
       PRIMARY KEY
               (
               ID_COLLECTION
               )
       );



CREATE TABLE ROL
       (
       ID_ROL BIGINT NOT NULL,                              
       NAME VARCHAR(50) NOT NULL,                              
       PRIMARY KEY
               (
               ID_ROL
               )
       );



CREATE TABLE FAVORITES
       (
       ID_FAV BIGINT NOT NULL,                              
       ID_USER BIGINT NULL,                              
       PRIMARY KEY
               (
               ID_FAV
               )
       );



CREATE TABLE PRODUCT
       (
       ID_PRODUCT BIGINT NOT NULL AUTO_INCREMENT,                              
       ID_EDITORIAL BIGINT NOT NULL,                              
       ID_LANGUAGE BIGINT NOT NULL,                              
       ID_COLLECTION BIGINT NOT NULL,                              
       ID_SUPPORT BIGINT NOT NULL,                              
       TITLE VARCHAR(50) NOT NULL,                              
       SUBTITLE VARCHAR(50) NULL,                              
       PRICE BIGINT NOT NULL,                              
       IMAGE VARCHAR(100) NOT NULL,                              
       DESCRIPTION TEXT NOT NULL,                              
       PAGES VARCHAR(10) NOT NULL,                              
       EDITION VARCHAR(10) NOT NULL,                             
       STOCK SMALLINT NOT NULL,                              
       DISCOUNT BIGINT NULL,                              
       CREATED DATETIME NOT NULL,                              
       UPDATED DATETIME NOT NULL,                              
       PRIMARY KEY
               (
               ID_PRODUCT
               ),
       FOREIGN KEY
               (
               ID_EDITORIAL
               )
          REFERENCES EDITORIAL
               (
               ID_EDITORIAL
               ),
       FOREIGN KEY
               (
               ID_LANGUAGE
               )
          REFERENCES LANGUAGE
               (
               ID_LANGUAGE
               ),
       FOREIGN KEY
               (
               ID_COLLECTION
               )
          REFERENCES COLLECTION
               (
               ID_COLLECTION
               ),
       FOREIGN KEY
               (
               ID_SUPPORT
               )
          REFERENCES SUPPORT
               (
               ID_SUPPORT
               )
       );



CREATE TABLE USER_PERSON
       (
       ID_USER BIGINT NOT NULL AUTO_INCREMENT,                              
       ID_ROL BIGINT NOT NULL,                              
       ID_FAV BIGINT NOT NULL,                              
       NAME VARCHAR(50) NOT NULL,                              
       LAST_NAME VARCHAR(50) NOT NULL,                              
       NAME_USER VARCHAR(50) NOT NULL,                              
       EMAIL VARCHAR(100) NOT NULL,                              
       PASSWORD VARCHAR(500) NOT NULL,                              
       IMAGE VARCHAR(100) NOT NULL,                              
       PRIMARY KEY
               (
               ID_USER
               ),
       FOREIGN KEY
               (
               ID_ROL
               )
          REFERENCES ROL
               (
               ID_ROL
               ),
       FOREIGN KEY
               (
               ID_FAV
               )
          REFERENCES FAVORITES
               (
               ID_FAV
               )
       );



CREATE TABLE COMMENT
       (
       ID_COMMENT BIGINT NOT NULL AUTO_INCREMENT,                              
       ID_PRODUCT BIGINT NOT NULL,                              
       ID_USER BIGINT NOT NULL,                              
       DESCRIPTION TEXT NOT NULL,                              
       PUBLICATION_DATE DATETIME NOT NULL,                              
       STAR TINYINT NOT NULL,                              
       PRIMARY KEY
               (
               ID_COMMENT
               ),
       FOREIGN KEY
               (
               ID_PRODUCT
               )
          REFERENCES PRODUCT
               (
               ID_PRODUCT
               ),
       FOREIGN KEY
               (
               ID_USER
               )
          REFERENCES USER_PERSON
               (
               ID_USER
               )
       );



#CREATE TABLE SHOPPING_CART
#       (
#       ID_Carrito BIGINT NOT NULL AUTO_INCREMENT,                              
#       ID_USER BIGINT NOT NULL,                              
#       CANT BIGINT NULL,                              
#       PRIMARY KEY
#               (
#               ID_Carrito
#               ),
#       FOREIGN KEY
#               (
#               ID_USER
#               )
#          REFERENCES USER_PERSON
#               (
#               ID_USER
#               )
#       );


####################################

######################################

CREATE TABLE PRODUCT_AUTHOR
       (
       ID BIGINT NOT NULL AUTO_INCREMENT,
       ID_AUTHOR BIGINT NOT NULL,                              
       ID_PRODUCT BIGINT NOT NULL,                              
       PRIMARY KEY
               (
               ID
               ),
       FOREIGN KEY
               (
               ID_AUTHOR
               )
          REFERENCES AUTHOR
               (
               ID_AUTHOR
               ),
       FOREIGN KEY
               (
               ID_PRODUCT
               )
          REFERENCES PRODUCT
               (
               ID_PRODUCT
               )
       );



CREATE TABLE PRODUCT_GENRE
       (
       ID BIGINT NOT NULL AUTO_INCREMENT,
       ID_GENRE BIGINT NOT NULL,                              
       ID_PRODUCT BIGINT NOT NULL,                              
       PRIMARY KEY
               (
               ID
               ),
       FOREIGN KEY
               (
               ID_GENRE
               )
          REFERENCES GENRE
               (
               ID_GENRE
               ),
       FOREIGN KEY
               (
               ID_PRODUCT
               )
          REFERENCES PRODUCT
               (
               ID_PRODUCT
               )
       );



CREATE TABLE PRODUCT_FAVORITES
       (
       ID_FAV BIGINT NOT NULL,                              
       ID_PRODUCT BIGINT NOT NULL,                              
       PRIMARY KEY
               (
               ID_FAV,
               ID_PRODUCT
               ),
       FOREIGN KEY
               (
               ID_FAV
               )
          REFERENCES FAVORITES
               (
               ID_FAV
               ),
       FOREIGN KEY
               (
               ID_PRODUCT
               )
          REFERENCES PRODUCT
               (
               ID_PRODUCT
               )
       );



#CREATE TABLE PRODUCT_CARRITO
 #      (
#       ID BIGINT NOT NULL AUTO_INCREMENT,                              
#       ID_PRODUCT BIGINT NOT NULL,
#       ID_Carrito BIGINT NOT NULL,
#       PRIMARY KEY (
#               ID
#               ),
#       FOREIGN KEY
#               (
#               ID_Carrito
#               )
#          REFERENCES SHOPPING_CART
#               (
#               ID_Carrito
#               ),
#       FOREIGN KEY
#               (
#               ID_PRODUCT
#               )
#          REFERENCES PRODUCT
#               (
#               ID_PRODUCT
#               )
#       );
 ########
 CREATE TABLE USER_PRODUCT
       (
       ID BIGINT NOT NULL AUTO_INCREMENT,                              
       ID_PRODUCT BIGINT NOT NULL,
       ID_USER BIGINT NOT NULL,
       CANT BIGINT NULL,
       PRIMARY KEY
               (
               ID
               ),
       FOREIGN KEY
               (
               ID_USER
               )
          REFERENCES USER_PERSON
               (
               ID_USER
               ),
       FOREIGN KEY
               (
               ID_PRODUCT
               )
          REFERENCES PRODUCT
               (
               ID_PRODUCT
               )
       );
 
 ########

       
       

