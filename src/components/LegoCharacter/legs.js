import parts from '../../data/partsData';

const loadLegs = () => {
  parts.getLegs()
    .then((legsArray) => {
      const allLegs = legsArray.data;
      return allLegs;
    })
    .catch((error) => {
      console.error(error);
    });
};
