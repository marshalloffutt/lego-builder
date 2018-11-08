import parts from '../../data/partsData';

const loadHeads = () => {
  parts.getHeads()
    .then((data) => {
      console.log(data.data);
    })
    .catch((error) => {
      console.error(error);
    });
};

const loadTorsos = () => {
  parts.getTorsos()
    .then((data) => {
      console.log(data.data);
    })
    .catch((error) => {
      console.error(error);
    });
};

const loadLegs = () => {
  parts.getLegs()
    .then((data) => {
      console.log(data.data);
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
