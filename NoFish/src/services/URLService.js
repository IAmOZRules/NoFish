export async function getPrediction(url) {
    const response = await fetch('http://127.0.0.1:5000/url', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url: url })
    })
    return await response.json()
}