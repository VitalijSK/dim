const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const ManageSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)
ManageSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('Manage', ManageSchema)
