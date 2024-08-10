const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  type: String,  // "income" or "expense"
  amount: Number,
  description: String,
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Transaction', transactionSchema);