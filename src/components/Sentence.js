import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { removeSentence, removeRhymeGroup, updateSentence } from '../actions/editor'



const Sentence = ({ sentence: { id, parentId, groupSize }, removeSentence, removeRhymeGroup, updateSentence }) => {
    const onChange = e => {
        updateSentence(parentId, id, e.target.value);
    }
    const onClick = () => {
        if (groupSize === 2) {
            removeRhymeGroup(parentId);
        } else {
            removeSentence(parentId, id);
        }
    }
    return (
        <div>
            <input onChange={e => onChange(e)} placeholder="Insert your lyrics" ></input><button onClick={e => onClick()} > - </button>
        </div >
    )
}

Sentence.propTypes = {
    sentence: PropTypes.object.isRequired,
    removeSentence: PropTypes.func.isRequired,
    lastWordUpdate: PropTypes.func.isRequired,
    removeRhymeGroup: PropTypes.func.isRequired,
}

export default connect(null, { updateSentence, removeSentence, removeRhymeGroup })(Sentence);
