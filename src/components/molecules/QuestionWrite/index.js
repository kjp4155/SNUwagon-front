import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import Button from '../../atoms/Button'
import Input from '../../atoms/Input'

const WRAPPER = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
  width: 700px;
  margin: 0 auto;
  margin-top: 20px;
`

const CONTENTWRAPPER = styled.div`
  width: 600px;
  border-bottom : 1px solid gray;
`
const BUTTONWRAPPER = styled.div`
  width: 600px;
  margin-top: 10px;  
`
const TITLE = styled.div`
  width: 15%;
  font-size: 15px;
  font-weight: bold;
  display: inline-block;
  height: 10px;
`
const CONTENT = styled.div`
  width: 85%;
  height: 100%;  
  display: inline-block;
`
const WRAP1 = styled.div`
  width: 600px;
  font-size: 20px;
  font-weight: bold;
  height: 40px;
`
const WRAP2 = styled.div`
  width: 600px;
  height: 50px;
  display: flex;
`
const WRAP3 = styled.div`
  margin-top: 10px;
  width: 600px;
  height:100px;
  padding-bottom: 15px;
`
const WRAP4 = styled.div`
  width: 600px;
  height: 30px;
  padding-bottom: 15px;
`
const INPUT = styled.textarea`
  font-size: 15px;
  width: 505px;
  line-height: 3;
`


const QuestionWrite = ({ onClickBack, onClickWriteQuestion, state }) => {
  // state contains both user and question list

  let title
  let content
  let due
  let bounty

  const onClickBackButton = () => {
    onClickBack('')
  }

  const onClickWriteQuestionButton = () => {
    if (title && content && due && bounty) {
      // author:state.user.profile.username, tags
      onClickWriteQuestion(title.value, content.value, due.value, bounty.value, state.user.profile.username)
      title.value = ''
      content.value = ''
      due.value = ''
      bounty.value = ''
    }
  }

  return (
    <WRAPPER>
      <CONTENTWRAPPER>
        <WRAP1>
        Ask a Question!
        </WRAP1>

        <WRAP2>
        <TITLE> Title: </TITLE>
        <CONTENT>
          <Input
            className={'title-input'} placeholder={'Title'}
            onChange={node => { title = node.target }}
          />
        </CONTENT>
        </WRAP2>
        
        <WRAP3>
        <TITLE> Content: </TITLE>
        <CONTENT>
          <INPUT
            className={'content-input'} placeholder={'Content'}
            onChange={node => { content = node.target }} type={'textarea'}
          />
        </CONTENT>
        </WRAP3>

        <WRAP4>
          <TITLE> Due: </TITLE>
          <CONTENT>
            <Input
              className={'due-input'}
              onChange={node => { due = node.target }} type={'datetime-local'}
            />
          </CONTENT>
        </WRAP4>
        <WRAP4>
          <TITLE> Bounty: </TITLE>
          <CONTENT>
            <Input
              className={'bounty-input'} placeholder={'Bounty'}
              onChange={node => { bounty = node.target }} type={'number'} pattern={'d+'} min={'1'} step={'1'}
            />
          </CONTENT>
        </WRAP4>
      </CONTENTWRAPPER>
      <BUTTONWRAPPER>
        <Button className={'back-button'} type={'submit'} onClick={onClickBackButton}>Back</Button>
        {'   '}
        <Button className={'write-question-button'} type={'submit'} onClick={onClickWriteQuestionButton}>Submit Question</Button>
      </BUTTONWRAPPER>
    </WRAPPER>
  )
}

QuestionWrite.propTypes = {
  onClickBack: PropTypes.func,
  onClickWriteQuestion: PropTypes.func,
  state: PropTypes.object,
  reverse: PropTypes.bool,
}

export default QuestionWrite
