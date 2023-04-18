const express = require('express')
const {addtodo,gettodo,deletetodo, updateTodo} = require('../controller/todocontroller')
const router = express.Router()


router.post('/add',addtodo)
router.get('/get',gettodo)
router.delete('/delete/:id',deletetodo)
router.patch('/update/:id',updateTodo)


module.exports = router;