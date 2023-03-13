const { dataProduct } = require("../data");
module.exports = {
  getProduct: (_, res) => res.json(dataProduct),
  getProductById: async (req, res) => {
    const paramsId = await req.params.id;
    const filteredData = await dataProduct.filter(
      (data) => data.id == parseInt(paramsId)
    );
    return res.json(filteredData);
  },
  postProduct: async (req, res) => {
    try {
        const {id, item, price} = await req.body
      const product = {
        id: id || 4,
        item,
        price,
      };
      const pushData = await dataProduct.push(product);
      //set the response
      res.json(dataProduct);
    } catch (error) {
      console.log(error);
    }
  },
  deleteProduct: async (req, res) => {
    try {
      const paramsId = await req.params.id;

      const indexDataToRemove = dataProduct.findIndex(
        (data) => data.id == parseInt(paramsId)
      );
      if (indexDataToRemove !== -1) {
        const deletedProduct = dataProduct.splice(indexDataToRemove, 1);
        return res.json(dataProduct);
      }
      return res.end("not found");
    } catch (error) {
      console.log(error);
    }
  },
  updateProduct: async (req, res) => {
    try {
      const paramsId = await parseInt(req.params.id);
      const {item, price} = await req.body
      const product = {
        id: paramsId,
        item,
        price,  
      };
      const indexDataToUpdate = await dataProduct.findIndex(
        (data) => data.id === paramsId
      );
      dataProduct[indexDataToUpdate] = product;
      if (indexDataToUpdate !== -1) {
        return res.json(dataProduct);
      }
      return res.end("id not found");
    } catch (err) {
      console.log(err);
    }
  },
};
