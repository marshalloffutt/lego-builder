import $ from 'jquery';
import './legoCharacter.scss';

const initialHead = (heads) => {
  const domString = `<img class='lego-img' src=${heads[0].imageUrl}>`;
  $('#heads').html(domString);
  $('#head-name').html(heads[0].name);
};

const initialTorso = (torsos) => {
  const domString = `<img class='lego-img' src=${torsos[0].imageUrl}>`;
  $('#torsos').html(domString);
  $('#torso-name').html(torsos[0].name);
};

const initialLeg = (legs) => {
  const domString = `<img class='lego-img' src=${legs[0].imageUrl}>`;
  $('#legs').html(domString);
  $('#leg-name').html(legs[0].name);
};

const displaySelectedHead = (clickedHead) => {
  let domString = '';
  domString += `<img class='lego-img' src=${clickedHead[0].imageUrl}>`;
  let nameString = '';
  nameString += `<p>${clickedHead[0].name}</p>`;
  $('#heads').html(domString);
  $('#head-name').html(nameString);
};

const displaySelectedTorso = (clickedTorso) => {
  let domString = '';
  domString += `<img class='lego-img' src=${clickedTorso[0].imageUrl}>`;
  let nameString = '';
  nameString += `<p>${clickedTorso[0].name}</p>`;
  $('#torsos').html(domString);
  $('#torso-name').html(nameString);
};

const displaySelectedLeg = (clickedLeg) => {
  let domString = '';
  domString += `<img class='lego-img' src=${clickedLeg[0].imageUrl}>`;
  let nameString = '';
  nameString += `<p>${clickedLeg[0].name}</p>`;
  $('#legs').html(domString);
  $('#leg-name').html(nameString);
};

export default {
  displaySelectedHead,
  displaySelectedTorso,
  displaySelectedLeg,
  initialHead,
  initialTorso,
  initialLeg,
};
