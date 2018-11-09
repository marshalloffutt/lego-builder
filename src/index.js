import 'bootstrap';
import './index.scss';
import loadLegos from './helpers/legosLoader';

const initializeApp = () => {
  loadLegos();
};

initializeApp();
