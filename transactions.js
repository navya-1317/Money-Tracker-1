const Transaction = require('./models/Transaction');

app.get('/', async (req, res) => {
  const transactions = await Transaction.find({});
  res.render('index', { transactions });
});

app.post('/add', async (req, res) => {
  const { type, amount, description } = req.body;
  const newTransaction = new Transaction({ type, amount, description });
  await newTransaction.save();
  res.redirect('/');
});

app.post('/delete/:id', async (req, res) => {
  const { id } = req.params;
  await Transaction.findByIdAndDelete(id);
  res.redirect('/');
});