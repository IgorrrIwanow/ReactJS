export const getMessagesFromStore = (state) => state.messages || {};
export const getMessages = (state) =>  getMessagesFromStore(state).messages || {};
export const getChatMessagesById = (chatid) => (state) => getMessages(state)[chatId];