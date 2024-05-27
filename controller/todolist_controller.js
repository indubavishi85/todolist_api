var todolist = require('../model/todolist_model');

exports.insert = async (req, res) => {
    var data = await todolist.create(req.body);

    res.status(200).json({
        status: "data insert",
        data
    })
}
exports.get_data = async (req, res) => {
    var data = await todolist.find();

    res.status(200).json({
        status: "data select",
        data
    })
}
exports.delete_data = async(req,res) => {

    var id = req.params.id;

    var data = await todolist.findByIdAndDelete(id);

    res.status(200).json({
        status:"data deleted"
    })
}
exports.update_data = async(req,res) => {

    var id = req.params.id;

    var data = await todolist.findByIdAndUpdate(id,req.body);

    res.status(200).json({
        status:"data Update"
    })
}