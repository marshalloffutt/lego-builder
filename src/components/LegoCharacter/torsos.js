import parts from '../../data/partsData';
import dropdown from '../Dropdown/dropdown';

const loadTorsos = () => {
  parts.getTorsos()
    .then((torsosArray) => {
      const allTorsos = torsosArray.data;
      dropdown.torsosInDropdown(allTorsos);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default loadTorsos;
