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

// =>.how to find any field dataType
// typeof db.students.findOne().marks;

// 1.$all
// db.title.find({"tags":{$all:["database","sql"]}});

// 2.$elemMatch
// db.students.find({"marks":{$elemMatch:{$gte:80,$lt:90}}});

// 3.$size
// db.students.find({"marks":{$size:1}});


{"address": {"building": "1007", "coord": [-73.856077, 40.848447], "street": "Morris Park Ave", "zipcode": "10462"}, "borough": "Bronx", "cuisine": "Bakery", "grades": [{"date": {"$date": 1393804800000}, "grade": "A", "score": 2}, {"date": {"$date": 1378857600000}, "grade": "A", "score": 6}, {"date": {"$date": 1358985600000}, "grade": "A", "score": 10}, {"date": {"$date": 1322006400000}, "grade": "A", "score": 9}, {"date": {"$date": 1299715200000}, "grade": "B", "score": 14}], "name": "Morris Park Bake Shop", "restaurant_id": "30075445"}


// 1. Write a MongoDB query to display all the documents in the collection restaurants.
// db.restaurants.find();

// 2. Write a MongoDB query to display the fields restaurant_id, name, borough and cuisine for all the documents in the collection restaurant.
// db.restaurants.find({},{"restaurant_id":1,"name":1,"borough":1,"cuisine":1})

// 3. Write a MongoDB query to display the fields restaurant_id, name, borough and cuisine, but exclude the field _id for all the documents in the collection restaurant.
// db.restaurants.find({},{"restaurant_id":1,"name":1,"borough":1,"cuisine":1,"_id":0})

// 4. Write a MongoDB query to display the fields restaurant_id, name, borough and zip code, but exclude the field _id for all the documents in the collection restaurant.
// db.restaurants.find({},{"restaurant_id":1,"name":1,"borough":1,"address.zipcode":1,"_id":0});

// 5. Write a MongoDB query to display all the restaurant which is in the borough Bronx.
// db.restaurants.find({"borough":{$in:["Bronx"]}});

// 6. Write a MongoDB query to display the first 5 restaurant which is in the borough Bronx.
// db.restaurants.find({"borough":{$in:["Bronx"]}}).limit(5);

// 7.Write a MongoDB query to display the next 5 restaurants after skipping first 5 which are in the borough Bronx.
// db.restaurants.find({"borough":{$in:["Bronx"]}}).skip(5).limit(5);

// 8. Write a MongoDB query to find the restaurants who achieved a score more than 90.
// db.restaurants.find({"grades.score":{$gt:90}});

// 9. Write a MongoDB query to find the restaurants that achieved a score, more than 80 but less than 100.
// db.restaurants.find({$and:[{"grades.score":{$gt:80}},{"grades.score":{$lt:100}}]});

// 10. Write a MongoDB query to find the restaurants which locate in latitude value less than -95.754168.
// db.restaurants.find({"address.coord":{$lt:-95.754168}});

// 11. Write a MongoDB query to find the restaurants that do not prepare any cuisine of 'American' and their grade score more than 70 and latitude less than -65.754168.
// db.restaurants.find({$and:[{"cuisine":{$nin:["American"]}},{"grades.score":{$gt:70}},{"address.coord":{$lt:-65.754168}}]});

// 12. Write a MongoDB query to find the restaurants which do not prepare any cuisine of 'American' and achieved a score more than 70 and located in the longitude less than -65.754168.
// Note : Do this query without using $and operator.
// db.restaurants.find({$all:[{"cuisine":{$nin:["American"]}},{"grades.score":{$gt:70}},{"address.coord":{$lt:-65.754168}}]});

// 13. Write a MongoDB query to find the restaurants which do not prepare any cuisine of 'American' and achieved a grade point 'A' not belongs to the borough Brooklyn. The document must be displayed according to the cuisine in descending order.
// db.restaurants.find({$and:[{"cuisine":{$ne:"American"}},{"grades.grade":{$eq:"A"}},{"borough":{$ne:"Brooklyn"}}]});

// 14. Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which contain 'Wil' as first three letters for its name.
// db.restaurants.find({"name":{$regex:"^Wil"}});

// 15. Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which contain 'ces' as last three letters for its name.
// db.restaurants.find({"name":{$regex:"ces$"}});

// 16. Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which contain 'Reg' as three letters somewhere in its name.
// db.restaurants.find({},{"restaurant_id":1,"name":1},{$and:[{""}]})

// 17. Write a MongoDB query to find the restaurants which belong to the borough Bronx and prepared either American or Chinese dish.
// db.restaurants.find({$or:[{"borough":"Bronx"},{"cuisine":{$eq:"American"}},{"cuisine":{$eq:"Chinese"}}]});

// // 18. Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which belong to the borough Staten Island or Queens or Bronxor Brooklyn.
// db.restaurants.find({$or:[{"borough":{$eq:"Staten Island"}},{"borough":{$eq:"Queens"}},{"borough":{$eq:"Bronxor Brooklyn"}}]});

// 19. Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which are not belonging to the borough Staten Island or Queens or Bronxor Brooklyn.
// db.restaurants.find({"borough":{$nin:["taten Island","Queens","Bronxor Brooklyn"]}});

// 20. Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which achieved a score which is not more than 10.
// db.restaurants.find({"grades.score":{$lte:10}});

// 21. Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which prepared dish except 'American' and 'Chinees' or restaurant's name begins with letter 'Wil'.

// 22. Write a MongoDB query to find the restaurant Id, name, and grades for those restaurants which achieved a grade of "A" and scored 11 on an ISODate "2014-08-11T00:00:00Z" among many of survey dates..

// 23. Write a MongoDB query to find the restaurant Id, name and grades for those restaurants where the 2nd element of grades array contains a grade of "A" and score 9 on an ISODate "2014-08-11T00:00:00Z".

// 24. Write a MongoDB query to find the restaurant Id, name, address and geographical location for those restaurants where 2nd element of coord array contains a value which is more than 42 and upto 52..

// 25. Write a MongoDB query to arrange the name of the restaurants in ascending order along with all the columns.

// 26. Write a MongoDB query to arrange the name of the restaurants in descending along with all the columns.

// 27. Write a MongoDB query to arranged the name of the cuisine in ascending order and for that same cuisine borough should be in descending order.

// 28. Write a MongoDB query to know whether all the addresses contains the street or not.

// 29. Write a MongoDB query which will select all documents in the restaurants collection where the coord field value is Double.
// db.restaurants.find({"grades.score":{$type:"double"}});

// 30. Write a MongoDB query which will select the restaurant Id, name and grades for those restaurants which returns 0 as a remainder after dividing the score by 7.
db.restaurants.find({})
