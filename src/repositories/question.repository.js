// src/repositories/QuestionRepository.js

import QuestionModel from "../database/models/question.model";

class QuestionRepository {
  async findById(id) {
    return QuestionModel.findById(id);
  }

  async read() {
    return QuestionModel.find({});
  }

  async createQuestion(data) {
    return await new QuestionModel(data).save();
  }

  async updateQuestion(id, data) {
    return QuestionModel.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteQuestion(id) {
    return QuestionModel.findByIdAndDelete(id);
  }
}

const questionRepository = new QuestionRepository();
export default questionRepository;
