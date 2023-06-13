import { responseError, responseSuccess } from "../helpers/response";
import componentRepository from "../repositories/component.repository";

// [POST] api/component/create
export const create = async (req, res) => {
  try {
    const body = req.body;
    const data = await componentRepository.createComponent(body);

    const response = {
      data,
      message: "Tạo component thành công",
    };

    return responseSuccess(res, response);
  } catch (error) {
    return responseError(res, error);
  }
};

// [GET] api/component/:id
export const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await componentRepository.findById(id);

    const response = {
      data,
      message: "Tìm component theo mã id thành công",
    };

    return responseSuccess(res, response);
  } catch (error) {
    return responseError(res, error);
  } 
};

// [GET] api/component/path/:id
export const findByPath = async (req, res) => {
  try {
    const { path } = req.params;
    const data = await componentRepository.findByPath(path);

    const response = {
      data,
      message: "Tìm component theo đường dẫn thành công",
    };

    return responseSuccess(res, response);
  } catch (error) {
    return responseError(res, error);
  }
};

// [PUT] api/component/update/:id
export const update = async (req, res) => {
  try {
    const body = req.body;
    const { id } = req.params;
    const data = await componentRepository.updateComponent(id, body);

    const response = {
      data,
      message: "Cập nhật component thành công",
    };

    return responseSuccess(res, response);
  } catch (error) {
    return responseError(res, error);
  }
};

// [DELETE] api/component/delete/:id
export const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await componentRepository.deleteComponent(id);

    const response = {
      data,
      message: "Xóa component thành công",
    };

    return responseSuccess(res, response);
  } catch (error) {
    return responseError(res, error);
  }
};
