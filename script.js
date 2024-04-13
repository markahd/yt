document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('toolForm');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const requestData = {};
    formData.forEach((value, key) => {
      requestData[key] = value;
    });

    try {
      const response = await fetch('/tools', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
      });

      if (!response.ok) {
        throw new Error('Failed to add tool');
      }

      const data = await response.json();
      console.log('Tool added:', data);
      // Optionally, you can display a success message or redirect the user.
    } catch (error) {
      console.error('Error:', error.message);
      // Optionally, you can display an error message to the user.
    }
  });
});

