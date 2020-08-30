import React from 'react'
import PropTypes from 'prop-types'
import { addSentence, lastWordUpdate } from '../actions/editor'
import { connect } from 'react-redux';
import Sentence from './Sentence';

const RhymeGroup = ({ rhymeGroup: { id, sentences, index } }) => {
    const onClick = () => {
        addSentence(id);
    }
    return (
        <div>
            <h2 onClick={e => onClick()}>Rhyme Group {index}</h2>
            {sentences.forEach(sentence => (
                <Sentence sentence={{ parentId: id, id: sentence.id, groupSize: sentences.length }} />
            ))}
        </div>
    )
}

RhymeGroup.propTypes = {
    rhymeGroup: PropTypes.object.isRequired,
}

export default connect(null, { addSentence, lastWordUpdate })(RhymeGroup);
