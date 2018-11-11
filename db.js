// 1ST DRAFT DATA MODEL

/*
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {type:String, required:true},
  email: {type:String, required:true},
  password: {type:String, unique:true, required:true}
});

const ScoreSchema = new mongoose.Schema({
  golfcourse: {type:String, required:true},
  score: {type: String, required:true}
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'UserSchema'},
});

const HandiSchema = new mongoose.Schema({
  handicap: {type: String},
  score: {type: mongoose.Schema.Types.ObjectId, ref: 'ScoreSchema'}
});

// use plugins (for slug)
ScoreSchema.plugin(URLSlugs('title'));
// register your model
mongoose.model('User', UserSchema);
mongoose.model('Score', ScoreSchema);
mongoose.model('Handi', HandiSchema);

// connect to the database
mongoose.connect('mongodb://localhost/pp1445');
*/
