import styled from 'styled-components'

import Layout from '../components/layout'

const FormWrapper = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  width: 30vw;
  /* height: 50vh; */
  margin: 10rem auto;

  font-family: ${({ theme }) => theme.font.family.openSans};

  padding: 3rem;

  background-color: white;
  border-radius: 0.5rem;
  /* width: 100%;
  height: 100%; */

  /* box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
    0px 3px 4px 0 rgba(0, 0, 0, 0.14), 0px 1px 8px 0 rgba(0, 0, 0, 0.12); */
  box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.3);

  button {
    width: 80%;
    height: 5rem;
    display: block;
    margin: 5rem auto 2rem auto;
    color: white;
    font-size: 2rem;
    font-family: ${({ theme }) => theme.font.family.openSans};
    /* border: 1px solid red; */
    border-radius: 10rem;
    background: ${({ theme }) => theme.gradients.JShine};
    transition: transform 0.25s ease-in-out;

    &:hover {
      cursor: pointer;
      transform: translateY(-2px);
      /* transform: scale(1.05); */
    }
  }
`

const InputWrapper = styled.div`

  margin: 2rem 0;

  *:focus {
    outline: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.red};
    /* outline-width: 10px; */
    /* outline-color: ${({ theme }) => theme.colors.red}; */
  }

  label {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.darkgrey};
    display: block;
  }
  
  input {
    margin-top: 0.5rem;
    padding-left: 0;
    display: block;
    width: 100%;
    border: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.lightgrey};
    
  }
  
  /* stylelint-disable */
  
  input[type=number]::-webkit-inner-spin-button, 
  input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0;
  
  /* stylelint-enable */ 
}

  textarea {
    margin-top: 0.5rem;
    padding-left: 0;
    width: 100%;
    height: 100%;
    height: auto;
    resize: none;
    border: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.lightgrey};
  }
`

const AddPoem = () => {
  return (
    <Layout>
      <FormWrapper>
        <h1>Add new poem</h1>

        <form action="http://localhost:3001/api/poems/add" method="POST">
          <InputWrapper>
            <label htmlFor="author">
              Author
              <input type="text" name="author" id="author" />
            </label>
          </InputWrapper>

          {/* <InputWrapper>
            <label htmlFor="volume">
              Volume
              <input type="text" name="volume" id="volume" />
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
              />
            </label>
          </InputWrapper>

          <InputWrapper>
            <label htmlFor="title">
              Title
              <input type="text" name="title" id="title" />
            </label>
          </InputWrapper>

          <InputWrapper>
            <label htmlFor="story">
              Poem
              <textarea id="story" name="story">
                ...
              </textarea>
            </label>
          </InputWrapper> */}

          <button type="submit">Add</button>
        </form>
      </FormWrapper>
    </Layout>
  )
}

export default AddPoem
