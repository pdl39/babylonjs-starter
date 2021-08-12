import './style.css';

const renderApp = (app) => {
  const main = document.getElementById(app);
  main.innerHTML = `
    <strong>Nodejs-Express-App Build by pdl39</strong>
  `

  return main;
}

renderApp('app');
