import $ from 'jquery';
import 'bootstrap';
import './index.scss';
import loadHeads from './components/LegoCharacter/heads';
import loadTorsos from './components/LegoCharacter/torsos';
import loadLegs from './components/LegoCharacter/legs';

$('#click-button').on('click', () => {
  $('#important-text').append('<p>YES I AM</p>');
});

const initializeApp = () => {
  loadHeads();
  loadTorsos();
  loadLegs();
};

initializeApp();
