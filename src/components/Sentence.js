import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { removeSentence, lastWordUpdate, removeRhymeGroup } from '../actions/editor'

const formatLyric = (lyric) => {
    const text = lyric.split(' ');
    const last = text.pop();
    return { html: text.join(' ') + (text.length > 0 ? <span className="last">{last}</span> : last), lastword: last };
};

const Sentence = ({ sentence: { id, parentId, groupSize } }) => {
    const onChange = e => {
        const res = formatLyric(e.target.value);
        e.target.value = res.html;
        lastWordUpdate(res.lastword);
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
            <input onChange={e => onChange(e)} onClick={e => onClick()} placeholder="Insert your lyrics" ></input>
        </div >
    )
}

Sentence.propTypes = {
    sentence: PropTypes.object.isRequired,
}

export default connect(null, { lastWordUpdate })(Sentence);
