var mongo = require('mongodb').MongoClient
var first = process.argv[2]
var last = process.argv[3]
// console.log(first)

mongo.connect('mongodb://localhost:27017/learnyoumongo', function (err,db) {
  if (err) return console.error(err)
// -------------------------------------------
// Exercise 4
// var parrots = db.collection('parrots')
//   parrots.find({
//     age: {$gt: +first}},
//     {
//       name: 1
//     , age: 1
//     , _id: 0
//   }).toArray(function (err,documents) {
//     if (err) return console.error(err)
//     console.log(documents)
//   })
//   db.close()
// })
// -------------------------------------------
// Exercise 5
// var docs = db.collection('docs')
// docs.insert({
//   firstName: first,
//   lastName: last
// },function (err,documents){
//   if(err) return console.error(err)
//   const json = JSON.stringify(documents.ops[0])
//   console.log(json)
//
// })
// db.close()
// })
// -------------------------------------------
// Exercise 6
// var users = db.collection('users')
// users.update({
//   name: "Tina"},
//   {$set: {
//     age: 40
//   }}
// , function (err,documents){
//   if(err) return console.error(err)})
// db.close()
// })
// -------------------------------------------
// Exercise 7
// var collect = db.collection(process.argv[3])
// collect.remove({
//   _id: process.argv[4]
// }, function (err,documents){
//   if(err) return console.error(err)})
// db.close()
// })
// -------------------------------------------
// Exercise 8
// var parrots = db.collection('parrots')
// parrots.count({
//   age: {$gt: +first}
// }, function (err,count){
//   if(err) return console.error(err)
// console.log(count)
// })
// db.close()
// })
// -------------------------------------------
// Exercise 9
var object =
})
