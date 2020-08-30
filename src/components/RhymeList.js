import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Form from 'react-bootstrap/Form';

const RhymeList = ({ rhymeList }) => {
    return (
        <div>
            <h1 >Rhyme List</h1>
            <ul>
                {
                    rhymeList.map((rhyme) => (
                        <li>
                            <Form.Group>
                                <Form.Control as="select">
                                    <option>{rhyme.word1}</option>
                                </Form.Control>
                                {rhyme.wordList.map(
                                    word => (
                                        <Form.Control as="select">
                                            <option>{word}</option>
                                        </Form.Control>
                                    )
                                )}
                            </Form.Group>
                        </li>)
                    )
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
