const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const multiUseSchema = new Schema({
  _id: ObjectId,
  order: Number,
  name: String,
  nameurl: String,
  description: String,
  author: String,
  difficulty: String,
  testCases: [
    {
      case: String,
      result: String,
      task: String,
      expectation: Boolean,
    },
  ],
  testPassed: Boolean,
});

const userSchema = new Schema({
  githubId: Number,
  accessToken: String,
  name: String,
  created: Date,
});

const Users = mongoose.model('Users', userSchema);
const Challenges = mongoose.model('Challenges', multiUseSchema);
const Tutorial = mongoose.model('Tutorial', multiUseSchema);

module.exports = { Challenges, Tutorial, Users };

// insert function
  // _id: ObjectId(),
  // name: 'blalblah',
  // ...
