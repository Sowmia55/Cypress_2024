# Cypress_2024

This repo is based on - https://cognizant.udemy.com/course/cypress-tutorial/learn/lecture/15647598#overview

Learn writing fast and robust Automated (UI + Integration) Tests using Cypress V13 with Mocha and Cucumber frameworks ; Instructor - Rahul Shetty

npm -i init - creats package.json
npm install cypress --save-dev

node version should be - node -v
v16.13.2
npm version should be - npm -v
8.5.4


npm init - package.json will be created
npm install cypress -
node_modules,
package-lock.json will be created
node_modules>>cypress>>lib>>tasks>>verify.js>>update timeout as- 200000
npx cypress open
cypress folder,
cypress.json will be created

after cloning - npm install (to install dependency)

npm i typescript - install typescript
tsc --init 

javascript test frameword- jasmine or mocha
We are using mocha here
describe,it from MOCHA
expected from chai

npm i --save-dev @types/mocha

npx cypress run --headed --browser edge

cypress supports only - CSS selector

_______________________
id           | #searchbox 
_____________|___________
className    | .searchbox
_____________|________
with tag name| input.searchbox
<input>
______________________________
multiple value | input[type = 'searchbox']
_______________|__________________________  
parent to child| input a (give a space b/w each tags)  >> tr td         
_______________|________________
2nd child of td| tr td:nth-child(2)
_______________|____________________
sibling        | cy.get().next()

Cypress in asynchronous in nature.Every command hits the server in millisend gap.
What makes cypress ahndle asynchro=nous nature?? 
Cypress will queue the commands and will begin run in sequntial order.
Every step returns promise, it would return resolved. this is achieved by [.then()-this is hidden for us]
if promise is resolved it means 
if promise is rejection it means 
if promise is pending it means 


to automate frames 
npm install -D cypress-iframe