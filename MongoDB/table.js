db.createCollection("Client_master")
db.Client_master.insertMany([
    {Clientno:'C00001',Name:'Ivan',City:'Bombay',Pincode:400054,State:'Maharashtra',Baldue:15000},
    {Clientno:'C00002',Name:'Vandana',City:'Madras',Pincode:780001,State:'Tamilnadu',Baldue:0},
    {Clientno:'C00003',Name:'Pramada',City:'Bombay',Pincode:400057,State:'Maharashtra',Baldue:5000},
    {Clientno:'C00004',Name:'Basu',City:'Bombay',Pincode:400056,State:'Maharashtra',Baldue:0},
    {Clientno:'C00005',Name:'Ravi',City:'Delhi',Pincode:100001,State:'',Baldue:200},
    {Clientno:'C00006',Name:'Rukmini',City:'Bombay',Pincode:400050,State:'Maharashtra',Baldue:0}
])

db.createCollection("Product_master")
db.Product_master.insertMany([
    {Productno:'P00001',Description:'1.44floppies',Profitpercent:5,Unitmeasured:'Piece',Qtyonhand:100,Recorderlvl:20,Sellprice:525,Costprice:500},
    {Productno:'P03453',Description:'Monitors',Profitpercent:6,Unitmeasured:'Piece',Qtyonhand:10,Recorderlvl:3,Sellprice:12000,Costprice:11200},
    {Productno:'P06734',Description:'Mouse',Profitpercent:5,Unitmeasured:'Piece',Qtyonhand:20,Recorderlvl:5,Sellprice:1050,Costprice:500},
    {Productno:'P07865',Description:'1.22floppies',Profitpercent:5,Unitmeasured:'Piece',Qtyonhand:100,Recorderlvl:20,Sellprice:525,Costprice:500},
    {Productno:'P07868',Description:'Keyboards',Profitpercent:2,Unitmeasured:'Piece',Qtyonhand:10,Recorderlvl:3,Sellprice:3150,Costprice:3050},
    {Productno:'P07885',Description:'Cd Drive',Profitpercent:2.50,Unitmeasured:'Piece',Qtyonhand:10,Recorderlvl:3,Sellprice:5250,Costprice:5100},
    {Productno:'P07965',Description:'540 HDD',Profitpercent:4,Unitmeasured:'Piece',Qtyonhand:10,Recorderlvl:3,Sellprice:8400,Costprice:8000},
    {Productno:'P07975',Description:'1.44 Drive',Profitpercent:5,Unitmeasured:'Piece',Qtyonhand:10,Recorderlvl:3,Sellprice:1050,Costprice:1000},
    {Productno:'P08865',Description:'1.22 Drive',Profitpercent:5,Unitmeasured:'Piece',Qtyonhand:2,Recorderlvl:3,Sellprice:1050,Costprice:1000},
])

db.createCollection("salesman_master")
db.salesman_master.insertMany([
    
    {salesman_no:'S00002', salesmanname:'Manish', address:'65, nariman', city:'Bombay', pincode:400001, state:'Mah', salamt:3000, tgttoget:200, ytdsale:100, remark:'Good'},
    {salesman_no:'S00001', salesmanname:'Kiran', address:'A/14 worli', city:'Bombay', pincode:400002, state:'Mah', salamt:3000, tgttoget:100, ytdsale:50, remark:'Good'},
    {salesman_no:'S00003', salesmanname:'Ravi', address:'P-7 Bandra', city:'Bombay', pincode:400032, state:'Mah', salamt:3000, tgttoget:200, ytdsale:100, remark:'Good'},
    {salesman_no:'S00004', salesmanname:'Ashish', address:'A/5 Juhu', city:'Bombay', pincode:400044, state:'Mah', salamt:3500, tgttoget:200, ytdsale:150, remark:'Good'}
])

db.createCollection("students")
db.students.insertMany([
    {_id:1,name:"Ram",marks:[82,78,89,90]},
    {_id:2,name:"Shyam",marks:[56,89,67]},
    {_id:3,name:"Raju",marks:[82]},
    {_id:4,name:"Shiv",marks:[23,45,65,34,21]},
    {_id:5,name:"Heta",marks:[56,78,90,80]}
]);


