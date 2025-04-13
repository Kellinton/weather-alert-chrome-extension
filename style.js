const style = document.createElement("style");
style.innerHTML = `  
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Poppins', sans-serif;
    }

    :root {
      --bg-primary-color: #111111;
      --bg-secondary-color: #1E1E1E;
      --primary-color: #FFFFFF;
      --second-color: #87888C;
      --third-color: #CFF80B;
      --fourth-color: #FF4D4D;
    }

    body {
      width: 300px;
      height: 400px;
      font-family: 'Arial', sans-serif;
      background-color: var(--bg-primary-color);
      color: var(--primary-color);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
    }

    .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      text-align: center;
      gap: 15px;
    }

    .input-container {
      position: relative;
      width: 85%;
    }

    .input-container input {
      padding: 10px 40px 10px 15px; 
      width: 100%;
      border-radius: 10px;
      font-size: 16px;
      background-color: var(--bg-secondary-color);
      border: none;
      outline: none;
      font-weight: 500;
      color: #fff;
    }

    .input-container i {
      position: absolute;
      right: 15px;
      top: 50%;
      transform: translateY(-50%);
      color: var(--second-color);
      font-size: 20px;
      pointer-events: none; 
    }

    .card {
      background-color: var(--bg-secondary-color);
      padding: 15px;
      width: 85%;
      border-radius: 10px;
    }
    
    .hidden {
      display: none;
    }
    
    .icon-container {
      margin: 10px 0;
    }
    
    .icon {
      width: 30px;
    }

    #description{
      font-size: 0.75rem;
      color: var(--second-color);
      font-weight: 500;
    }
    #feels_like, #min, #max, #wind, #pressure, #humidity {
      font-size: 0.75rem;
      color: var(--second-color);
      font-weight: 500;
    }
    .details {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 8px;
      font-size: 0.75rem;
      margin-top: 10px;
    }
    .alert-container {
      position: absolute; 
      backdrop-filter: blur(3px);          
      -webkit-backdrop-filter: blur(3px);  
      width: 100%;
      height: 100%;
      display: none;
      justify-content: center;
      align-items: center;
    }
    .alert {
      background-color: var(--bg-secondary-color);
      color: var(--primary-color);
      padding: 15px;
      width: 85%;
      border-radius: 10px;
      margin-top: 10px;
      text-align: center;
      font-size: 0.75rem;
      box-shadow: 0 0 2px rgba(255, 77, 77, 0.5);
    }
    
    .alert .title-alert {
      color: var(--fourth-color);
      font-weight: 600;
      font-size: 1rem;
    }
    
    .alert .msg-alert {
      font-weight: 600;
      margin: 5px 0;
    }
    
    .alert-details {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-top: 10px;
      font-size: 0.75rem;
    }
    
    .updated-time {
      margin-top: 10px;
      color: var(--second-color);
    }
    
    .footer p{
      font-size: 0.75rem;
      color: var(--second-color);
      margin-top: 10px;
      font-weight: 500;
    }

    .blink-image {
      width: 15px;
      animation: blink 1s infinite;
  }

  @keyframes blink {
      0%, 50%, 100% {
          opacity: 1;
      }
      25%, 75% {
          opacity: 0;
      }
  }
`;
document.head.appendChild(style);