import $ from 'jquery';
import parts from '../../data/partsData';

const displayRandomizedHead = (randomizedHead) => {
  let domString = '';
  domString += `<img class='card-img-top head-img' src=${randomizedHead.imageUrl}>`;
  let nameString = '';
  nameString += `<p>${randomizedHead.name}</p>`;
  $('#heads').html(domString);
  $('#head-name').html(nameString);
};

const displayRandomizedTorso = (randomizedTorso) => {
  let domString = '';
  domString += `<img class='card-img-top head-img' src=${randomizedTorso.imageUrl}>`;
  let nameString = '';
  nameString += `<p>${randomizedTorso.name}</p>`;
  $('#torsos').html(domString);
  $('#torso-name').html(nameString);
};

const displayRandomizedLeg = (randomizedLeg) => {
  let domString = '';
  domString += `<img class='card-img-top head-img' src=${randomizedLeg.imageUrl}>`;
  let nameString = '';
  nameString += `<p>${randomizedLeg.name}</p>`;
  $('#legs').html(domString);
  $('#leg-name').html(nameString);
};

const randomizeHead = () => {
  parts.getHeads().then((headsArray) => {
    const allHeads = headsArray.data;
    const randomNumber = Math.floor(Math.random() * allHeads.length);
    const randomizedHead = allHeads[randomNumber];
    displayRandomizedHead(randomizedHead);
  });
};

const randomizeTorso = () => {
  parts.getTorsos().then((torsosArray) => {
    const allTorsos = torsosArray.data;
    const randomNumber = Math.floor(Math.random() * allTorsos.length);
    const randomizedTorso = allTorsos[randomNumber];
    displayRandomizedTorso(randomizedTorso);
  });
};

const randomizeLeg = () => {
  parts.getLegs().then((legsArray) => {
    const allLegs = legsArray.data;
    const randomNumber = Math.floor(Math.random() * allLegs.length);
    const randomizedLeg = allLegs[randomNumber];
    displayRandomizedLeg(randomizedLeg);
  });
};

const randomizeButtonEvent = () => {
  $('#randomizeButton').on('click', () => {
    randomizeHead();
    randomizeTorso();
    randomizeLeg();
  });
};

export default randomizeButtonEvent;