import React from 'react';
import './prevpass.css';

export function PrevPass() {
  const [devices, setDevices] = React.useState([]);

  React.useEffect(() => {
     loadDevices();
   }, []);

  async function loadDevices() {
    let devices = [];
    try {
      const response = await fetch('/api/devices');
      devices = await response.json();
      localStorage.setItem('devices', JSON.stringify(devices));
    } catch {
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
        for (const device of devices){
        const deviceCol = document.createElement('td');
        const passCol = document.createElement('td');

        let newDevice = device.device.deviceName;

        deviceCol.textContent = newDevice;
        passCol.textContent = "0";
  
        const rowEl = document.createElement('tr');
        rowEl.appendChild(deviceCol);
        rowEl.appendChild(passCol);
  
        tableBody.appendChild(rowEl);
      }
    }
  }

  return (
    <main className='container-fluid bg-secondary text-center'>
      <div>
        <table className="voting">
          <thead>
            <th>Devices</th>
          </thead>
        <tbody id = "tableBody"></tbody>
        </table>
      </div>
    </main>
  );
}