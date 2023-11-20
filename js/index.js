const form = document.getElementById('indexOfMassOfBody');
const indexWeight = document.getElementById('indexWeight');
const indexHeight = document.getElementById('indexHeight');
const btn = document.querySelector('button');
const imt = document.querySelector('.imt');

form.addEventListener('submit', calculateIMT);

function calculateIMT(event) {
  event.preventDefault();

  const weight = indexWeight.value;
  const height = indexHeight.value;
  let index = weight / ((height / 100) ** 2);

  index = index.toString().split('').slice(0, 4).join('');

  if (index <= 16) {
    let ind = 'Выраженный дефицит массы тела';
    const indexHTML = `<span class="mass">${index} - ${ind}</span>`;
    imt.classList.add('red');
    imt.classList.remove('orange', 'green', 'brown');
    imt.insertAdjacentHTML('beforeend', indexHTML);

  } else if (index > 16 && index <= 18.5) {
    let ind = 'Недостаточная (дефицит) масса тела';
    imt.classList.add('orange');
    imt.classList.remove('red', 'green', 'brown');
    const indexHTML = `<span class="mass">${index} - ${ind}</span>`;
    imt.insertAdjacentHTML('beforeend', indexHTML);

  } else if (index > 18.5 && index <= 25) {
    let ind = 'Норма';
    imt.classList.add('green');
    imt.classList.remove('red', 'orange', 'brown');
    const indexHTML = `<span class="mass">${index} - ${ind}</span>`;
    imt.insertAdjacentHTML('beforeend', indexHTML);

  } else if (index > 25 && index <= 30) {
    let ind = 'Избыточная масса тела (предожирение)';
    imt.classList.add('orange');
    imt.classList.remove('red', 'green', 'brown');
    const indexHTML = `<span class="mass">${index} - ${ind}</span>`;
    imt.insertAdjacentHTML('beforeend', indexHTML);

  } else if (index > 30 && index <= 35) {
    let ind = 'Ожирение первой степени';
    imt.classList.add('brown');
    imt.classList.remove('orange', 'green', 'red');
    const indexHTML = `<span class="mass">${index} - ${ind}</span>`;
    imt.insertAdjacentHTML('beforeend', indexHTML);

  } else if (index > 35 && index <= 40) {
    let ind = 'Ожирение второй степени';
    imt.classList.add('brown');
    imt.classList.remove('orange', 'green', 'red');
    const indexHTML = `<span class="mass">${index} - ${ind}</span>`;
    imt.insertAdjacentHTML('beforeend', indexHTML);

  } else if (index > 40) {
    let ind = 'Ожирение третьей степени (морбидное)';
    imt.classList.add('red');
    imt.classList.remove('orange', 'green', 'brown');
    const indexHTML = `<span class="mass">${index} - ${ind}</span>`;
    imt.insertAdjacentHTML('beforeend', indexHTML);
  }

  removeAllResult();
}

function removeAllResult() {
  if (imt.children.length > 2) {
    const mass = imt.querySelector('.mass');
    mass.remove();
  }
}