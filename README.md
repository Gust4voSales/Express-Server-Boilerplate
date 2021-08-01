<div align="center">
  <h1>Express Project Template</h1>
</div>

<p align="center">This repository will help you setting up an Express server faster</p>

## 📜 About
**MASTER branch features:**
- Initial Express setup
- Typescript setup
- Folder structure setup
- ```package.json``` scripts setup
- Error handling setup
- .env setup

**TYPEORM branch features:**
- All master's branch features
- Typeorm setup 
- ```package.json``` scripts setup taking into account typeorm
- Basic example included (create Book, list Books)

## ⚙ How to use
1. First clone the repository branch you want with <br />```git clone --single-branch --branch <branchname> https://github.com/Gust4voSales/Express-Server-Boilerplate.git```
2. Then remove the remote reference to this repository ```git remote remove origin```
3. The local branch's name from your project will be the same as the one you've cloned, so optionally rename the local branch name (to master for example) ```git branch -m <new_branch_name>```
4. ```yarn``` to install all dependecies
5. Create a ```.env``` file in the root directory and fill it in like ```.env.example```
6. Now you're good to go

## 🧠 ```package.json``` scripts 
- ```yarn dev``` will start the server in development mode. The project will reload automatically due to changes in files (thanks to ts-node-dev lib already installed)
- ```yarn build``` will compile all the project to a ```./dist``` folder
- ```yarn start``` before this command,  ```yarn prestart``` hook will run to make sure the project is compiled (in the typeorm branch is also going to ensure the migrations run before starting) and the it will start the server

## ❗ ATTENTION
To run ```yarn start``` or manually run the compiled version from the server (```./dist/src/server.js```), make sure the node enviroment is set to production, if necessary, manually change ```NODE_ENV``` from ```.env``` file to production 
