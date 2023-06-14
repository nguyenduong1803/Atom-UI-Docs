// src/repositories/AnswerRepository.js

import AnswerModel from "../database/models/answer.model";

class AnswerRepository {
  async findById(id) {
    return AnswerModel.findById(id);
  }

  async read() {
    return AnswerModel.find({});
  }

  async findByQuestionId(id) {
    return AnswerModel.find({question_id:id});
  }

  async createAnswer(data) {
    return await new AnswerModel(data).save();
  }

  async updateAnswer(id, data) {
    return AnswerModel.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteAnswer(id) {
    return AnswerModel.findByIdAndDelete(id);
  }
}

const answerRepository = new AnswerRepository();
export default answerRepository;
