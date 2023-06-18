import mongoose from "mongoose";
import { STATUS } from "../configs/status";
import { responseError, responseSuccess } from "../helpers/response";
import componentDetailRepository from "../repositories/componentDetail.repository";

// *************************************** API COMMON ***************************************

// [GET] api/component-detail
export const read = async (req, res) => {
  try {
    const data = await componentDetailRepository.read();
    const id = req?.query.id;
    if (id) {
      const data = await componentDetailRepository.read({
        component_id: { $in: [mongoose.Types.ObjectId(id)] },
      });
      const response = {
        data,
        message: "Lấy danh sách component thành công 2",
      };
      return responseSuccess(res, response);
    }
    const response = {
      data,
      message: "Lấy danh sách component chi tiết thành công",
    };

    return responseSuccess(res, response);
  } catch (error) {
    return responseError(res, error);
  }
};

// [GET] api/component-detail/:id
export const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await componentDetailRepository.findById(id);

    if (!data) {
      const error = {
        status: STATUS.NOT_FOUND,
        message: "Không tìm thấy component",
      };
      return responseError(res, error);
    }

    const response = {
      data,
      message: "Tìm component chi tiết theo mã id thành công",
    };

    return responseSuccess(res, response);
  } catch (error) {
    return responseError(res, error);
  }
};

// [GET] api/component-detail/component-id/:id
export const findByComponentId = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await componentDetailRepository.findByComponentId(id);

    if (!data) {
      const error = {
        status: STATUS.NOT_FOUND,
        message: "Không tìm thấy component chi tiết",
      };
      return responseError(res, error);
    }

    const response = {
      data,
      message: "Tìm component chi tiết theo đường dẫn thành công",
    };

    return responseSuccess(res, response);
  } catch (error) {
    return responseError(res, error);
  }
};

// *************************************** API ADMIN ***************************************

// [POST] api/admin/component-detail/create
export const create = async (req, res) => {
  try {
    const body = req.body;
    const data = await componentDetailRepository.createComponent(body);

    const response = {
      data,
      message: "Tạo component chi tiết thành công",
    };

    return responseSuccess(res, response);
  } catch (error) {
    return responseError(res, error);
  }
};

// [PUT] api/admin/component-detail/update/:id
export const update = async (req, res) => {
  try {
    const body = req.body;
    const { id } = req.params;
    const data = await componentDetailRepository.updateComponent(id, body);

    const response = {
      data,
      message: "Cập nhật component chi tiết thành công",
    };

    return responseSuccess(res, response);
  } catch (error) {
    return responseError(res, error);
  }
};

// [DELETE] api/admin/component-detail/remove/:id
export const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await componentDetailRepository.deleteComponent(id);

    const response = {
      data,
      message: "Xóa component chi tiết thành công",
    };

    return responseSuccess(res, response);
  } catch (error) {
    return responseError(res, error);
  }
};
