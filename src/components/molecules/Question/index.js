import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import Button from '../../atoms/Button'

const TITLEWRAPPER = styled.div`
  border-bottom: 1px solid gray;
  padding-bottom: 10px;
  width: 100%;
`
const CONTENTWRAPPER = styled.div`
  border-bottom: 1px solid gray;
  padding-bottom: 5px;
  min-height: 250px;
  width: 100%;
`
const BUTTONWRAPPER = styled.div`
  padding-top: 10px;
  width: 100%;  
`

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
  font-size: 17px;
  margin: 0 auto;
  width: 600px;
  padding-top: 50px;
`

const P1 = styled.div`
  width: 100%;
  font-size: 30px;
  font-weight: bold;
`

const P2 = styled.div`
  width: 40%;
  font-size: 15px;
  display: inline-block;
  text-align: left;
`
const P3 = styled.div`
  width: 60%;
  font-size: 15px;
  display: inline-block;
  text-align: right;
`

const Question = ({ onClickAnswer, onClickDelete, ...props }) => {
  const q = props.question
  var dueStr = ""
  if( q.due != undefined ){
    var d = new Date(q.due)
    dueStr = String(d.getMonth()) + "-" + String(d.getDate())
  //  dueDate = q.due.getDate()
  //  dueMonth = q.due.getMonth()
  }
  const onClickAnswerButton = () => {
    onClickAnswer('')
  }

  const onClickDeleteButton = () => {
    // if successful, redirect to main page.
    onClickDelete('')
  }

  const isOwner = (q.author === props.user.profile.userId)

  return (
    <Wrapper>
      <TITLEWRAPPER>
        <P1>{q.title}</P1>
        <P2>Asked by {q.author}</P2>
        <P3>Expire at {dueStr}</P3>
      </TITLEWRAPPER>
      <CONTENTWRAPPER>
        <p>{q.content}</p>
      </CONTENTWRAPPER>
      <BUTTONWRAPPER>
        {isOwner ? (
          <Button className={'delete-button'} type={'submit'} onClick={onClickDeleteButton}>Delete</Button>
        ) : (
          <Button className={'answer-button'} type={'submit'} onClick={onClickAnswerButton}>Answer</Button>
        )}
      </BUTTONWRAPPER>
    </Wrapper>
  )
}

Question.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  due: PropTypes.string,
  resolved: PropTypes.bool,
  bounty: PropTypes.number,
  author: PropTypes.string,
  tags: PropTypes.string,
  reverse: PropTypes.bool,
  onClickAnswer: PropTypes.func,
  onClickDelete: PropTypes.func,
  question: PropTypes.object,
  user: PropTypes.object,
}

export default Question
