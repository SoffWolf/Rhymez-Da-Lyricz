import {
    ADD_RHYME_GROUP,
    REMOVE_RHYME_GROUP,
    ADD_SENTENCE,
    REMOVE_SENTENCE,
    LAST_WORD_UPDATE
} from "../actions/types";

const initialState = {
    rhymeGroups: []
};
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
            return {
                ...state,
                rhymeGroups: state.rhymeGroups.forEach(rhymeGroup => {
                    if (rhymeGroup.id === payload.groupId) {
                        rhymeGroup.sentences.push({ id: payload.sentenceId });
                    }
                })
            };
        case REMOVE_SENTENCE:
            return {
                ...state,
                rhymeGroups: state.rhymeGroups.forEach(rhymeGroup => {
                    if (rhymeGroup.id === payload.groupId) {
                        rhymeGroup.sentences.filter(sentence => sentence.id !== payload.sentenceId);
                    }
                })
            };
        case LAST_WORD_UPDATE:
            return {
                ...state,
                rhymeGroups: state.rhymeGroups.forEach(rhymeGroup => {
                    if (rhymeGroup.id === payload.groupId) {
                        rhymeGroup.sentences.forEach(sentence => {
                            if (sentence.id === payload.sentenceId) {
                                sentence.lastword = payload.word;
                            }
                        }
                        );
                    }
                })
            };
        default:
            return state;
    }
}