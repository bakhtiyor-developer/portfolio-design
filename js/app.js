const navTogglerElement = document.querySelector('.nav__toggler');
const dropbarElement = document.querySelector('.dropbar__list');

navTogglerElement.addEventListener('click', (e) => {
    e.preventDefault();
    navTogglerElement.classList.toggle('navTogglerClose');
    dropbarElement.classList.toggle('dropbar__list--active');
})