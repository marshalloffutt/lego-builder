import $ from 'jquery';
import parts from '../../data/partsData';
import displays from '../LegoCharacter/legoCharacter';

const selectedHead = (clickedHeadId) => {
  parts.getHeads().then((headsArray) => {
    const allHeads = headsArray;
    const clickedHead = allHeads.filter(head => head.id === clickedHeadId);
    displays.displaySelectedHead(clickedHead);
  });
};

const clickyHead = () => {
  $('#headsChoices').on('click', (e) => {
    const clickedHeadId = $(e.target).closest('a').attr('id');
    selectedHead(clickedHeadId);
  });
};

export default clickyHead;
