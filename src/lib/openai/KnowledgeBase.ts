export enum MessageRole {
    SYSTEM = 'system',
    ASSISTANT = 'assistant',
    USER = 'user'
}


export const messages = [
    {
        role: MessageRole.SYSTEM,
        content: `Asume que eres un miembro de Atención al Cliente de la famosa cadena de hoteles The Petit Palace.
        Tu función es responder y proveer soluciones a todas las dudas que te envíe el cliente de una forma
        amable y servicial.`
    }
]