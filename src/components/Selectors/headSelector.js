import $ from 'jquery';
import parts from '../../data/partsData';
import displaySelectedHead from '../LegoCharacter/legoCharacter';

const selectedHead = (clickedHeadId) => {
  parts.getHeads().then((headsArray) => {
    const allHeads = headsArray.data;
    const clickedHead = allHeads.filter(head => head.id === clickedHeadId);
    displaySelectedHead(clickedHead);
  });
};

const clickyHead = () => {
  $('#headsChoices').on('click', (e) => {
    const clickedHeadId = $(e.target).closest('a').attr('id');
    selectedHead(clickedHeadId);
  });
};

export default clickyHead;
