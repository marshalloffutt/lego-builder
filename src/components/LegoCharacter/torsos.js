import parts from '../../data/partsData';

const loadTorsos = () => {
  parts.getTorsos()
    .then((torsosArray) => {
      const allTorsos = torsosArray.data;
      return allTorsos;
    })
    .catch((error) => {
      console.error(error);
    });
};
