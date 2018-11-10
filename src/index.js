import 'bootstrap';
import './index.scss';
import loadLegos from './helpers/legosLoader';
import clickyHead from './components/Selectors/headSelector';
import clickyTorso from './components/Selectors/torsoSelector';

const initializeApp = () => {
  loadLegos();
  clickyHead();
  clickyTorso();
};

initializeApp();
