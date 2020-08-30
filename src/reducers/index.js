import { combineReducers } from 'redux';
import alert from './alert';
import editor from './editor';
import rhymeList from './rhymeList';

export default combineReducers({
    alert,
    editor,
    rhymeList
});