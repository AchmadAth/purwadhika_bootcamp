import { Routes } from 'react-router-dom'
import './App.css'
import styled from 'styled-components'

const Box = styled.div`
  padding : 5px
  border : red solid 20px
`

function DisplayName(props){
  return (
    <h1 className='color-red'>
      Hi, {props.firstName} {props.lastName}
    </h1>
  )
}


function App() {
  const name = 'Atoila'
  return (
    <Box>
      <Route>
          <Routes path='/' element={<h1>homepage</h1>}/>
          <Routes path='/' element={<h1>about</h1>}/>
      </Route>

      <div style={{border:'1px solid cyan',backgroundColor:'azure'}}>
        <DisplayName firstName='Ato' lastName='Gans'/>
        <DisplayName firstName='Ato' lastName='Gans'/>
        <DisplayName firstName='Ato' lastName='Gans'/>
        <DisplayName firstName='Ato' lastName='Gans'/>
      </div>
    </Box>
  )
}

export default App 
