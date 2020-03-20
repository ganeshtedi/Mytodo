const MongoClient=require('mongodb').MongoClient;
const ObjectID=require('mongodb').ObjectID;
const assert=require("assert");
const dbName = "crud_mongodb";
const url = "mongodb://localhost:27017";
const mongoOptions ={useNewUrlParser : true};
const state={
    db:null
};
const client = new MongoClient(url);
client.connect(function(err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
  
    state.db = client.db(dbName);
  });
const getPrimaryKey=(_id)=>{
    return ObjectID(_id);
}
const getDB=()=>{
    return state.db;
}
module.exports ={getDB,getPrimaryKey};