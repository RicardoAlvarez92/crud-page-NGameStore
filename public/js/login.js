const loginForm = document.getElementById('loginForm');
const endpointApiLogin = 'http://localhost:3000/ngamestore/api/v1/login';

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(loginForm);

  try {
    const response = await fetch(endpointApiLogin, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(Object.fromEntries(formData))
            });

    if (!response.ok) {
      const errorResponse = await response.json()
      alertify.alert('Ready!');
      throw new Error(errorResponse.error);
    } 
      const data = await response.json();
      console.log(data);
  } catch (error) {
    console.log(`Error en el ervidor: ${error}`);
  }
});

