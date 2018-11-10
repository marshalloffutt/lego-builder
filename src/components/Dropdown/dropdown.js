import 'bootstrap';
import $ from 'jquery';
import './dropdown.scss';

const headsInDropdown = (heads) => {
  let domString = '';
  heads.forEach((head) => {
    domString += `<a class="dropdown-item" id="${head.id}"><img class="small-img" src="${head.imageUrl}"></a>`;
  });
  $('#headsChoices').html(domString);
};

const torsosInDropdown = (torsos) => {
  let domString = '';
  torsos.forEach((torso) => {
    domString += `<a class="dropdown-item" id="${torso.id}"><img class="small-img" src="${torso.imageUrl}"></a>`;
  });
  $('#torsosChoices').html(domString);
};

const legsInDropdown = (legs) => {
  let domString = '';
  legs.forEach((leg) => {
    domString += `<a class="dropdown-item" id="${leg.id}"><img class="small-img" src="${leg.imageUrl}"></a>`;
  });
  $('#legsChoices').html(domString);
};

export default {
  headsInDropdown,
  torsosInDropdown,
  legsInDropdown,
};
