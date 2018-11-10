import 'bootstrap';
import './index.scss';
import loadLegos from './helpers/legosLoader';
import clickyHead from './components/Selectors/headSelector';
import clickyTorso from './components/Selectors/torsoSelector';
import clickyLeg from './components/Selectors/legSelector';
import saveButtonEvent from './components/SavedCharacter/savedCharacter';

const initializeApp = () => {
  loadLegos();
  clickyHead();
  clickyTorso();
  clickyLeg();
  saveButtonEvent();
};

initializeApp();
