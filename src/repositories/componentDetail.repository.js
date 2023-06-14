// src/repositories/ComponentDetailRepository.js

import ComponentDetailModel from "../database/models/componentDetail.model";

class ComponentDetailRepository {
  async findById(id) {
    return ComponentDetailModel.findById(id);
  }

  async read() {
    return ComponentDetailModel.find({});
  }

  async findByComponentId(id) {
    return ComponentDetailModel.find({ component_id: id});
  }

  async createComponent(data) {
    return await new ComponentDetailModel(data).save();
  }

  async updateComponent(id, data) {
    return ComponentDetailModel.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteComponent(id) {
    return ComponentDetailModel.findByIdAndDelete(id);
  }
}

const componentDetailRepository = new ComponentDetailRepository();
export default componentDetailRepository;
