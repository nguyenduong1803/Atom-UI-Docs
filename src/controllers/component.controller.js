import { STATUS } from "../configs/status";
import { responseError, responseSuccess } from "../helpers/response";
import componentRepository from "../repositories/component.repository";

// *************************************** API COMMON ***************************************

// [GET] api/component?name=
export const read = async (req, res) => {
  try {
    const search = req?.query.name;
    if (search) {
      const data = await componentRepository.findName(search);
      const response = {
        data,
        message: "Lấy danh sách component thành công",
      };
      return responseSuccess(res, response);
    }

    const data = await componentRepository.read();
    const response = {
      data,
      message: "Lấy danh sách component thành công",
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

    if (!data) {
      const error = {
        status: STATUS.NOT_FOUND,
        message: "Không tìm thấy component",
      };
      return responseError(res, error);
    }

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
    const { path } = req.query;
    console.log(findByPath);
    const data = await componentRepository.findByPath(path);

    if (!data) {
      const error = {
        status: STATUS.NOT_FOUND,
        message: "Không tìm thấy component",
      };
      return responseError(res, error);
    }

    const response = {
      data,
      message: "Tìm component theo đường dẫn thành công",
    };

    return responseSuccess(res, response);
  } catch (error) {
    return responseError(res, error);
  }
};

// *************************************** API ADMIN ***************************************

// [POST] api/admin/component/create
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

// [PUT] api/admin/component/update/:id
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

// [DELETE] api/admin/component/remove/:id
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
