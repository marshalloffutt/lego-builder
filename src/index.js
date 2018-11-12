// import 'bootstrap';
import firebase from 'firebase/app';
import './index.scss';
import apiKeys from '../db/apiKeys.json';
import loadLegos from './helpers/legosLoader';
import clickyHead from './components/Selectors/headSelector';
import clickyTorso from './components/Selectors/torsoSelector';
import clickyLeg from './components/Selectors/legSelector';
import saveButtonEvent from './components/SavedCharacter/savedCharacter';
import randomizeButtonEvent from './components/Randomizer/randomizer';

const initializeApp = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  loadLegos();
  clickyHead();
  clickyTorso();
  clickyLeg();
  saveButtonEvent();
  randomizeButtonEvent();
};

initializeApp();
