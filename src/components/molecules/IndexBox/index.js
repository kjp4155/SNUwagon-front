import React, { PropTypes } from 'react'
import * as colors from 'material-ui/styles/colors'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { changeRoute } from '../../../store/user/actions'

const WRAPPER = styled.div`
  width: 300px;
  margin: 0 auto;
  padding-right: 250px;
`

const BUTTONWRAPPER = styled.div`
  width: 300px;
  height: 50px;
  margin: 0 auto;
`

const style = {
  width: 200,
}

class IndexBox extends React.Component {
  constructor(props) {
    super(props)

    this.handleClickWriteQuestion = this.handleClickWriteQuestion.bind(this)
    this.handleClickPostList = this.handleClickPostList.bind(this)
  }

  handleClickWriteQuestion() {
    if (this.props.logged === true) {
      this.props.changeRoute('/question')
    } else {
      // show modal
    }
  }

  handleClickPostList() {
    this.props.changeRoute('/list')
  }

  render() {
    return (
      <WRAPPER>
        <BUTTONWRAPPER>
          <RaisedButton 
          fullWidth={'true'}
          className={'question-write-button'} onClick={this.handleClickWriteQuestion}>Write Question</RaisedButton>
        </BUTTONWRAPPER>
        {' '}
        
        <BUTTONWRAPPER>
          <RaisedButton 
          fullWidth={'true'}
          className={'post-list-button'} onClick={this.handleClickPostList}>Question List</RaisedButton>
        </BUTTONWRAPPER>
        
        {' '}
        <BUTTONWRAPPER>
          <RaisedButton
          fullWidth={'true'}
          className={'information-write-button'} disabled>Write Information</RaisedButton>
        </BUTTONWRAPPER>
        
        {' '}
        <BUTTONWRAPPER>
          <RaisedButton
          fullWidth={'true'}
          className={'search-button'} disabled>Search</RaisedButton>
        </BUTTONWRAPPER>
      </WRAPPER>
    )
  }
}

IndexBox.propTypes = {
  logged: PropTypes.bool,
  changeRoute: PropTypes.func,
}

const mapStateToProps = (state) => {
  return {
    logged: state.user.login,
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    changeRoute: (route) => {
      dispatch(changeRoute(route))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexBox)
