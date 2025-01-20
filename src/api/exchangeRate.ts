
export async function getExchangeRate() {

    const url = process.env.NEXT_PUBLIC_API_EXCHANGE_RATE;
    console.log('NEXT_PUBLIC_API_EXCHANGE_RATE', url);
    if (!url) {
        throw new Error('NEXT_PUBLIC_API_EXCHANGE_RATE is not defined');
    }
            try {
            const response = await fetch(url);
            console.log('Response status:', response.status)
            if (!response.ok) {
              throw new Error(`Response status: ${response.status}`);
            }
        
            const json = await response.json();
            console.log('API response:', json);
            return json
        } catch (error) {
            if (error instanceof Error) {
              console.error(error.message);
            } else {
              console.error(String(error));
            }
            return null; // Devuelve null en caso de error
          }
}