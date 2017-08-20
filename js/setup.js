'use srtict';

var userSetup = document.querySelector('.setup');
var userSetupFooter = document.querySelector('.setup-similar');
var setupSimilarList = userSetupFooter.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
var setupSimilarLabel = similarWizardTemplate.querySelector('.setup-similar-label');
var wizardCoat = similarWizardTemplate.querySelector('.wizard-coat');
var wizardEye = similarWizardTemplate.querySelector('.wizard-eyes');
var wizards = [
  {
    name:  ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон' ],
    surname:  ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
    coatColor: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    eyesColor: ['black', 'red', 'blue', 'yellow', 'green']
},
  {
    name:  ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон' ],
    surname:  ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
    coatColor: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    eyesColor: ['black', 'red', 'blue', 'yellow', 'green']
},
  {
    name:  ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон' ],
    surname:  ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
    coatColor: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    eyesColor: ['black', 'red', 'blue', 'yellow', 'green']
},
  {
    name:  ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон' ],
    surname:  ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
    coatColor: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    eyesColor: ['black', 'red', 'blue', 'yellow', 'green']
}
];

var renderWizard = function (randName, randSurname, randCoat, randEyes) {
  similarWizardTemplate.cloneNode(true);
  for (var i = 0; i < 4; i++) {
    var randName = Math.floor(Math.random() * wizards[i].name.length);
    var randSurname = Math.floor(Math.random() * wizards[i].surname.length);
    var randCoat = Math.floor(Math.random() * wizards[i].coatColor.length);
    var randEyes = Math.floor(Math.random() * wizards[i].eyesColor.length);
    setupSimilarLabel.textContent = wizards[i].name[randName] + ' ' + wizards[i].surname[randSurname];
    wizardCoat.setAttribute('style', 'fill: '+ wizards[i].coatColor[randCoat] + ';');
    wizardEye.setAttribute('style', 'fill: ' + wizards[i].eyesColor[randEyes] + ';');
  }
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < 4; i++) {
  fragment.appendChild(renderWizard(randName, randSurname, randCoat, randEyes));
}
setupSimilarList.appendChild(fragment);
userSetup.classList.remove('hidden');
userSetupFooter.classList.remove('hidden');
