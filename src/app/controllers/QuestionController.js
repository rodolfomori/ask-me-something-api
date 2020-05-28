import * as Yup from 'yup';
import Question from '../models/Question';

class QuestionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      subject: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: 'Validations fails in new question' });
    }

    try {
      console.log(req.body);
      const createdQuestion = await Question.create(req.body);
      return res.json(createdQuestion);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: 'Fail at add new question' });
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

  // async show(req, res) {
  //   const modality = await Modality.findOne({
  //     where: { id: req.params.id },
  //   });

  //   return res.json(modality);
  // }
}

export default new QuestionController();
