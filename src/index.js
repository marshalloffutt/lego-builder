import 'bootstrap';
import './index.scss';
import loadLegos from './helpers/legosLoader';
import clickyHead from './components/Selectors/headSelector';

const initializeApp = () => {
  loadLegos();
  clickyHead();
};

initializeApp();
