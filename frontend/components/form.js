import { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const FormWrapper = styled.div`
  width: 60vw;
  margin: 5rem auto;
  font-family: ${({ theme }) => theme.font.family.openSans};
  padding: 3rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.3);

  button {
    width: 80%;
    height: 5rem;
    display: block;
    margin: 5rem auto 2rem auto;
    color: white;
    font-size: 2rem;
    font-family: ${({ theme }) => theme.font.family.openSans};
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
    margin-top: 2.4rem;
    white-space: pre;
    resize: none;
    width: 100%;
    min-height: 19.8rem;
    border: 2px solid ${({ theme }) => theme.colors.lightgrey};
  }
  *:focus {
    outline: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.red};
  }
`

const Form = () => {
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

  const handleSubmit = async e => {
    const url = 'http://localhost:3001/api/poems/add'
    // const res = await axios.post(url, {
    await axios.post(url, {
      author,
      volume,
      year,
      title,
      content,
    })
    e.preventDefault()
  }

  return (
    <FormWrapper>
      <h1>Add new poem</h1>
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

            <button type="submit">Add</button>
          </SideWrapper>
        </FlexWrapper>
      </form>
    </FormWrapper>
  )
}

export default Form
