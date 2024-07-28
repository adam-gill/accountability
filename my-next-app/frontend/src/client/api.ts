// frontend/src/client/api.ts
export interface Message {
    text: string;
  }
  
  export interface Response {
    response: {
      text: string;
    };
  }
  
  export const sendMessage = async (message: Message): Promise<Response> => {
    const response = await fetch('http://localhost:8000/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });
  
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
  
    return response.json();
  };
  