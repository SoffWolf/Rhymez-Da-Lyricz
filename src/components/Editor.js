import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { addRhymeGroup } from '../actions/editor';
import RhymeGroup from './RhymeGroup';

const Editor = ({ rhymeGroups }) => {
    // const onSubmit = e => {
    //     updateRhyme();
    // }
    return (
        <div>
            <h1 onClick={e => { console.log('nguloz'); addRhymeGroup() }}>Editor</h1>
            <ul>
                {rhymeGroups.forEach((rhymeGroup, index) => (<li>
                    <RhymeGroup rhymeGroup={Object.assign(rhymeGroup, index)} />
                </li>))}
            </ul>
            {/* <button onClick={e => onSubmit()} /> */}
        </div>
    )
}

Editor.propTypes = {
    rhymeGroups: PropTypes.array,
}

const mapStateToProps = state => ({
    rhymeGroups: state.editor.rhymeGroups
})

export default connect(mapStateToProps, { addRhymeGroup })(Editor);
