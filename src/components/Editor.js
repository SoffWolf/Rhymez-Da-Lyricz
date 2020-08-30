import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { addRhymeGroup, addSentence } from '../actions/editor'
import { updateRhyme } from '../actions/rhymeList'
import Sentence from './Sentence'

const getLastWord = (lyric) => {
    const text = lyric.trim().split(' ');
    return text.pop();
};

const Editor = ({ rhymeGroups, addRhymeGroup, addSentence, updateRhyme }) => {
    const update = () => {
        let formData = [];
        rhymeGroups.forEach(rhymeGroup => {
            let word1 = getLastWord(rhymeGroup.sentences[0].sentence);
            for (let i = 1; i < rhymeGroup.sentences.length; i++) {
                formData.push({ word1, word2: getLastWord(rhymeGroup.sentences[i].sentence) });
            }
        });
        updateRhyme(formData);
    }
    return (
        <div>
            <h1 onClick={e => addRhymeGroup()}>Editor</h1>
            <ul>
                {rhymeGroups.map((rhymeGroup, index) => (<li>
                    <div>Rhyme Group {index + 1}</div><button onClick={e => addSentence(rhymeGroup.id)}> + </button>
                    {rhymeGroup.sentences.map(sentence => (
                        <Sentence sentence={{ parentId: rhymeGroup.id, id: sentence.id, groupSize: rhymeGroup.sentences.length }} />
                    ))}
                </li>))}
            </ul>
            <button onClick={e => update()} >Submit</button>
        </div>
    )
}

Editor.propTypes = {
    rhymeGroups: PropTypes.array,
    addRhymeGroup: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    rhymeGroups: state.editor.rhymeGroups
})

export default connect(mapStateToProps, { addRhymeGroup, addSentence, updateRhyme })(Editor);
