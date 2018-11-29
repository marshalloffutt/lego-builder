import $ from 'jquery';
import './savedCharacter.scss';

const savedCharactersArray = [];

const printSavedCharacters = () => {
  let domString = '';
  savedCharactersArray.forEach((savedCharacter) => {
    domString += `
      <div class="card saved-card mb-3 m-4 mt-2" style="width: 12rem;">
        <img class="thumb-img" src="${savedCharacter.savedHead}">
        <img class="thumb-img" src="${savedCharacter.savedTorso}">
        <img class="thumb-img" src="${savedCharacter.savedLeg}">
        <p class="mt-2">${savedCharacter.savedName}</p>
      </div>
      `;
  });
  $('#saved').html(domString);
};

const saveButtonEvent = () => {
  $('#saveButton').on('click', () => {
    const savedHead = $('#heads').find('img').attr('src');
    const savedTorso = $('#torsos').find('img').attr('src');
    const savedLeg = $('#legs').find('img').attr('src');
    const savedName = $('#name').text();
    savedCharactersArray.push({
      savedHead, savedTorso, savedLeg, savedName,
    });
    printSavedCharacters();
  });
};

export default saveButtonEvent;
