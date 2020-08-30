import axios from 'axios';
import {
    ADD_RHYME_GROUP,
    REMOVE_RHYME_GROUP,
    ADD_SENTENCE,
    REMOVE_SENTENCE,
    LAST_WORD_UPDATE
} from "./types";
import { setAlert } from './alert';
import { v4 as uuidv4 } from 'uuid';

export const addRhymeGroup = () => () => {
    console.log("ad ryme")
}

// export const addRhymeGroup = () => dispatch => {
//     console.log('add ryme')
//     const rhymeGroupId = uuidv4();
//     const sentenceId1 = uuidv4();
//     const sentenceId2 = uuidv4();
//     dispatch({
//         type: ADD_RHYME_GROUP,
//         payload: { id: rhymeGroupId, sentences: [{ id: sentenceId1, lastword: null }, { id: sentenceId2, lastword: null }] }
//     });
// }

export const removeRhymeGroup = id => dispatch => {
    dispatch({
        type: REMOVE_RHYME_GROUP,
        payload: id
    });
}

export const addSentence = (groupId) => dispatch => {
    const sentenceId = uuidv4();
    dispatch({
        type: ADD_SENTENCE,
        payload: { groupId, sentenceId }
    });
}

export const removeSentence = (groupId, sentenceId) => dispatch => {
    dispatch({
        type: REMOVE_SENTENCE,
        payload: { groupId, sentenceId }
    });
}

export const lastWordUpdate = (groupId, sentenceId, word) => dispatch => {
    dispatch({
        type: LAST_WORD_UPDATE,
        payload: { groupId, sentenceId, word }
    });
}

export const updateRhyme = (data) => dispatch => {
    console.log(data);
    // dispatch({
    //     type: UPDATE_RHYME,
    //     payload: data
    // });
}

// export const updateRhyme = (formData) => async dispatch => {
//     try {
//         const config = {
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         }
//         const res = await axios.post('/words', formData, config);
//         dispatch({
//             type: RHYME_UPDATE,
//             payload: res.data
//         });
//         dispatch(setAlert('Rhyme Found', 'success'));
//     } catch (error) {
//         dispatch({
//             type: RHYME_ERROR,
//             payload: { msg: error.response.statusText, status: error.response.status }
//         });
//     }
// }