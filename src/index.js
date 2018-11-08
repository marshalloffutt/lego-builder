import $ from 'jquery';
import 'bootstrap';
import './index.scss';
import legos from './helpers/partsGetter';

$('#click-button').on('click', () => {
  $('#important-text').append('<p>YES I AM</p>');
});

const initializeApp = () => {
  legos.loadHeads();
  legos.loadTorsos();
  legos.loadLegs();
};

initializeApp();
