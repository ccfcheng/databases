CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(20),
  roomname VARCHAR(20),
  message VARCHAR(140),
  created_at DATE);

CREATE TABLE users (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(20)
);

CREATE TABLE friends (user_id INT NOT NULL PRIMARY KEY,
  user_name VARCHAR(20),
  friend_id INT NOT NULL,
  friend_name VARCHAR(20)
);


  /* Describe your table here.*/

/*
ID | USERNAME | ROOM NAME| MESSAGE (PK)| CREATED_AT




);

/* Create other tables and define schemas for them here! */

/* TABLE: USERS
  TABLE: USER

  **********************
  USER
  **********************
  ID | ISFRIEND? | 

  ----------------------


  **********************
  FRIENDS
  **********************
  ID | USERNAME | 

  ----------------------

*/







/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

