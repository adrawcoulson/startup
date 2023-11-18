async function loadDevices() {
    let devices = [];
    try {
      // Get the latest high scores from the service
      const response = await fetch('/api/devices');
      devices = await response.json();
  
      // Save the scores in case we go offline in the future
      localStorage.setItem('devices', JSON.stringify(devices));
    } catch {
      // If there was an error then just use the last saved scores
      const devicesText = localStorage.getItem('devices');
      if (devicesText) {
        devices = JSON.parse(devicesText);
      }
    }
  
    displayDevices(devices);
  }
  
  function displayDevices(devices) {
    const tableBody = document.getElementById('tableBody');  
    if (devices.length) {
      // Update the DOM with the scores
    //   for (const [i, device] of devices.entries()) {
        for (const device of devices){
        const deviceCol = document.createElement('td');
        const passCol = document.createElement('td');

        let newDevice = device.device.deviceName;
        console.log("INSIDE POST", newDevice);

  
        deviceCol.textContent = newDevice;
        passCol.textContent = "0";
  
        const rowEl = document.createElement('tr');
        rowEl.appendChild(deviceCol);
        rowEl.appendChild(passCol);
  
        tableBody.appendChild(rowEl);
      }
    }
  }
  
  loadDevices();