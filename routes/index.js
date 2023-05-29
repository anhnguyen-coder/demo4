var express = require('express');
const BookModel = require('../models/BookModel');
var router = express.Router();

/* GET home page. */
router.get ('/', async(req, res) => {
  //SQL: select * from book
  var books = await BookModel.find({});
  //render ra view
  res.render('book_list', {books: books})

})

router.get('/drop', async(req, res) => {
  //SQL: delete * from book
  await BookModel.deleteMany({})
  .then(()=>{console.log('All books deleted');})
  .catch((err)=>{console.log('Delete failed')})
  //redirect theo uri
  res.redirect('/')
})

router.get ('/edit/:id')

router.get ('/delete/:id',async(req, res) => {
  //lay id tu request url
  var id = req.params.id
  //tim book trong db co id tuong ung
  
  var book = BookModel.findById(id)
  //xoa book tim duoc
  //SQL: delete * from book where id = 'id'
  await BookModel.deleteOne(book)
.then(()=>{console.log(' Book was deleted');})
.catch((err)=>{console.log('Delete failed')})
//redirect theo uri
res.redirect('/')
})

router.get ('/add')

router.get ('/detail/:id', async (req, res) => {
  var book =  await BookModel.findById(req.params.id);
  res.render('book_detail', { book: book})
})

module.exports = router;
