'use strict';
var wizardCount = 4;
var userSetup = document.querySelector('.setup');
var userSetupFooter = document.querySelector('.setup-similar');
var setupSimilarList = userSetupFooter.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
var wizardSource = {
  name: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  surname: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  coatColor: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  eyesColor: ['black', 'red', 'blue', 'yellow', 'green']
};

var getRandomFromArray = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

var wizards = [];

var generateData = function () {
  for (var i = 0; i < wizardCount; i++) {
    wizards.push({
      name: getRandomFromArray(wizardSource.name) + ' ' + getRandomFromArray(wizardSource.surname),
      coat: getRandomFromArray(wizardSource.coatColor),
      eye: getRandomFromArray(wizardSource.eyesColor)
    });
  }
};

var renderWizard = function (data) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = data.name;
  wizardElement.querySelector('.wizard-coat').style.fill = data.coat;
  wizardElement.querySelector('.wizard-eyes').style.fill = data.eye;
  return wizardElement;
};

var createWizardBlock = function () {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizardCount; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  setupSimilarList.appendChild(fragment);
};

generateData();
createWizardBlock();

userSetup.classList.remove('hidden');
userSetupFooter.classList.remove('hidden');
