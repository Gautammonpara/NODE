-- product_master
-- create table product_master(
--     productno varchar(20),
--     description varchar(20),
--     profitpercent numeric(38, 2),
--     unitmeasured varchar(50),
--     qtyonhand numeric(38),
--     recorderlvl numeric(38),
--     sellprice numeric(38),
--     costprice numeric(38),
--     constraint pk_product_master primary key(productno)
-- );

-- insert into product_master values('P00001', '1.44floppies',5, 'piece', 100,20,525,500);
-- insert into product_master values('P03453', 'monitors',6, 'piece', 10,3,12000,11200);
-- insert into product_master values('P06734', 'mouse',5, 'piece', 20,5,1050,500);
-- insert into product_master values('P07865', '1.22 floppies',5, 'piece', 100,20,525,500);
-- insert into product_master values('P07868', 'keyboards',2, 'piece', 10,3,3150,3050);
-- insert into product_master values ('P07885', 'CD Drive', 2.50, 'piece', 10, 3,5250,5100);
-- insert into product_master values ('P07965', '540 HDD',4, 'piece',10,3,8400, 8000);
-- insert into product_master values('P07975', '1.44 Drive',5, 'piece', 10, 3, 1050, 1000);
-- insert into product_master values ('P08865', '1.22 Drive',5, 'piece',2,3,1050, 1000);
-- insert into product_master values ('P0345', '1.22 Drive',5, 'piece',2,3,1050, 1000);

--  salesman_master
--  create table salesman_master(
--  salesman_no varchar(50),
--  salesmannane varchar(50),
--  address1 varchar(50),
--  address2 varchar(20),
--  city varchar(50),
--  pincode numeric(38),
--  state varchar(50),
--  salamt numeric(38),
--  tgttoget numeric(38),
--  ytdsale numeric(38),
--  remark varchar(50),
--  constraint pk_salesman_master primary key(salesman_no)
--  );              
--  insert into salesman_master values ('S00001', 'Kiran', 'A/14 worli','khodiyarnagr', 'Bombay', 400002, 'Mah', 3000, 100, 50, 'Good');
--  insert into salesman_master values ('S00002', 'Manish', '65 nariman','punagam', 'Bombay',480001, 'Mah', 3000, 200, 100, 'Good');
--  insert into salesman_master values ('S00003', 'Ravi', 'P-7 Bandra','varachha', 'Bombay', 400032, 'Mah', 3000, 200, 100, 'Good');
--  insert into salesman_master values ('S00004', 'Ashish', 'A/5 Juhu','swaminarayan', 'Bombay', 400044, 'Mah', 3500, 200, 150, 'Good');
--  select * from salesman_master;
-- client_master
-- create table client_master(
--    Clientno varchar(50) ,
--    Name varchar(50),
--    city varchar(50),
--    pincode numeric(38),
--    state varchar(50),
--    baldue numeric(38),
--    address varchar(20),
--    constraint pk_client_master primary key(Clientno)
-- );
-- insert into client_master values('C00001', 'Ivan', 'Bombay', 400054, 'Maharashtra', 15000,'khodiyarnagr');
-- insert into client_master values('C00002', 'Vandana', 'Madras', 780001, 'Tamilnadu', 0,'swaminarayannagr');
-- insert into client_master values('C00003', 'Pramada', 'Bombay', 400057, 'Maharashtra', 5000,'renukabhavn');
-- insert into client_master values('C00004', 'Basu', 'Bombay', 400056, 'Maharashtra', 0,'punagam');
-- insert into client_master values('C00005', 'Ravi', 'Delhi', 100001, '', 2000,'udhna');
-- insert into client_master values('C00006', 'Rukmini', 'Banglore', 400050, 'Maharashtra', 0,'bhopal');
-- select * from client_master;

-- 3.Exercise on retrieving records from a table

-- select name from client_master;
-- select * from client_master;
-- select name,city,state from client_master;
-- select description from product_master;
-- select * from client_master where city like 'bombay';
-- select * from salesman_master where salamt like 3000;

-- 4.Exercise on updating records in a table

-- update
--     client_master
-- set
--     city = 'bangalore'
-- where
--     Clientno = 'c00005';
-- update
--     client_master
-- set
--     baldue = 1000
-- where
--     Clientno = 'c00001';
-- select * from client_master;

-- create table mybag
-- (
--     color varchar(40),
--     size numeric,
--     cap  numeric,
--     constraint pk_mybag primary key(color)
-- );
-- drop table mybag;

