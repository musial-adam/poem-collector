// import styled from 'styled-components'

import Layout from '../components/layout'
import Form from '../components/form'

const AddPoem = () => {
  return (
    <Layout>
      <Form />
    </Layout>
  )
}
// const AddPoem = () => {
//   const [author, setAuthor] = useState('')

//   const handleAuthorChange = e => {
//     setAuthor(e.target.value)
//   }

//   const handleSubmit = () => {
//     const url = 'http://localhost:3001/api/poems/add'
//     console.log('Submitting...')
//   }

//   return (
//     <Layout>
//       <FormWrapper>
//         <h1>Add new poem</h1>
//         <form onSubmit={handleSubmit}>
//           <InputWrapper>
//             <label htmlFor="author">
//               Author
//               <input
//                 type="text"
//                 name="author"
//                 id="author"
//                 value={author}
//                 onChange={handleAuthorChange}
//               />
//             </label>
//           </InputWrapper>

//           <button type="submit">Add</button>
//         </form>
//         {/* <form action="http://localhost:3001/api/poems/add" method="POST">
//           <InputWrapper>
//             <label htmlFor="author">
//               Author
//               <input type="text" name="author" id="author" />
//             </label>
//           </InputWrapper>

//           <button type="submit">Add</button>
//         </form> */}
//       </FormWrapper>
//     </Layout>
//   )
// }

export default AddPoem
