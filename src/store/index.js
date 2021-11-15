import {createStore, combineReducers} from 'redux';
import {profileReducer} from './profile/reducer';
import {messagesReducer} from './messages/reducer'
import { chatsReducer } from './chats/reducer';

const rootReducer = combineReducers({
    profile: profileReducer,
    messages: messagesReducer,
    chats: chatsReducer
})


export const store = createStore(rootReducer);