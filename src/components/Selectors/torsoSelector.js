import $ from 'jquery';
import parts from '../../data/partsData';
import displays from '../LegoCharacter/legoCharacter';

const selectedTorso = (clickedTorsoId) => {
  parts.getTorsos().then((torsosArray) => {
    const allTorsos = torsosArray;
    const clickedTorso = allTorsos.filter(torso => torso.id === clickedTorsoId);
    displays.displaySelectedTorso(clickedTorso);
  });
};

const clickyTorso = () => {
  $('#torsosChoices').on('click', (e) => {
    const clickedTorsoId = $(e.target).closest('a').attr('id');
    selectedTorso(clickedTorsoId);
  });
};

export default clickyTorso;
