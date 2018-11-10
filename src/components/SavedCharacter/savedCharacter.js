import $ from 'jquery';

const savedCharactersArray = [];

const printSavedCharacters = () => {
  let domString = '';
  savedCharactersArray.forEach((savedCharacter) => {
    domString += `
    <div class="card">
      <img class="saved-head" src="${savedCharacter.savedHead}">
      <img class="saved-torso" src="${savedCharacter.savedTorso}">
      <img class="saved-leg" src="${savedCharacter.savedLeg}">
      `;
  });
  $('#saved').html(domString);
};


const saveButtonEvent = () => {
  $('#saveButton').on('click', () => {
    const savedHead = $('#heads').find('img').attr('src');
    const savedTorso = $('#torsos').find('img').attr('src');
    const savedLeg = $('#legs').find('img').attr('src');
    savedCharactersArray.push({ savedHead, savedTorso, savedLeg });
    printSavedCharacters();
  });
};

export default saveButtonEvent;
