const mongoose = require("mongoose");

const serverSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  created: {
    type: Date,
    default: Date.now,
  },
  servername: {
    type: String,
    required: true,
    unique: true,
  },
  schemas: [
    {
      schematitle: String,
      schemaoptions:[{
      schemaname: {
        type: String,
        required: true,
      },
      schematype: {
        type: String,
        required: true,
      },
      schemafield: [{
        type: String,
        required: true,
      }],
}]},
  ],
});

// serverSchema.pre('save', async function(next) {
//   try {
//     const dbname= this.servername
//     const mongoose = require('mongoose');
// mongoose.set('debug', true);
// mongoose.Promise = global.Promise;
// mongoose.connect(`mongodb://localhost/${dbname}`);

//     return next();
//   } catch (err) {
//     return next(err);
//   }
// });

module.exports = mongoose.model("Server", serverSchema);
