import axios from 'axios';

async function updateData() {
  try {
    const response = await axios.patch('https://jsonplaceholder.typicode.com/posts/1', {
      title: 'Updated Title'
    });
    console.log('Data updated:', response.data);
  } catch (error) {
    console.error('Error updating data:', error);
  }
}

updateData();