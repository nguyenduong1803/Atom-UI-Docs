// src/repositories/userRepository.js

import userModel from "../database/models/userModel.model";

class UserRepository {
  async findById(userId) {
    return userModel.findById(userId);
  }

  async findByEmail(email) {
    return userModel.findOne({ email });
  }

  async createUser(userData) {
    return userModel.create(userData);
  }

  async updateUser(userId, userData) {
    return userModel.findByIdAndUpdate(userId, userData, { new: true });
  }

  async deleteUser(userId) {
    return userModel.findByIdAndDelete(userId);
  }
}

module.exports = new UserRepository();
