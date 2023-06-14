import { responseError, responseSuccess } from "../helpers/response";
import classListRepository from "../repositories/classList.repository";

// *************************************** API COMMON ***************************************

// [GET] api/class-list/:id
export const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await classListRepository.findById(id);

    if(!data){
      const error = { message: "Không tìm thấy class"};
    return responseError(res, error);
    }

    const response = {
      data,
      message: "Tìm class theo mã id thành công",
    };
    return responseSuccess(res, response);

  } catch (error) {
    return responseError(res, error);
  } 
};

// [GET] api/class-list
export const read = async (req, res) => {
    try {
      const data = await classListRepository.read()
  
      const response = {
        data,
        message: "Lấy danh sách class thành công",
      };
  
      return responseSuccess(res, response);
    } catch (error) {
      return responseError(res, error);
    } 
  };

// *************************************** API ADMIN ***************************************

// [POST] api/admin/class-list/create
export const create = async (req, res) => {
  try {
    const body = req.body;
    const data = await classListRepository.createClassList(body);

    const response = {
      data,
      message: "Tạo class thành công",
    };

    return responseSuccess(res, response);
  } catch (error) {
    return responseError(res, error);
  }
};

// [PUT] api/admin/class-list/update/:id
export const update = async (req, res) => {
  try {
    const body = req.body;
    const { id } = req.params;
    const data = await classListRepository.updateClassList(id, body);

    const response = {
      data,
      message: "Cập nhật class thành công",
    };

    return responseSuccess(res, response);
  } catch (error) {
    return responseError(res, error);
  }
};

// [DELETE] api/admin/class-list/remove/:id
export const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await classListRepository.deleteClassList(id);

    const response = {
      data,
      message: "Xóa class thành công",
    };

    return responseSuccess(res, response);
  } catch (error) {
    return responseError(res, error);
  }
};
