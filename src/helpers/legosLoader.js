import parts from '../data/partsData';
import dropdown from '../components/Dropdown/dropdown';

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

const loadLegos = () => {
  loadHeads();
  loadTorsos();
  loadLegs();
};

export default loadLegos;
