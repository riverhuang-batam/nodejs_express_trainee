const { dataUser } = require("../data");
module.exports = {
  getUsers: (_, res) => res.json(dataUser),
  getUserById: async (req, res) => {
    const paramsId = await req.params.id;
    const filteredData = await dataUser.filter(
      (data) => data.id == parseInt(paramsId)
    );
    return res.json(filteredData);
  },
  postUser: async (req, res) => {
    const { id, firstName, lastName, role } = await req.body;
    try {
           const user = {
               id,
               firstName,
               lastName,
               role,
             };
          const pushData = await dataUser.push(user);
      
      return res.json(dataUser);
    } catch (error) {
      console.log(error);
    }
  },
  deleteUser: async (req, res) => {
    try {
      const paramsId = await req.params.id;

      const indexDataToRemove = dataUser.findIndex(
        (data) => data.id == parseInt(paramsId)
      );
      if (indexDataToRemove !== -1) {
        const deletedProduct = dataUser.splice(indexDataToRemove, 1);
        return res.json(dataUser);
      }
      return res.end("id not found");
    } catch (error) {
      console.log(error);
    }
  },
  updateUser: async (req, res) => {
    try {
      const paramsId = await parseInt(req.params.id);
      const { firstName, lastName, role } = req.body;
      const user = {
        id: paramsId,
        firstName,
        lastName,
        role,
      };
      const indexDataToUpdate = await dataUser.findIndex(
        (data) => data.id == paramsId
      );
      dataUser[indexDataToUpdate] = user;
      if (indexDataToUpdate !== -1) {
        res.json(dataUser);
      }
      return res.json({message:"id not found"});
    } catch (err) {
      console.log(err);
    }
  },
};
