import parts from '../../data/partsData';
import dropdown from '../Dropdown/dropdown';

const loadHeads = () => {
  parts.getHeads()
    .then((headsArray) => {
      const allHeads = headsArray.data;
      dropdown.headsInDropdown(allHeads);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default loadHeads;
