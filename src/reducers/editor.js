import {
    ADD_RHYME_GROUP,
    REMOVE_RHYME_GROUP,
    ADD_SENTENCE,
    REMOVE_SENTENCE,
    SENTENCE_UPDATE
} from "../actions/types";

const initialState = {
    rhymeGroups: []
};

let index = 0;

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case ADD_RHYME_GROUP:
            return {
                ...state,
                rhymeGroups: [...state.rhymeGroups, payload]
            };
        case REMOVE_RHYME_GROUP:
            return {
                ...state,
                rhymeGroups: state.rhymeGroups.filter(rhymeGroup => rhymeGroup.id !== payload)
            };
        case ADD_SENTENCE:
            index = state.rhymeGroups.findIndex(group => group.id === payload.groupId);
            state.rhymeGroups[index].sentences.push({ id: payload.sentenceId });
            return {
                ...state,
                rhymeGroups: [...state.rhymeGroups]
            };
        case REMOVE_SENTENCE:
            index = state.rhymeGroups.findIndex(group => group.id === payload.groupId);
            state.rhymeGroups[index].sentences = state.rhymeGroups[index].sentences.filter(sentence => sentence.id != payload.sentenceId);
            return {
                ...state,
                rhymeGroups: [...state.rhymeGroups]
            };

        case SENTENCE_UPDATE: {
            index = state.rhymeGroups.findIndex(group => group.id === payload.groupId);
            let sentenceIndex = state.rhymeGroups[index].sentences.findIndex(sentence => sentence.id === payload.sentenceId);
            state.rhymeGroups[index].sentences[sentenceIndex].sentence = payload.sentence;
            return {
                ...state,
                rhymeGroups: [...state.rhymeGroups]
            };
        }
        default:
            return state;
    }
}