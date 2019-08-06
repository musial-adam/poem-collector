import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import axios from 'axios'

const FormWrapper = styled.div`
  width: 60vw;
  /* margin: 5rem auto; */
  font-family: ${({ theme }) => theme.font.family.openSans};
  padding: 3rem;
  background-color: white;
  border-radius: 0.5rem;
  /* box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.3); */
  text-align: left;

  button {
    width: 20rem;
    height: 5rem;
    display: block;
    margin: 5rem auto 2rem auto;
    color: white;
    font-size: 2rem;
    font-family: ${({ theme }) => theme.font.family.openSans};
    border: none;
    border-radius: 10rem;
    /* background: ${({ theme }) => theme.gradients.JShine}; */
    background-color: ${({ theme }) => theme.colors.red};
    transition: transform 0.25s ease-in-out, box-shadow 0.25s ease-in-out;

    &:hover {
      cursor: pointer;
      transform: translateY(-4px);
      box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.3);
    }
  }

  label {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.darkgrey};
    display: block;
  }

  h1 {
    margin-bottom: 4rem;
  }
`

const InputWrapper = styled.div`
  margin: 0rem 0rem 2rem 0rem;

  *:focus {
    outline: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.red};
  }


  /* label {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.darkgrey};
    display: block;
  } */

  input {
    margin-top: 0.5rem;
    padding-left: 0;
    display: block;
    width: 100%;
    border: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.lightgrey};
  }

  /* stylelint-disable */

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    margin: 0;

    /* stylelint-enable */
  }
  


  /* textarea {
    padding-left: 0;
    width: 100%;
    height: 100%;
    height: auto;
    resize: none;
    border: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.lightgrey};
  } */
`

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const SideWrapper = styled.div`
  width: 49%;
  /* border: 2px solid orange; */
`

const TextareaWrapper = styled.div`
  textarea {
    box-sizing: border-box;
    margin-top: 2.5rem;
    white-space: pre;
    resize: none;
    width: 100%;
    min-height: 19.7rem;
    /* min-height: 20rem; */

    height: auto;
    border: 2px solid ${({ theme }) => theme.colors.lightgrey};
  }
  *:focus {
    outline: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.red};
  }
`

const StatusMessage = styled.div`
  font-family: ${({ theme }) => theme.font.family.openSans};
  font-size: 2rem;
  color: ${props => (props.success === 'SUCCESS' ? 'green' : 'red')};
  background-color: white;
  text-align: center;
  padding: 2rem;
  border-radius: 0.5rem;
`

const Form = ({ mode, poemData, editHandler }) => {
  const [submissionStatus, setSubmissionStatus] = useState('')

  const [author, setAuthor] = useState('')
  const [volume, setVolume] = useState('')
  const [year, setYear] = useState('')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleAuthorChange = e => {
    setAuthor(e.target.value)
  }
  const handleVolumeChange = e => {
    setVolume(e.target.value)
  }
  const handleYearChange = e => {
    setYear(e.target.value)
  }
  const handleTitleChange = e => {
    setTitle(e.target.value)
  }
  const handleContentChange = e => {
    setContent(e.target.value)
  }

  const handleClearForm = () => {
    setAuthor('')
    setVolume('')
    setYear('')
    setTitle('')
    setContent('')
  }

  useEffect(() => {
    if (mode === 'edit' && poemData) {
      setAuthor(poemData.author)
      setVolume(poemData.volume)
      setYear(poemData.year)
      setTitle(poemData.title)
      setContent(poemData.content)
    }
  }, [mode, poemData])

  const handleSubmit = async e => {
    e.preventDefault()

    if (mode === 'create') {
      const url = 'http://localhost:3001/api/poems/add'
      const res = await axios.post(url, {
        // await axios.post(url, {
        author,
        volume,
        year,
        title,
        content,
      })

      if (res.status === 201) {
        handleClearForm()
        setSubmissionStatus('SUCCESS')
      } else {
        setSubmissionStatus('FAILURE')
      }
    }

    if (mode === 'edit' && poemData) {
      const url = `http://localhost:3001/api/poems/${poemData.id}`
      const res = await axios.put(url, {
        author,
        volume,
        year,
        title,
        content,
      })
      if (res.status === 200) {
        editHandler()
        setSubmissionStatus('SUCCESS')
        // await editHandler()
      } else {
        setSubmissionStatus('FAILURE')
      }
    }
  }

  return submissionStatus === 'SUCCESS' ? (
    <StatusMessage success={submissionStatus}>{submissionStatus}</StatusMessage>
  ) : (
    <FormWrapper>
      <h1>{mode === 'create' ? 'Add new poem' : 'Edit poem'}</h1>
      <form onSubmit={handleSubmit}>
        <FlexWrapper>
          <SideWrapper>
            <InputWrapper>
              <label htmlFor="author">
                Author
                <input
                  type="text"
                  name="author"
                  id="author"
                  value={author}
                  onChange={handleAuthorChange}
                />
              </label>
            </InputWrapper>

            <InputWrapper>
              <label htmlFor="author">
                Volume
                <input
                  type="text"
                  name="volume"
                  id="volume"
                  value={volume}
                  onChange={handleVolumeChange}
                />
              </label>
            </InputWrapper>

            <InputWrapper>
              <label htmlFor="year">
                Year of publication
                <input
                  type="number"
                  min="1900"
                  max="2019"
                  step="1"
                  name="year"
                  id="year"
                  value={year}
                  onChange={handleYearChange}
                />
              </label>
            </InputWrapper>

            <InputWrapper>
              <label htmlFor="title">
                Title
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={title}
                  onChange={handleTitleChange}
                />
              </label>
            </InputWrapper>
          </SideWrapper>
          <SideWrapper>
            <TextareaWrapper>
              <label htmlFor="content">
                Content
                <textarea
                  name="content"
                  id="content"
                  value={content}
                  onChange={handleContentChange}
                />
              </label>
            </TextareaWrapper>
          </SideWrapper>
        </FlexWrapper>
        {/* <button type="button" onClick={handleClearForm}>
          Cancel
        </button> */}
        <button type="submit">Submit</button>
      </form>
    </FormWrapper>
  )
}

export default Form

Form.propTypes = {
  mode: PropTypes.oneOf(['create', 'edit']).isRequired,
  poemData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    volume: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  editHandler: PropTypes.func.isRequired,
}
