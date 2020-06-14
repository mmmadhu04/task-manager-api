// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'taskManager'

MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error, client) => {
    if(error) {
        return console.log("error")
    }

    const db = client.db(databaseName)

    // db.collection('users').findOne({name: 'Suman'}, (error, user) => {
    //     if(error) {
    //         return console.log("Not found")
    //     }

    //     console.log(user.name)
    //     console.log(user.age)
    //     console.log(user._id)
    // })

    // db.collection('users').find({name: 'Madhu'}).toArray((error, users) => {
    //     if(error) {
    //         return console.log("Error finding users")
    //     }

    //     console.log(users)
    // })

    // db.collection('users').updateOne({_id: new ObjectID("5ee347f9e62b0321c0ec503c")}, {
    //     // $set: {
    //     //     name: 'Akash'
    //     // }
    //     $inc : {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({completed: false}, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').deleteMany({
    //     age: 30
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    db.collection('tasks').deleteOne({
        description: "Shopping"
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})