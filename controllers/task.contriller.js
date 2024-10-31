export async function getAllTasks(req, res, next) {
    try {
      res.status(200).send({
        status: "Success",
      });
    } catch (error) {
      next(error);
    }
  }
  
  
  export async function getTaskById(req, res, next) {
    try {
      res.status(200).send({
        status: "Success",
      });
    } catch (error) {
      next(error);
    }
  }
  
  export async function createTask(req, res, next) {
    try {
      res.status(200).send({
        status: "Success",
      });
    } catch (error) {
      next(error);
    }
  }
  
  
  export async function updateTask(req, res, next) {
    try {
      res.status(200).send({
        status: 'Updated',
      });
    } catch (error) {
      next(error);
    }
  }
  
  
  export async function removeTask(req, res, next) {
    try {
      res.status(200).send({
        status: "Deleted",
        id: deleteData._id
      });
    } catch (error) {
      next(error);
    }
  }
  
  