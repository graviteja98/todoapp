const  Todo = require('../model/todo')

const addtodo = async (req,res)=>{
try{
const todo = await Todo.create(req.body)
res.status(200).json(todo)
}
catch(error){
console.log(error)
res.status(400).json({error: error.message})
}

}
const gettodo = async (req,res)=>{

    const todo = await Todo.find({}).sort({createdAt: -1})
    res.status(200).json(todo)

}


const deletetodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findOneAndDelete({ _id: id.replace(':', '') });
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    return res.status(200).json(todo);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
};

const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findByIdAndUpdate(
      id.replace(':', ''),
      { $set: req.body },
      { new: true }
    );
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    return res.status(200).json(todo);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = {gettodo,addtodo,deletetodo,updateTodo}