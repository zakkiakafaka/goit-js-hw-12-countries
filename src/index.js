import './styles.css';
import fetchCountries from './fetchCountries.js';
import debounce from '../node_modules/lodash.debounce/index.js';

document.querySelector('input').addEventListener(
'input',
  debounce(fetchCountries, 800),
)

