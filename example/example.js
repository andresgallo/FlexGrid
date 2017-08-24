//This file is not related to Flexgrid...Its just here to enable the dropdown to change the examples...

var el_select = document.getElementById('exampleSwitcher'),
  el_example = document.querySelector('[data-example]');

function updateExample() {
  el_example.setAttribute('data-example', el_select.selectedIndex + 1);
}
el_select.addEventListener('change', updateExample);
updateExample();
