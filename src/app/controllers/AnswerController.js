import * as Yup from 'yup';
import Answer from '../models/Answer';

class AnswerController {
  async store(req, res) {
    const schema = Yup.object().shape({
      question_id: Yup.number().required(),
      text: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: 'Validations fails in new question' });
    }

    try {
      const createdAnswer = await Answer.create(req.body);
      return res.json(createdAnswer);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: 'Fail at add new answer' });
    }
  }

  async index(req, res) {
    try {
      const questions = await Answer.findAll({
        include: [
          {
            association: 'answers',
            order: [['createdAt', 'ASC']],
          },
        ],
      });

      return res.json(questions);
    } catch (err) {
      return res.status(400).json({ error: 'Fail to load all questions' });
    }
  }
}

export default new AnswerController();
