const stationGoBtn = document.getElementById('station-go');
const nameInput = document.getElementById('name');
const stationModelDiv = document.getElementById('station-model');

stationGoBtn.addEventListener('click', () => {
  const stationName = nameInput.value.toLowerCase();
  const stationModel = document.querySelector(`.${stationName}-model`);
  const fillerModel = document.querySelector('.filler-station-model');

  if (stationModel) {
    stationModelDiv.innerHTML = stationModel.innerHTML;
  } else {
    stationModelDiv.innerHTML = fillerModel.innerHTML;
  }
});
