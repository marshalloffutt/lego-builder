import $ from 'jquery';
import parts from '../../data/partsData';
import displays from '../LegoCharacter/legoCharacter';

const selectedLeg = (clickedLegId) => {
  parts.getLegs().then((legsArray) => {
    const allLegs = legsArray.data;
    const clickedLeg = allLegs.filter(leg => leg.id === clickedLegId);
    displays.displaySelectedLeg(clickedLeg);
  });
};

const clickyLeg = () => {
  $('#legsChoices').on('click', (e) => {
    const clickedLegId = $(e.target).closest('a').attr('id');
    selectedLeg(clickedLegId);
  });
};

export default clickyLeg;
