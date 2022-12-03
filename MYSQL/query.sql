-- 18 OCTOMBER(DIXIT)




-- -- 1
-- select * from client_master;
-- select name from client_master where name like '_a%';

-- -- 2.
-- select name from client_master where city like 'm%';

-- -- 3.
-- select * from client_master where city 'banglore' or city='manglore';

-- -- 4.
-- select * from client_master where baldue>1000;

-- -- 5.
-- select * from sales_order where orderdate>'2004-06-01' and orderdate<'2004-07-01';

-- -- 6.
-- select * from client_master  where clientno='C00001' or clientno='C00002';

-- -- 7
-- select * from product_master where sellprice>500 and sellprice<=750 ;

-- -- 8.
-- select * from product_master where sellprice>500 ;
-- alter table product_master add column sellprice1 numeric;
-- update product_master set sellprice1=(sellprice*0.15)+sellprice where sellprice>500;

-- -- 9.
-- select Name,city,state from client_master where state!='maharashtra';
-- select Name,city,state from client_master where state not in('maharashtra');

-- -- 10.
-- select  count(orderno) from sales_order;

-- -- 11.
-- select avg(sellprice) from product_master;

-- -- 12.
--  select max(costprice) from product_master;
-- select min(costprice) from product_master;
-- select max(costprice) as max_price from product_master;
-- select min(costprice) as min_price from product_master;

-- -- 13.
-- select count(costprice) from product_master where costprice<=500;

-- -- 14.
-- select * from product_master where qtyonhand < recorderlvl;



-- date qouery


-- CREATE TABLE student
-- (
--     sid numeric,
--     sname varchar(220),
--     bir_date date
-- );

-- insert into student values(1,'gautam','2003-10-06');
-- insert into student values(2,'gautam','2003-05-31');

-- alter table sudent add column difference date;

-- update student set difference =  date_format(from_days(datediff(now(),bir_date)),"%y-%m-%d");


-- 9 NOV

-- EXERCISES ON USING HAVING AND GROUP BY CLAUSES : -

-- A.
--  select p.description,sum(qtydisp) from product_master p,sales_order_details s where p.productno=s.productno  group by description;

-- B.
-- select p.description,sum(s.qtyordered),sum(qtyordered*productrate) from product_master p,sales_order_details s where p.productno=s.productno  group by s.productno;

-- C.
-- select p.description,avg(s.qtyordered) as orderavg,sum(qtyordered*productrate) as sold from product_master p,sales_order_details s where p.productno=s.productno  group by s.orderno having sold>15000;

-- -- D.
-- select sum(s.qtyordered),so.orderdate
--  from sales_order so,sales_order_details s where s.orderno=so.orderno 
--  group by so.orderdate having date_format(so.orderdate,"%m")=6;

-- select * from product_master;

-- 1.
-- select c.name,p.description,so.orderno 
-- from client_master c,product_master p,sales_order so,sales_order_details s
-- where c.clientno=so.clientno 
-- and p.productno=s.productno and 
-- s.orderno=so.orderno group by p.productno
--  having c.name="ivan";

-- 2.
-- select s.orderno,s.productno,p.description,so.orderdate,so.delydate
-- from client_master c,product_master p,sales_order_details s,sales_order so
-- where c.clientno=so.clientno and  s.orderno=so.orderno and s.productno=p.productno
-- and date_format(so.orderdate,"%m")=date_format(so.delydate,"%m");

-- 3.
-- select p.productno,p.description,sum(s.qtyordered) from
--  product_master p,sales_order_details s 
--  where p.productno=s.productno group by p.productno order by sum(s.qtyordered)  desc limit 1;

-- 4.
-- select c.name from
--  client_master c,product_master p,sales_order so,sales_order_details s 
--  where c.clientno=so.clientno and
--   so.orderno=s.orderno and
--    p.productno=s.productno and p.description="1.44floppies";

-- 5.
-- select p.description,c.name from
--  client_master c,product_master p,sales_order so,sales_order_details s 
--  where c.clientno=so.clientno and
--   so.orderno=s.orderno and
--    p.productno=s.productno and s.qtyordered<5 and p.description="mouse";

-- 6.
-- select c.name,p.description,s.qtyordered from
--  client_master c,product_master p,sales_order so,sales_order_details s 
--  where c.clientno=so.clientno and
--   so.orderno=s.orderno and
--    p.productno=s.productno and c.name in ("basu","ravi");

-- 7.
-- select c.name,p.description,s.qtyordered from
--  client_master c,product_master p,sales_order so,sales_order_details s 
--  where c.clientno=so.clientno and
--   so.orderno=s.orderno and
--    p.productno=s.productno and c.clientno in ("C00001","C00002"); 


-- SUBQUERY






