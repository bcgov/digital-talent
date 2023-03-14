#!/bin/bash
echo "*************************************************************"
echo "*                Cypress Configurator                       *"
echo "*************************************************************"
rm -f installconfig.sh
touch installconfig.sh
chmod +x installconfig.sh

read -p "What is your path for your root testing directory [$PWD]? " testpath
testpath=${testpath:-$PWD}
read -p "Do you use JavaScript([js])/TypeScript(ts)?" code
code=${code:-"js"}
if [[ $code == 'ts' ]]
then
  echo "npm install --save-dev typescript" >> installconfig.sh
fi

echo "npm install --save-dev cypress" >> installconfig.sh

read -p "Simple install or advanced? ([s]/a)?" level
level=${level:-"s"}
if [[ $level == 'a' ]]
then
  read -p "Do you need keycloak support? ([y]/n)" keycloak
  keycloak=${keycloak:-"y"}
  if [[ $keycloak == 'y' ]]
  then
    echo "npm install --force --save-dev cypress-keycloak " >> installconfig.sh
  fi
  read -p "Do you need file upload support? ([y]/n)" fileupload
  fileupload=${fileupload:-"y"}
  if [[ $fileupload == 'y' ]]
  then
    echo "npm install --force --save-dev cypress-file-upload" >> installconfig.sh
  fi
  read -p "Do you need randomized input support? ([y]/n)" random
  random=${random:-"y"}
  if [[ $random == 'y' ]]
  then
    echo "npm install --force --save-dev @faker-js/faker" >> installconfig.sh
  fi
  read -p "Do you need API testing support? ([y]/n)" api
  api=${api:-"y"}
  if [[ $api == 'y' ]]
  then
    echo "npm install --force --save-dev cypress-plugin-api" >> installconfig.sh
  fi
fi
echo ""
cat installconfig.sh
echo ""
echo "*************************************************************"
echo "*   Your selections have been stored in installconfig.sh    *"
echo "*************************************************************"
echo ""
read -p "Do you want to run this script now? ([y]/n)" answer
answer=${answer:-"y"}
if [[ $answer == 'y' ]]
then
 source $testpath/installconfig.sh
 rm -f $testpath/installconfig.sh
 npm audit fix --force
 if [[ $code == 'ts' ]]
 then
   curl 'https://raw.githubusercontent.com/bcgov/automated-testing/main/tool-guidance/library/tsconfig.json' > $testpath/tsconfig.json
   curl 'https://raw.githubusercontent.com/bcgov/automated-testing/main/tool-guidance/library/tslint.json' > $testpath/tslint.json
 fi
 npx cypress open
 touch $testpath/sample.cypress.env.json
 mkdir $testpath/cypress/e2e/examples
  if [[ $fileupload == 'y' ]]
  then
    curl 'https://raw.githubusercontent.com/bcgov/automated-testing/main/tool-guidance/library/file-upload/commands.js' > $testpath/cypress/support/commands.$code
    mkdir $testpath/cypress/e2e/examples/file-upload-example
    curl 'https://raw.githubusercontent.com/bcgov/automated-testing/main/tool-guidance/library/file-upload/README.md' > $testpath/cypress/e2e/examples/file-upload-example/README.md
  fi 
  if [[ $random == 'y' ]]
  then
    mkdir $testpath/cypress/e2e/examples/faker-example
    curl 'https://raw.githubusercontent.com/bcgov/automated-testing/main/tool-guidance/library/faker/README.md' > $testpath/cypress/e2e/examples/faker-example/README.md
    curl 'https://raw.githubusercontent.com/bcgov/automated-testing/main/tool-guidance/library/faker/example/faker-example.cy.js' > $testpath/cypress/e2e/examples/faker-example/faker-example.cy.$code
  fi 
  if [[ $api == 'y' ]]
  then
    mkdir $testpath/cypress/e2e/examples/api-example
    curl 'https://raw.githubusercontent.com/bcgov/automated-testing/main/tool-guidance/library/api/example/api-example.cy.js' > $testpath/cypress/e2e/examples/api-example/api-example.cy.$code
    curl 'https://raw.githubusercontent.com/bcgov/automated-testing/main/tool-guidance/library/api/commands.js' > $testpath/cypress/support/commands.$code
    curl 'https://raw.githubusercontent.com/bcgov/automated-testing/main/tool-guidance/library/api/README.md' > $testpath/cypress/e2e/examples/api-example/README.md
  fi 
  if [[ $keycloak == 'y' ]]
  then
    curl 'https://raw.githubusercontent.com/bcgov/automated-testing/main/tool-guidance/library/keycloak/commands.js' > $testpath/cypress/support/commands.$code
    curl 'https://raw.githubusercontent.com/bcgov/automated-testing/main/tool-guidance/library/keycloak/sample.cypress.env.json' > $testpath/sample.cypress.env.json
    mkdir $testpath/cypress/e2e/examples/keycloak-example
    curl 'https://raw.githubusercontent.com/bcgov/automated-testing/main/tool-guidance/library/keycloak/README.md' > $testpath/cypress/e2e/examples/keycloak-example/README.md
    curl 'https://raw.githubusercontent.com/bcgov/automated-testing/main/tool-guidance/library/keycloak/example/keycloak-example.cy.js' > $testpath/cypress/e2e/examples/keycloak-example/keycloak-example.cy.$code
  fi 
  if [[ $code == 'ts' ]]
  then
    curl 'https://raw.githubusercontent.com/bcgov/automated-testing/main/tool-guidance/library/cypress.config.ts' > $testpath/cypress.config.ts
    cd $testpath/cypress
    du -a . | grep .cy.js | awk '{print "mv -v " $2 " " $2 }' | sed 's/\(\b[\.]js$\)/\.ts/g' | bash
  else
    curl 'https://raw.githubusercontent.com/bcgov/automated-testing/main/tool-guidance/library/cypress.config.js' > $testpath/cypress.config.js
  fi
  curl 'https://raw.githubusercontent.com/bcgov/automated-testing/main/tool-guidance/library/waitforconnection.sh' > $testpath/waitforconnection.sh
echo ""
echo "Install Complete!"
else
  echo ""
  echo "Not Installed!"
fi
