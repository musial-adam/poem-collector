const sampleData = [
  {
    _id: 'abc123',
    author: 'John Doe',
    volume: 'Volume 1',
    year: 2000,
    title: 'Mock title',
    content: 'One\nTwo\nThree',
    __v: 0,
  },
  {
    _id: 'efg456',
    author: 'Jane Smith',
    volume: 'Volume 2',
    year: 2019,
    title: 'Another mock title',
    content: 'Empty poem',
    __v: 0,
  },
]

const mockAxios = jest.genMockFromModule('axios')

mockAxios.get = jest.fn(() => {
  console.log('mockAxios: get')
  return Promise.resolve({ data: sampleData })
})

mockAxios.delete = jest.fn(() => {
  console.log('mockAxios: delete')
  return Promise.resolve('Poem deleted')
})

export default mockAxios

// const axios = {
//   get: jest.fn(() => {
//     console.log('Ola amigo, I am a mock of axios.get')
//     return Promise.resolve({ data: sampleData })
//   }),
// }

// export default axios
