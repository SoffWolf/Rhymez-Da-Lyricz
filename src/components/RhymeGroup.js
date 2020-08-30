import React from 'react'
import PropTypes from 'prop-types'
import { addSentence } from '../actions/editor'
import { connect } from 'react-redux';
import Sentence from './Sentence';


const RhymeGroup = ({ rhymeGroup: { id, sentences, index }, addSentence }) => {

    return (
        <div>
            <h2 onClick={e => addSentence(id)}>Rhyme Group {index}</h2>
            {sentences.map(sentence => (
                <Sentence sentence={{ parentId: id, id: sentence.id, groupSize: sentences.length }} />
            ))}
        </div>
    )
}

RhymeGroup.propTypes = {
    rhymeGroup: PropTypes.object.isRequired,
    addSentence: PropTypes.func.isRequired,
}

export default connect(null, { addSentence })(RhymeGroup);
