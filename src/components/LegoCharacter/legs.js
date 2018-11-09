import parts from '../../data/partsData';
import dropdown from '../Dropdown/dropdown';

const loadLegs = () => {
  parts.getLegs()
    .then((legsArray) => {
      const allLegs = legsArray.data;
      dropdown.legsInDropdown(allLegs);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default loadLegs;
