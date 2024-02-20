let optionsGlobal = {};
let dataGlobal = {};

async function fetchData() {
  const { lat, lon } = optionsGlobal;

  try {
    const response = await fetch(`https://airmine-api.com/test/version`);
    // const response = await fetch(`http://dog-api.kinduff.com`, { mode: 'no-cors' });
    console.log(response, 'Response');
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

async function formatData() {
  const data = await fetchData();
  dataGlobal = { ...data };
}
function renderHeader() {}
function renderContent() {}
function renderFooter() {}

async function table(options) {
  optionsGlobal = { ...options };

  await formatData();
  // renderHeader();
  // renderContent();
  // renderFooter();
}
