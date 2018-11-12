import axios from 'axios';
import apiKeys from '../../db/apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getHeads = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/heads.json`)
    .then((result) => {
      const allHeadsObject = result.data;
      const allHeadsArray = [];
      if (allHeadsObject != null) {
        Object.keys(allHeadsObject).forEach((headId) => {
          const newHead = allHeadsObject[headId];
          newHead.id = headId;
          allHeadsArray.push(newHead);
        });
        console.log(allHeadsArray);
      }
      resolve(allHeadsArray);
    })
    .catch((err) => {
      reject(err);
    });
});

const getTorsos = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/torsos.json`)
    .then((result) => {
      const allTorsosObject = result.data;
      const allTorsosArray = [];
      if (allTorsosObject != null) {
        Object.keys(allTorsosObject).forEach((torsoId) => {
          const newTorso = allTorsosObject[torsoId];
          newTorso.id = torsoId;
          allTorsosArray.push(newTorso);
        });
        console.log(allTorsosArray);
      }
      resolve(allTorsosArray);
    })
    .catch((err) => {
      reject(err);
    });
});

const getLegs = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/legs.json`)
    .then((result) => {
      const allLegsObject = result.data;
      const allLegsArray = [];
      if (allLegsObject != null) {
        Object.keys(allLegsObject).forEach((legId) => {
          const newLeg = allLegsObject[legId];
          newLeg.id = legId;
          allLegsArray.push(newLeg);
        });
        console.log(allLegsArray);
      }
      resolve(allLegsArray);
    })
    .catch((err) => {
      reject(err);
    });
});

// const getHeads = () => axios.get('http://localhost:3003/heads');
// const getTorsos = () => axios.get('http://localhost:3003/torsos');
// const getLegs = () => axios.get('http://localhost:3003/legs');


export default {
  getHeads,
  getTorsos,
  getLegs,
};
