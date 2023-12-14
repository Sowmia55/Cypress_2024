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

Notes:
1. Navigating to url - visit
2. Through command line, Cypress runs in headless in electron
3. Update configurations in cypress.json which over rides existing behaviour.
4. Cypress supports Css selectors only
5. We can see what happened on every step with screenshot and error messages in cypress
6. how to handle click, type, text()
7. Iterating over the aray of web elements using each
8. Cypress is asynchronus in nature and there is no guarantee in sequence of execution, but cypress takes care of it 
9. Promise comes with rejection, resolved,pending
.then()
10. Non cypress commands cannot resolve promise by themselves. We need to manually resolve it by then ()
11. Aliasing to reuse locators- 
12. Cypress auto accepts alerts and pop ups
13. Cypress have capability of browser events. window:alert is the event which get fired on alert open
14. So you are firing the event through cypress to get access to that alert
15. Cypress have ability to manipulate the DOM-
16. Yes you can traverse to sibling with next() and it works only on get
17. Mouse hover events are not supported in cypres. Alternatively use jquery or force click
18. Handle child windows
19. Handle frames


Best Practices in building Cypress Framework
1. Setting up test Hooks
2. Data driven testing with fixtures
3. Building Custom Cypress Commands
4. Parameterize test with multiple data sets
5. Understand the test debugging
6. Build page object design pattern for objects
7. Configuration changes in Cypress.config.js
8. Screenshots and video recording for test
9. Exploring Cypress Dashboard
10. Understand the environmental variables of cypress
12. Generate Excellent reports for test execution results
13. Integrate  cypress tests with JEnkins CI

Assertions - https://docs.cypress.io/guides/references/assertions
https://cloud.cypress.io/organizations/f7289fa6-91d4-4bc0-a06d-512433fe21bc/projects


Cypress with Typescript:
1. Create empty folder for a new project
2. Open the project folder in VS Code
3. Run commands:
   npm init -y
   npm install cypress
   npm instakk typescript
4. Initialize a new tsconfig.json file using command: npx tsc --init --tyores cyoress --lib don,es6
    Note:  this ensure that tyoes for cypress are accessible by typescript.These types depend on dom & es6, so we pass them as lib option to typescript
5. Open TestRunner using command: npx cypress open
