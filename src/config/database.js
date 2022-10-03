const mongoose = require('mongoose')

const con = mongoose.connect(
  'mongodb+srv://root:Amr123Amr123@cluster0.bjjon.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true },
  async () => {
    try {
      console.log('Database Connected Successfuly !!')
    } catch (err) {
      console.log(err)
    }
  }
)

module.exports = con
