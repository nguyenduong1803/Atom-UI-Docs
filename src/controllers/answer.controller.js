import { STATUS } from "../configs/status";
import { responseError, responseSuccess } from "../helpers/response";
import answerRepository from "../repositories/answer.repository";

// *************************************** API COMMON ***************************************

// [GET] api/answer/:id
export const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await answerRepository.findById(id);

    if(!data){
      const error = {status:STATUS.NOT_FOUND, message: "Không tìm thấy câu trả lời"};
    return responseError(res, error);
    }

    const response = {
      data,
      message: "Tìm câu trả lời theo mã id thành công",
    };
    return responseSuccess(res, response);

  } catch (error) {
    return responseError(res, error);
  } 
};

// [GET] api/answer
export const read = async (req, res) => {
    try {
      const data = await answerRepository.read()
  
      const response = {
        data,
        message: "Lấy danh sách trả lời thành công",
      };
  
      return responseSuccess(res, response);
    } catch (error) {
      return responseError(res, error);
    } 
  };
// [GET] api/answer/question-id/:id
export const findByQuestionId = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await answerRepository.findByQuestionId(id)

      if(!data){
        const error = {status:STATUS.NOT_FOUND, message: "Không tìm thấy câu trả lời"};
      return responseError(res, error);
      }

      const response = {
        data,
        message: "Lấy danh sách trả lời theo câu hỏi thành công",
      };
  
      return responseSuccess(res, response);
    } catch (error) {
      return responseError(res, error);
    } 
  };

// *************************************** API ADMIN ***************************************

// [POST] api/admin/answer/create
export const create = async (req, res) => {
  try {
    const body = req.body;
    const data = await answerRepository.createAnswer(body);

    const response = {
      data,
      message: "Tạo câu trả lời thành công",
    };

    return responseSuccess(res, response);
  } catch (error) {
    return responseError(res, error);
  }
};

// [PUT] api/admin/answer/update/:id
export const update = async (req, res) => {
  try {
    const body = req.body;
    const { id } = req.params;
    const data = await answerRepository.updateAnswer(id, body);

    const response = {
      data,
      message: "Cập nhật câu trả lời thành công",
    };

    return responseSuccess(res, response);
  } catch (error) {
    return responseError(res, error);
  }
};

// [DELETE] api/admin/answer/remove/:id
export const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await answerRepository.deleteAnswer(id);

    const response = {
      data,
      message: "Xóa câu trả lời thành công",
    };

    return responseSuccess(res, response);
  } catch (error) {
    return responseError(res, error);
  }
};
