import { combineReducers } from 'redux';
import alert from './alert';
import editor from './editor';

export default combineReducers({
    alert,
    editor
});