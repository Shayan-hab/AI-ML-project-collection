document.getElementById('predictForm').addEventListener('submit', async function(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

  const res = await fetch('/predict', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  const result = await res.json();
  const outputDiv = document.getElementById('result');

  if (result.predicted_price) {
    outputDiv.innerHTML = `💰 Estimated Price: <b>£${result.predicted_price}</b>`;
  } else {
    outputDiv.innerHTML = `❌ Error: ${result.error}`;
  }
});
