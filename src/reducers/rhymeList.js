import { RHYME_UPDATE } from '../actions/types';

const initialState = [{ word1: "test1", wordList: ["test", "test", "test", "test", "test",] }];
export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case RHYME_UPDATE:
            return { rhymeList: payload };
        default:
            return state;
    }
}