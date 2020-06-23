const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const EventsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    type_time: {
      type: Number,
      required: true
    },
    type_place: {
      type: Number,
      required: true
    },
    type_place_gus: {
      type: Number,
      required: true
    },
    type_count_gus: {
      type: Number,
      required: true
    },
    type_vin: {
      type: Number,
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
EventsSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('Events', EventsSchema)
