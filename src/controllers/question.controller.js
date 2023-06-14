import { STATUS } from "../configs/status";
import { responseError, responseSuccess } from "../helpers/response";
import questionRepository from "../repositories/question.repository";

// *************************************** API COMMON ***************************************

// [GET] api/question/:id
export const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await questionRepository.findById(id);

    if(!data){
      const error = {status:STATUS.NOT_FOUND, message: "Không tìm thấy câu hỏi"};
    return responseError(res, error);
    }

    const response = {
      data,
      message: "Tìm câu hỏi theo mã id thành công",
    };
    return responseSuccess(res, response);

  } catch (error) {
    return responseError(res, error);
  } 
};

// [GET] api/question
export const read = async (req, res) => {
    try {
      const data = await questionRepository.read()
  
      const response = {
        data,
        message: "Lấy danh sách câu hỏi thành công",
      };
  
      return responseSuccess(res, response);
    } catch (error) {
      return responseError(res, error);
    } 
  };

// *************************************** API ADMIN ***************************************

// [POST] api/admin/question/create
export const create = async (req, res) => {
  try {
    const body = req.body;
    const data = await questionRepository.createQuestion(body);

    const response = {
      data,
      message: "Tạo câu hỏi thành công",
    };

    return responseSuccess(res, response);
  } catch (error) {
    return responseError(res, error);
  }
};

// [PUT] api/admin/question/update/:id
export const update = async (req, res) => {
  try {
    const body = req.body;
    const { id } = req.params;
    const data = await questionRepository.updateQuestion(id, body);

    const response = {
      data,
      message: "Cập nhật câu hỏi thành công",
    };

    return responseSuccess(res, response);
  } catch (error) {
    return responseError(res, error);
  }
};

// [DELETE] api/admin/question/remove/:id
export const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await questionRepository.deleteQuestion(id);

    const response = {
      data,
      message: "Xóa câu hỏi thành công",
    };

    return responseSuccess(res, response);
  } catch (error) {
    return responseError(res, error);
  }
};
