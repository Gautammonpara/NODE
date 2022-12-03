--  create table manufacturers
--  (
--  code numeric primary key,
-- name varchar(20));

--  create table products
--      (
--      code int primary key,
--      name text,
--      price real,
--      manufacturer numeric,
--      constraint fk_products foreign key (manufacturer) references manufacturers(code));

-- insert into manufacturers values(1,'sony');
-- insert into manufacturers values(2,'creative labs');
-- insert into manufacturers values(3,'hewlett-pacard');
-- insert into manufacturers values(4,'lomega');
-- insert into manufacturers values(5,'fujitsu');
-- insert into manufacturers values(6,'winchester');


-- insert into products values(1,'hard drive',240,5);
-- insert into products values(2,'memory',120,6);
-- insert into products values(3,'zip drive',150,4);
-- insert into products values(4,'floppy disk',5,6);
-- insert into products values(5,'monitor',240,1);
-- insert into products values(6,'dvd',180,2);
-- insert into products values(7,'cd drive',90,2);
-- insert into products values(8,'printer',270,3);
-- insert into products values(9,'toner cartridge',66,3);
-- insert into products values(10,'dvd burner',180,2);

-- 1.
-- select name from products;

-- 2.
-- select name ,price from products;

-- 3.
-- select name from products where price <=200;

-- 4.
-- select name,price from products where price between 60 and 120;

-- 5.
-- select name,price*100 as price from products; 

-- 6.
-- select avg(price) from products;

-- 7.
-- select avg(price) from products where manufacturer =2;

-- 8.
-- select count(price) from products where price >= 180;

-- 9.
-- select name,price from products where price >= 180 order by price desc,name; 

-- 10.
-- select * from products p,manufacturers m where p.manufacturer=m.code;

-- 11.;
-- select p.name,p.price,m.name from products p,manufacturers m where p.manufacturer=m.code;

-- 12.
-- select avg(price),m.code from products p,manufacturers m where p.manufacturer=m.code group by p.manufacturer;

-- 13.
-- select avg(price),m.name from products p,manufacturers m where p.manufacturer=m.code group by p.manufacturer;

-- 14.
-- select avg(price),m.name from products p,manufacturers m where p.manufacturer=m.code GROUP BY p.manufacturer having avg(price)>=150;

-- 15.
-- select name,price from products order by price limit 1;
-- select name,price from products where price=(select min(price) from products);

-- 16.
-- select p.price,m.name,p.name from products p,manufacturers m where p.manufacturer=m.code group by m.name having max(price)=(select max(price) from products );

-- 17.
-- insert into products values(11,'loudspeakers',70,2);

-- 18.
-- update products set name='laser printer' where code=8;

-- 19.
-- update products set price = (price-price*0.1);

-- 20.
-- update products set price = (price-price*0.1) where price >=120;


-- inner join
-- select * from products inner join manufacturers on manufacturers.code=products.manufacturer;
-- select m.code,m.name,p.code,p.name,p.price,p.manufacturer from products p,manufacturers m where p.manufacturer=m.code order by m.code;


-- left join
-- select * from products p left join manufacturers m on p.manufacturer=m.code;


-- right join
-- select * from products p right join manufacturers m on p.manufacturer=m.code;

-- create table faculty
-- (
--     fno numeric primary key,
--     fname text,
--     fcity text,
--     mob numeric
-- );

-- insert into faculty values(101,'rajesh','surat',9907765434);
-- insert into faculty values(102,'vaibhav','surat',9907766434);
-- insert into faculty values(103,'sonal','vadodara',9907767434);

-- create table subjects
-- (
--     sno numeric primary key,
--     fno numeric,
--     sname text,
--     lec numeric
-- );

-- insert into subjects values(1,101,'RDBMS',3);
-- insert into subjects values(2,102,'DBMS',4);

-- INNER JOIN
-- select * from faculty inner join subjects on faculty.fno=subjects.fno;

-- LEFT JOIN
-- select * from faculty left join subjects on faculty.fno=subjects.fno;

-- RIGHT JOIN
-- select * from subjects right join faculty on faculty.fno=subjects.fno;

-- CROSS JOIN
-- select * from faculty cross join subjects;



-- SUB QUERY

-- A.
-- select productno,description from product_master where 
-- productno not in (select productno from sales_order_details);

-- B.
-- select name,add1,add2,city,pincode from client_master 
-- where clientno in (select clientno from sales_order where orderno in ("O19001"));

-- C.
-- select name from client_master where 
-- clientno in (select clientno from sales_order where orderdate < "2004-05-02");

-- D.
-- select clientno,name from client_master where
--  clientno in(select clientno from sales_order where orderno
--   in(select orderno from sales_order_details where productno in 
--   (select productno from product_master where description="mouse")) );

-- E.
-- select name from client_master where  clientno in 
-- (select clientno from sales_order where orderno in 
--  (select orderno from sales_order_details where qtyordered*productrate >10000 ));












