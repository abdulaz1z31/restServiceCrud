export async function getAllUsers(req, res, next) {
  try {
    res.status(200).send({
      status: "Success",
    });
  } catch (error) {
    next(error);
  }
}


export async function getUserById(req, res, next) {
  try {
    res.status(200).send({
      status: "Success",
    });
  } catch (error) {
    next(error);
  }
}

export async function createUser(req, res, next) {
  try {
    res.status(200).send({
      status: "Success",
    });
  } catch (error) {
    next(error);
  }
}


export async function updateUser(req, res, next) {
  try {
    res.status(200).send({
      status: 'Updated',
    });
  } catch (error) {
    next(error);
  }
}


export async function removeUser(req, res, next) {
  try {
    res.status(200).send({
      status: "Deleted",
    });
  } catch (error) {
    next(error);
  }
}

