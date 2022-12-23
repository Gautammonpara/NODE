// db.Client_master.find({}).skip(3);
//db.Client_master.find({$or:[{"Baldue":{$ne:0}},{"State":{$in:["Maharashtra"]}}]});

// 3.

// A. db.Client_master.find({},{"Name":1,"_id":0});
// B. db.Client_master.find();
// c. db.Client_master.find({},{"Name":1,"City":1,"State":1,"_id":0});
// D. db.Product_master.find();
// E. db.Client_master.find({"City":{$in:["Bombay"]}});
// F. db.salesman_master.find({"salamt":{$eq:3000}});

// 4.

// A. db.Client_master.update({Clientno:'C00005'},{$set:{City:'Bangalore'}});
// B. db.Client_master.update({Clientno:'C00001'},{$set:{Baldue:'1000'}});
// C. db.Product_master.update({Description:'Monitors'},{$set:{Costprice:'950'}});
// D. db.salesman_master.updateMany({},{$set:{city:'Pune'}});



                            // ALL SYNTEX
                            
// db.collection.drop()    // drop table.database

// db.dropDatabase(); // drop 

// db.Product_master.remove({"Productno":"P00001"});  // delete record

// db.Client_master.remove({}); // remove all data in a table

// db.collection.update({col:"value"},{$set:{col:"value"}}); //update syntex

// db.collection.updateMany({col:"value"},{$set:{col:"value"}}); //update syntex

// {fild:{$all:[val1,val2,val3...]}} // all operator syntax

// {$and:[{fild:val1},{fild:val2}...]} // and syntax as same as all operator

// {fild:{$elemMatch:{<que1>,<que2>...}}} // elemMatch syntax

// {fild:{$size:n}} // array size operator syntax
  

// Books

// Q1) Select all documents from books collection, where no_of_reviews  is 3.
// db.books.find({no_of_reviews:{$eq:3}});

// Q2) Select all documents from the books collection where author profile contains 2 courses?
// db.books.find({"author.profile.courses":{$eq:2}});

// Q3) Read all documents from the books collection where 'tags' array contains 'database' element?
// db.books.find({tags:{$eq:"database"}});

// Q4) Select all documents from books collection where tags array is exactly equal to ["language","freeware","programming"].
// db.books.find({tags:{$eq:["language","freeware","programming"]}});

// Q5) To select all documents from books collection where no_of_reviews is not equal to 3.
// db.books.find({no_of_reviews:{$ne:"3"}});

// Q6) Select all documents from books collection where the no_of_reviews is greater than 3.
// db.books.find({no_of_reviews:{$gt:3}});

// Q7) Select all documents from books collection where the no_of_reviews is greater than or equal to 3.
// db.books.find({no_of_reviews:{$gte:3}});

// Q8) Select all documents from books collection where the no_of_reviews is less than 3.
// db.books.find({no_of_reviews:{$lt:3}});

// Q9) Select all documents from the books collection where the no_of_reviews is 1 or 4 or 5?
// db.books.find({$or:[{"no_of_reviews":1},{"no_of_reviews":4},{"no_of_reviews":5}]});

// Q10) Select all documents where either no_of_reviews >3 or tags array contains programming element?
// db.books.find({$or:[{"no_of_reviews":{$gt:3}},{tags:"programming"}]});

// Q11) Select all documents where either no_of_reviews is less than 3 or downloadable is true or author profile contains atleast 2 books?
// db.books.find({$or:[{"no_of_reviews":{$lt:3}},{downloadable:"true"},{"author.profile.books":{$eq:2}}]});

// Q12) Select all documents does not conain no_of_reviews and downloadable fields Note: $or results + $nor results = total no of documents
// db.books.find({$and:[{"no_of_reviews":{$eq:0}},{"downloadable":{$eq:false}}]}).count();

// Q13) Select all documents where the no_of_reviews is greater than or equals to 3 and downloadable is true?
// db.books.find({$and:[{"no_of_reviews":{$gte:3}},{"downloadable":{$eq:true}}]});


// Q14) update no_of_reviews to 10 where isbn no is 6677.
// db.books.updateMany({'isbn':6677},{$set:{'no_of_reviews':10}});

// Q15) update profile to 8 of books Oracle in simple way.
// db.books.updateMany({'title':'Oracle in simple way'},{$set:{'author.profile.books':8}});


// SHALL
// ARRAY QUERY OPERATORS

// 1.$all
// db.title.find({"tags":{$all:["database","sql"]}});

// 2.$elemMatch
// db.students.find({"marks":{$elemMatch:{$gte:80,$lt:90}}});

// 3.$size
// db.students.find({"marks":{$size:1}});


