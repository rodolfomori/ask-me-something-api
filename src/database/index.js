import Sequelize from 'sequelize';

import Answer from '../app/models/Answer';
import Question from '../app/models/Question';

import databaseConfig from '../config/database';

const models = [
  Answer,
  Question
];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(
        model => model?.associate && model.associate(this.connection.models)
      );
  }
}
export default new Database();
