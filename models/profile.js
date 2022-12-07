const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
 const favoritesSchema = new Schema ({
  favoritedMoon: String,
  favoritedPlanet: String,
 })

const profileSchema = new Schema({
  favorites: [favoritesSchema],
  user: { type: Schema.Types.ObjectId, ref: 'User' },
}, {
  timestamps: true
});

module.exports = mongoose.model('Profile', profileSchema)