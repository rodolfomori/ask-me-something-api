
<h1 align="center">
  <br>
  Ask Me Something API :interrobang:
</h1>

  [You are ONLINE, try Now](https://askmesomething.today/)  :tada:



<h4 align="center">
  A site where you can discover all the answers.
  
  
<p align="center">
  <a href="#rocket-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-use">How To Use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#result">Result</a>
</p>

## :rocket: Technologies

This project was developed with the following technologies:

- Node
- Express
- Sequelize
- Docker
- Docker Machine
- Docker Compose
- AWS EC2
- AWS RDS
- AWS API Gateway
- Postgres
- Yup
- Prettier
- [VS Code][vc] with [EditorConfig][vceditconfig] and [ESLint][vceslint]

## :information_source: How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js v10.16][nodejs] or higher + [Yarn
v1.13][yarn] or higher installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/rodolfomori/ask-me-something-api.git

# Go into the repository

# Install dependencies
$ yarn or npm install

# Run the api
$ yarn dev or npm run dev

```
<p> Routes </p>

```bash
 
     
   *GET* - api/question => show all the questions
   
   *POST* - api/question => insert a new questions
    exemple:
    {
    	 "title":"What time is it?",
	   "subject":"Everything"
    }
    
   *POST* - api/answer  => insert a new answer about a question
      exemple:
    {
	      "question_id":10,
	      "text":"it's 10 o'clock!"
    }

```



<p>If you want to run the project from a local or remote container, you can run the command:</p>

```bash

$ docker-compose up --build -d 

```




If you want to run the database (postgres) from a local or remote container, you can run the command:

```bash

$  docker run --name ask-me-postgres -e POSTGRES_PASSWORD=choose a password -p 5432:5432 -d postgres 

Choose your password, and change it in .env file.

Change the DB address with a new one in .env.

```





<h3>Folder structure. </h3>

```bash

.
├── README.md
├── npmrc
├── package-lock.json
├── package.json
└── src >> source code
│   ├── server.js ..................... app main entry point.
│   ├── app.js 
│   ├── routes.js 
│   ├── config
│   │   └── database.js .................. database config.
│   ├── database
│   │   └── index.js 
│   │   └── migrations 
│   └── app
│       └── constrollers 
│           ├── AnswerController.js 
│           └── QuestionController.js 
│    
├── .dockerignore
├── .env
├── .env.test.js
├── .eslintrc.js
├── .gitignore.js
├── .prettierrc.js
├── .sequelizerc.js
├── .docker-compose.yml.js
├── .Dockerfile.js
├── jest.config.js
├── nodemon.json.js
└── package.json

```

## :sunny: Result


<h3 align="center">Mobile</h3>
<h1 align="center">
    <img  alt="Ask me" src="https://github.com/rodolfomori/ask-me-something-interface/blob/master/src/assets/img/mobile.gif" />
    <br>
</h1>

  <h3 align="center">Desktop</h3>
<h1 align="center">
    <img alt="Ask me" src="https://github.com/rodolfomori/ask-me-something-interface/blob/master/src/assets/img/web.gif" width="700px"/>
    <br>
</h1>

Made with ♥ by Rodolfo Mori :wave: [Get in touch!](https://www.linkedin.com/in/rodolfomori/)

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
