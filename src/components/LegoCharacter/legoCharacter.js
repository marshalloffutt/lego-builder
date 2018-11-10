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

export default {
  displaySelectedHead,
  displaySelectedTorso,
};
