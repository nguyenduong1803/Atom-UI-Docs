// src/repositories/ComponentRepository.js

import ComponentModel from "../database/models/component.model";

class ComponentRepository {
  async read(obj = {}) {
    return ComponentModel.find(obj);
  }

  async findById(id) {
    return ComponentModel.findById(id);
  }

  async findByPath(path) {
    return ComponentModel.findOne({ path });
  }

  async findName(search) {
    return ComponentModel.find({
      name: { $regex: search, $options: "i" },
    }).select("name path");
  }

  async createComponent(data) {
    return await new ComponentModel(data).save();
  }

  async updateComponent(id, data) {
    return ComponentModel.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteComponent(id) {
    return ComponentModel.findByIdAndDelete(id);
  }
}

const componentRepository = new ComponentRepository();
export default componentRepository;
