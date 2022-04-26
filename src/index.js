import _ from 'lodash';
import css from '../src/css/custom.css';

function component() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Slava', 'Ukraini', 'International'], ' ');
    element.classList.add('Logo');

    return element;
}

document.body.appendChild(component());