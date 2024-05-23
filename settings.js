const fs = require('fs')

global.creator = 'Zeeoneofc'// yourname
global.MONGO_DB_URI = "mongodb+srv://zeltoria1909:96xAwEIGoHhOO2lR@cluster0.v5c9etv.mongodb.net/?retryWrites=true&w=majority" //database mongodb 
global.ACTIVATION_TOKEN_SECRET = "-@Pqnap+@(/1jAPPnew/@10" //isi apa aja bebas
global.your_email = "efb700f1a3eb9d9e" //email
global.email_password = "9QbcLA6HAsGI0g8sBdbEWxnycHei" //application password email
global.limitCount = 3000
global.YUOR_PORT = 587
global.loghandler = {
  noapikey:{
    status: 403,
        message: 'Input parameter apikey',
        creator: `${creator}`,
        result: "error"
    },
    error: {
        status: 503,
        message: 'Service Unavaible, Sedang dalam perbaikan',
        creator: `${creator}`
    },
    apikey: {
      status: 403,
      message: 'Forbiden, Invalid apikey',
      creator: `${creator}`
    },
    noturl: {
      status: 403,
      message: 'Forbiden, Invlid url, masukkan parameter url',
      creator: `${creator}`,
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(`Update'${__filename}'`)
  delete require.cache[file]
  require(file)
})
