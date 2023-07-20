create database shirts_db;
use shirts_db;
create table shirts(
shirt_id int,
article varchar(20),
color varchar(20),
shirt_size varchar(20),
last_worn int
);
Alter table shirts Modify  shirt_id int primary key; 
desc shirts;
insert into shirts(shirt_id,article,color,shirt_size,last_worn) values ('1','t-shirt', 'white', 'S', 10),
('2','t-shirt', 'green', 'S', 200),
('3','polo shirt', 'black', 'M', 10),
('4','tank top', 'blue', 'S', 50),
('5','t-shirt', 'pink', 'S', 0),
("6",'polo shirt', 'red', 'M', 5),
("7",'tank top', 'white', 'S', 200),
( "8",'tank top', 'blue', 'M', 15)