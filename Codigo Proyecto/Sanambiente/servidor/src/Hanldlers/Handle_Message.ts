// Esta clase contiene la funcion con la estructura de los mensajes mostrados por consola

export default function handleMessage(response: any, code: number, message: any) {
    return response.status(code).json({message});
}