/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
async function handleCreateRoom(event) {
  try {
    event.preventDefault();
    const roomName = event.target.querySelector('input').value;

    const response = await axios.post('/room', { name: roomName });

    if (response.status === 200) {
      window.location = `/room/${response.data.id}`;
    } else {
      alert('Não foi possível criar a sala. Tente novamente!');
    }
  } catch (error) {
    alert('Não foi possível criar a sala. Tente novamente!');
  }
}

async function handleJoinRoom(event) {
  event.preventDefault();
  const roomId = event.target.querySelector('input').value;

  window.location = `/room/${roomId}`;
}
