import $ from 'jquery';

const displaySelectedHead = (clickedHead) => {
  let domString = '';
  domString += `<img src=${clickedHead[0].imageUrl}>`;
  let nameString = '';
  nameString += `<p>${clickedHead[0].name}</p>`;
  $('#heads').html(domString);
  $('#head-name').html(nameString);
};

const displaySelectedTorso = (clickedTorso) => {
  let domString = '';
  domString += `<img src=${clickedTorso[0].imageUrl}>`;
  let nameString = '';
  nameString += `<p>${clickedTorso[0].name}</p>`;
  $('#torsos').html(domString);
  $('#torso-name').html(nameString);
};

const displaySelectedLeg = (clickedLeg) => {
  let domString = '';
  domString += `<img src=${clickedLeg[0].imageUrl}>`;
  let nameString = '';
  nameString += `<p>${clickedLeg[0].name}</p>`;
  $('#legs').html(domString);
  $('#leg-name').html(nameString);
};

export default {
  displaySelectedHead,
  displaySelectedTorso,
  displaySelectedLeg,
};
