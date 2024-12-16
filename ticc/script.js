* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background-color: #121212;
    font-family: 'Arial', sans-serif;
    text-align: center;
    color: #fff;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  h1 {
    font-size: 2rem;
    margin-bottom: 20px;
    color: #fff;
    text-shadow: 0 0 10px rgba(0, 255, 255, 0.8), 0 0 20px rgba(255, 0, 255, 0.8);
  }
  
  #game-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  #game-board {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(3, 100px);
    gap: 5px;
    margin-top: 20px;
    background: linear-gradient(45deg, #222, #444);
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
    transform: scale(1.1);
  }
  
  .cell {
    width: 100px;
    height: 100px;
    border: 3px solid #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 36px;
    color: transparent;
    background-color: #222;
    cursor: pointer;
    border-radius: 8px;
    box-shadow: 0 0 15px rgba(0, 255, 255, 0.7);
    transition: transform 0.3s ease, background-color 0.3s ease;
  }
  
  .cell:hover {
    transform: scale(1.1);
    background-color: rgba(0, 255, 255, 0.2);
  }
  
  .cell.X {
    color: #FF00FF;
    text-shadow: 0 0 10px #FF00FF, 0 0 20px #FF00FF;
  }
  
  .cell.O {
    color: #00FFFF;
    text-shadow: 0 0 10px #00FFFF, 0 0 20px #00FFFF;
  }
  
  #status {
    font-size: 1.5rem;
    margin-top: 20px;
    color: #fff;
    text-shadow: 0 0 10px rgba(255, 255, 0, 0.8);
    font-weight: bold;
  }
  
  #welcome-screen {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
  
  #welcome-screen input {
    margin-bottom: 10px;
    padding: 10px;
    width: 250px;
    font-size: 16px;
    border: 2px solid #ccc;
    border-radius: 5px;
  }
  
  #start-button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #00FFFF;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
  }
  
  #start-button:hover {
    background-color: #FF00FF;
  }
  
  #restart-button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #00FFFF;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
  }
  
  #restart-button:hover {
    background-color: #FF00FF;
  }
  
  #congratulations-popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.7);
    animation: popupAnimation 0.5s ease-in-out;
  }
  
  #popup-content {
    background-color: #333;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
    text-align: center;
    color: #fff;
  }
  
  #popup-content h2 {
    font-size: 2rem;
    margin-bottom: 20px;
    color: #00FFFF;
    text-shadow: 0 0 10px #00FFFF, 0 0 20px #00FFFF;
  }
  
  #popup-content p {
    font-size: 1.5rem;
    color: #FF00FF;
  }
  
  #close-popup {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #FF00FF;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
  }
  
  #close-popup:hover {
    background-color: #00FFFF;
  }
  
  @keyframes popupAnimation {
    0% { opacity: 0; transform: scale(0.5); }
    100% { opacity: 1; transform: scale(1); }
  }
  