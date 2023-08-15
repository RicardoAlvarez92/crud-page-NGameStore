const auth = (req, res) => {
  const {email, password} = req.body;

  fetch('http://localhost:3000/ngamestore/api/v1/login', {
    method:'POST',
    headers:{
      'Content-type':'application/json'
    }, 
    body:JSON.stringify({
      
    }) 
  })
}