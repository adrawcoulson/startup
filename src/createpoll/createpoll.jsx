import React from 'react';
import { GameEvent, GameNotifier } from './gameNotifier';
import './createpoll.css';

export function CreatePoll() {
  const [deviceName, setDeviceName] = React.useState('');
  const [passwordLength, setPasswordLength] = React.useState(0);
  const [capitalization, setCapitalization] = React.useState(false);
  const [specialChars, setSpecialChars] = React.useState(false);
  const [includeNumbers, setIncludeNumbers] = React.useState(false);

  const handleDeviceName = (e) => {
    const deviceName = e.target.value;
    setDeviceName(deviceName);
    localStorage.setItem('devicename', deviceName);
  };
  const handlePasswordLength = (e) => {
    setPasswordLength(parseInt(e.target.value));
  };

  const handleCapitalization = (value) => {
    setCapitalization(value);
  };

  const handleSpecialChars = (value) => {
    setSpecialChars(value);
  };

  const handleIncludeNumbers = (value) => {
    setIncludeNumbers(value);
  };

  const handleSubmit = async() => {
    try{
        const poll = {
            deviceName,
            passwordLength,
            capitalization,
            specialChars,
            includeNumbers,
            
        };
        const stringifiedPoll = JSON.stringify(poll);
        localStorage.setItem("poll", stringifiedPoll);
        console.log(stringifiedPoll);
        await saveDevice(poll);
    } catch (error){
        console.error('Error', error);
    }
};

  async function saveDevice(device) {
    const userName = localStorage.getItem('userName') ?? 'Other player';
    const newDevice = { name: userName, device };
    const devicesName = localStorage.getItem('devicename');
    try {
      const response = await fetch('/api/device', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(newDevice),
      });
  
      GameNotifier.broadcastEvent(userName, GameEvent.End, devicesName);
      const devices = await response.json();
      localStorage.setItem('devices', JSON.stringify(devices));
    } catch (error) {
      console.error('Error occurred while saving device:', error);
      updateDevicesLocal(device);
    }
  }

  function updateDevicesLocal(newDevice) {
    try {
        let devices = [];
        const devicesText = localStorage.getItem('devices');
        if (devicesText) {
            devices = JSON.parse(devicesText);
        }
    devices.push(newDevice);
    localStorage.setItem('devices', JSON.stringify(devices));
    } catch (error) {
        console.error('Error occurred while updating local devices:', error);
    }
}
  return (
    <main className='container-fluid bg-secondary text-center'>
    <div>
      <div className="setDeviceName">
        <label htmlFor="devicename">Device Name</label>
        <input
          type="text"
          id="devicename"
          value={deviceName}
          onChange={handleDeviceName}
        />
        <br />
        <label htmlFor="length">Password Length</label>
        <input
          type="number"
          id="length"
          step="1"
          value={passwordLength}
          onChange={handlePasswordLength}
        />
        <br />
        <div className="capitalization">
            <label>Capitalization</label>
            <button
              className={capitalization ? 'yesCap active' : 'yesCap'}
              onClick={() => setCapitalization(true)}
            >
              Yes
            </button>
            <button
              className={!capitalization ? 'noCap active' : 'noCap'}
              onClick={() => setCapitalization(false)}
            >
              No
            </button>
        </div>
        <div className="specialchar">
            <label>Special Characters</label>
            <button 
            className={specialChars ? 'yesChar active' : 'yesChar'}
            onClick={() => handleSpecialChars(true)}
            >
                Yes
            </button>
            <button
            className={!specialChars ? 'noChar active' : 'noChar'}
            onClick={() => handleSpecialChars(false)}
            >
                No
            </button>
        </div>
        <div className="includeNumbers">
            <label>Include Numbers</label>
            <button 
            className={includeNumbers ? 'yesNum active' : 'yesNum'}
            onClick={() => handleIncludeNumbers(true)}
            >
                Yes
            </button>
            <button
            className={!includeNumbers ? 'noNum active' : 'noNum'}
            onClick={() => handleIncludeNumbers(false)}
            >
                No
            </button>
        </div>
        <div className="submitDevice">
          <button className="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
    </main>
  );
}


