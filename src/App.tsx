import {Status} from './components/Status'
import { Heading } from './components/Heading'
import {Oscar} from './components/Oscar'
const App = () => {
  return (
    <div className='App'>
    <Status status='loading' />
      <Heading>Placeholder text</Heading>
      
      <Oscar>
      <Heading>Oscar goes to Dicaprio</Heading>
      </Oscar>
    </div>
  )
}

export default App
