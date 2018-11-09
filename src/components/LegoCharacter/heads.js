import $ from 'jquery';
import parts from '../../data/partsData';

const loadHeads = () => {
  parts.getHeads()
    .then((headsArray) => {
      const allHeads = headsArray.data;
      return allHeads;
    })
    .catch((error) => {
      console.error(error);
    });
};
