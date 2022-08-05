const db = require('./config/connection');
const { User } = require('./models');

const name = "maxwell";

db.once('open', async () => {
    console.log('11111')
    // const username = 'testname'
    // const email = 'test@email.com'
    // const password = 'testpassword'
    // const userData={
    //     username,email,password
    // }
    // await User.collection.insertOne(userData)

    const data = await User.collection.findOne({_id})
    console.log('all done!');

    console.log(data)
    process.exit(0);

    
})