-- insert into mybag values('Red',3,50);
-- insert into mybag values('Green',4,2);

-- create table gautam
-- (
--     gid numeric primary key,
--     gname varchar(40)

-- );

-- insert into gautam values(1,'Gautam');
-- insert into gautam values(2,'Dishant');





-- foreign key concept




-- create table emp
-- (
--     eid numeric,
--     ename varchar(30),
--     constraint pk_emp primary key(eid)
-- );

-- insert into emp values(1,'gautam');
-- insert into emp values(2,'nilam');

-- create table dep
-- (
--     did numeric,
--     dname varchar(20),
--     empid numeric,
--     foreign key(empid) references emp(eid),
--     constraint pk_dep primary key(did)
-- );

-- insert into dep values(1,'admin',1);
-- insert into dep values(2,'mmanager',2);

-- select * from emp e,dep d where e.eid=d.empid;

-- create table sales_order
-- (
--     orderno varchar(20),
--     Clientno varchar(20),
--     orderdate date,
--     delyaddr varchar(20),
--     salesman_no varchar(20),
--     delytype char(20),
--     billyn char(20),
--     delydate date,
--     orderstatus varchar(20),
--     constraint pk_sales_order primary key (orderno),
--     constraint fk_sales_order foreign key (Clientno) references client_master(Clientno),
--     constraint fk_salesorder foreign key (salesman_no) references salesman_master(salesman_no)
-- );

-- insert into sales_order values('O19001','C00001','2004-06-12','palanpur','S00001','F','N','2002-07-20','in process');
-- insert into sales_order values('O19002','C00002','2004-06-25','kamrej','S00002','P','N','2002-07-27','Cancelled'); 
-- insert into sales_order values('O46865','C00003','2004-02-18','varchha','S00003','F','Y','2002-02-20','Fulfilled'); 
-- insert into sales_order values('O19003','C00001','2004-04-03','varchha','S00001','F','Y','2002-04-07','Fulfilled'); 
-- insert into sales_order values('O46866','C00004','2004-05-20','mota varchha','S00002','P','N','2002-05-22','Cancelled'); 
-- insert into sales_order values('O19008','C00005','2004-05-24','yogi chowk','S00004','F','N','2002-07-26','In Process');

-- create table sales_order_details
-- (
--     orderno varchar(20),
--     productno varchar(20),
--     qtyordered numeric,
--     qtydisp numeric,
--     productrate numeric,
--     constraint fk_sales_order_details foreign key (orderno) references sales_order(orderno),
--     constraint fk_sales_order_details1 foreign key (productno) references product_master(productno)
-- );

-- insert into sales_order_details values('O19001','P00001',4,4,525);
-- insert into sales_order_details values('O19001','P07965',2,1,8400);
-- insert into sales_order_details values('O19001','P07885',2,1,5250);
-- insert into sales_order_details values('O19002','P00001',10,0,525);
-- insert into sales_order_details values('O46865','P07868',3,3,3150);
-- insert into sales_order_details values('O46865','P07885',3,1,5250);
-- insert into sales_order_details values('O46865','P00001',10,10,525);
-- insert into sales_order_details values('O46865','P0345',4,4,1050);
-- insert into sales_order_details values('O19003','P03453',2,2,1050);
-- insert into sales_order_details values('O19003','P06734',1,1,12000);
-- insert into sales_order_details values('O46866','P07965',1,0,8400);
-- insert into sales_order_details values('O46866','P07975',1,0,1050);
-- insert into sales_order_details values('O19008','P00001',10,5,525);
-- insert into sales_order_details values('O19008','P07975',5,3,1050);
-- select * from sales_order_details;
--  select * from product_master p,sales_order_details s,client_master c,salesman_master t,sales_order o where p.productno=s.productno and o.clientno=c.clientno and t.salesman_no=o.salesman_no;



-- for update window  (DIXIT) 


-- select * from client_master;

-- * aesc & desc 
-- select * from client_master order by name;

-- select * from client_master order by name desc;

-- -- * in and not in
-- select * from client_master where pincode in(780001,100001);

-- select * from client_master where pincode not in(780001,100001);

-- select * from client_master where name like '_%i';

-- select * from client_master where name like 'i%_';
 
-- select * from client_master where name like '%i';

-- select * from client_master where name like '%v_';

-- select * from client_master where name like '____';

-- select * from client_master where name like '_a__';

-- select * from client_master where name like '%s%';

-- -- *  non repeat data  
-- select  distinct city from client_master;

-- select  distinct pincode from client_master;


