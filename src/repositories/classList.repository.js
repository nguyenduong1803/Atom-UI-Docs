// src/repositories/ClassListRepository.js

import ClassListModel from "../database/models/classList.modal";

class ClassListRepository {
  async findById(id) {
    return ClassListModel.findById(id);
  }

  async read() {
    return ClassListModel.find({});
  }

  async createClassList(data) {
    return await new ClassListModel(data).save();
  }

  async updateClassList(id, data) {
    return ClassListModel.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteClassList(id) {
    return ClassListModel.findByIdAndDelete(id);
  }
}

const classListRepository = new ClassListRepository();
export default classListRepository;
