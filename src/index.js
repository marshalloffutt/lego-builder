import $ from 'jquery';
import 'bootstrap';
import './index.scss';

$('#click-button').on('click', () => {
  $('#important-text').append('<p>YES I AM</p>');
});

const initializeApp = () => {
};

initializeApp();
