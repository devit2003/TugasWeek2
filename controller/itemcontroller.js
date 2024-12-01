let items = [];
exports.CreateItem = (req, res) => {
    const item = req.body;
    items.push(item);
    res.status(201).send('Item Berhasil Dibuat')
}

exports.GetItems = (req, res) => {
    res.json(items)
}

exports.updateItem = (req, res) => {
    const { id } = req.params;
    const updatedItem = req.body;
    items[id] = updatedItem;
    res.send('Item Berhasil Di Update')
}

exports.DeleteItem = (req, res) => {
    const { id } = req.params;
    items.splice(id, 1);
    res.send('Item Berhasil Dihapus');
}

