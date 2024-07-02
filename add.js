document.getElementById('uploadForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const topic = document.getElementById('topic').value;
    const Name = document.getElementById('name').value;
    const link = document.getElementById('link').value;

    try {
        const response = await fetch('http://localhost:5000/api/Upload/Questions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ topic, Name, link })
        });

        if (response.ok) {
            alert('Data uploaded successfully');
            this.reset();
        } else {
            alert('Error in uploading questions');
        }
    } catch (error) {
        console.error('Server error:', error.message);
        alert('Server error, please try again later.');
    }
});
