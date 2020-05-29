import * as Yup from 'yup';
import Question from '../models/Question';

class QuestionController {
  async store(req, res) {
    console.log(req.body);
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      subject: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails in new answer' });
    }

    try {
      const createdQuestion = await Question.create(req.body);
      return res.json(createdQuestion);
    } catch (err) {
      return res.status(400).json({ error: 'Fail at add new answer' });
    }
  }

  async index(req, res) {
    try {
      const questions = await Question.findAll({
        include: [
          {
            association: 'answers',
          },
        ],
      });

      return res.json(questions);
    } catch (err) {
      return res.status(400).json({ error: 'Fail to load all questions' });
    }
  }
}

export default new QuestionController();
