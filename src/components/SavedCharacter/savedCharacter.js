import $ from 'jquery';
import './savedCharacter.scss';

const savedCharactersArray = [];

const printSavedCharacters = () => {
  let domString = '';
  savedCharactersArray.forEach((savedCharacter) => {
    domString += `
      <div class="card saved-card col-2 m-4">
        <img class="saved-head" src="${savedCharacter.savedHead}">
        <img class="saved-torso" src="${savedCharacter.savedTorso}">
        <img class="saved-leg" src="${savedCharacter.savedLeg}">
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
