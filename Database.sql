drop database gofitness;
create database gofitness;
use gofitness;
create table user(
    userID int auto_increment,
    username varchar(255) not null,
    email varchar(255) not null,
    password varchar(255) not null,
    goal varchar(255),
    geschlecht boolean,
    height float,
    weight float,
    birthday date,
    caloriePerDay float,
    Primary Key(userID)
);
create table eatenFood(
    foodID int auto_increment,
    foodName varchar(255) not null,
    calories float not null,
    datum date not null,
    userID int not null,
    Primary Key(foodID),
    Foreign Key(userID) references user(userID)
);

insert into user (username,email,password) values 
("andrei","andrei@gmail.com","12345"),
("noah","noah@gmail.com","12345");