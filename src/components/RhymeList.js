import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import DropdownButton from 'react-bootstrap/Dropdown';
import Dropdown from 'react-bootstrap/Dropdown';

const RhymeList = ({ rhymeList }) => {
    return (
        <div>
            <h1>Rhyme List</h1>
            <ul>
                {
                    rhymeList.map((rhyme) => (
                        <li>
                            <DropdownButton id="dropdown-basic-button" title={rhyme.word1}>
                                {rhyme.wordList.map(
                                    word => (<Dropdown.Item value={word}> {word}</Dropdown.Item>)
                                )}
                            </DropdownButton>
                        </li>))
                }
            </ul>
        </div >
    )
}

RhymeList.propTypes = {
    rhymeList: PropTypes.array,
}
const mapStateToProps = state => ({
    rhymeList: state.rhymeList
})
export default connect(mapStateToProps, {})(RhymeList)
