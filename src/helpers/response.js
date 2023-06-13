import { STATUS } from "../configs/status";

export class ErrorHandler extends Error {
  status;
  error;
  constructor(status, error) {
    super();
    this.status = status;
    this.error = error;
  }
}

export const responseError = (res, error) => {
  if (error instanceof ErrorHandler) {
    // return res.status(status).send({ message: "Error mongoose" });
    const status = error.status;
    // Case just string
    if (typeof error.error === "string") {
      const message = error.error;
      return res.status(status).send({ message });
    }
    // Case error is object
    const errorObject = error.error;
    return res.status(status).send({
      message: "Lỗi",
      data: errorObject,
    });
  }
  return res
    .status(STATUS.INTERNAL_SERVER_ERROR)
    .send({ message: error.message });
};

export const responseSuccess = (res, data) => {
  return res.status(STATUS.OK).send(data);
};
