const form = document.getElementById('regForm');
const msg = document.getElementById('msg');

function isValidName(n){
  return typeof n === 'string' && n.trim().length >= 2;
}
function isValidEmail(e){
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
}
function isValidMobile(m){
  return /^\d{10}$/.test(m.trim());
}

form.addEventListener('submit', (ev) => {
  ev.preventDefault();
  const name = form.name.value;
  const email = form.email.value;
  const mobile = form.mob.value;

  const errors = [];
  if(!isValidName(name)) errors.push('Name must be at least 2 characters.');
  if(!isValidEmail(email)) errors.push('Enter a valid email.');
  if(!isValidMobile(mobile)) errors.push('Mobile must be 10 digits (numbers only).');

  if(errors.length){
    msg.textContent = errors.join(' ');
    msg.style.color = 'crimson';
    return;
  }

  msg.textContent = 'Registration validated successfully!';
  msg.style.color = 'green';
});