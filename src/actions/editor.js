import {
    ADD_RHYME_GROUP,
    REMOVE_RHYME_GROUP,
    ADD_SENTENCE,
    REMOVE_SENTENCE,
    SENTENCE_UPDATE
} from "./types";
import { v4 as uuidv4 } from 'uuid';

export const addRhymeGroup = () => dispatch => {
    const rhymeGroupId = uuidv4();
    const sentenceId1 = uuidv4();
    const sentenceId2 = uuidv4();
    dispatch({
        type: ADD_RHYME_GROUP,
        payload: { id: rhymeGroupId, sentences: [{ id: sentenceId1, sentence: null }, { id: sentenceId2, sentence: null }] }
    });
}

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

export const updateSentence = (groupId, sentenceId, sentence) => dispatch => {
    dispatch({
        type: SENTENCE_UPDATE,
        payload: { groupId, sentenceId, sentence }
    });
}

