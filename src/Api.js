const BASE_URL = 'http://localhost:3001';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const randomNumber = (min = 0, max = 1) =>
    Math.floor(Math.random() * (max - min + 1)) + min;
const simulateNetworkLatency = (min = 30, max = 1500) =>
    delay(randomNumber(min, max));

async function callApi(endpoint, options = {}) {
  await simulateNetworkLatency();

  options.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}

const Api = {
  experiences: {
    index() {
      return callApi('/experience');
    },
    create(experience) {
      return callApi(`/experience`, {
        method: 'POST',
        body: JSON.stringify(experience),
      });
    },
    show(experienceId) {
      return callApi(`/experience/${experienceId}`);
    },
    update(experienceId, updates) {
      return callApi(`/experience/${experienceId}`, {
        method: 'PUT',
        body: JSON.stringify(updates),
      });
    },
    destroy(experienceId) {
      return callApi(`/experience/${experienceId}`, {
        method: 'DELETE',
      });
    },
  },
};

export default Api;