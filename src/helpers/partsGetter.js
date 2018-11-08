import parts from '../data/partsData';

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

const loadTorsos = () => {
  parts.getTorsos()
    .then((torsosArray) => {
      const allTorsos = torsosArray;
      return allTorsos;
    })
    .catch((error) => {
      console.error(error);
    });
};

const loadLegs = () => {
  parts.getLegs()
    .then((legsArray) => {
      const allLegs = legsArray;
      return allLegs;
    })
    .catch((error) => {
      console.error(error);
    });
};

export default {
  loadHeads,
  loadTorsos,
  loadLegs,
};
