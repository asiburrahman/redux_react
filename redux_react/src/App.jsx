import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Counter from './components/Counter'
import Starts from './components/Starts'
import { decrement, increment } from './features/counters/counterSlice'
import Posts from './components/Posts'
import Todos from './components/Todos'
import AddTodo from './components/addTodo'



function App() {
  const counters = useSelector((state) => state.counters)
  const dispatch = useDispatch()
  const handleIncrement = (counterId) => {
    dispatch(increment(counterId))

  }
  const handleDecrement = (counterId) => {
    dispatch(decrement(counterId))  //Note: I can pass as parameter only one data if I have to pass multiple data then I can use object as a parameter

  }

  const totalCount = counters.reduce((sum, current) => sum + current.value, 0)
  return (
    <div className="w-screen h-screen p-10 bg-gray-100
       text-slate-700">
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter Application
      </h1>
      <div className="max-w-xl
        mx-auto mt-10 space-y-5">
        {counters.map(counter => <Counter key={counter.id} count={counter.value} onIncrement={() => handleIncrement(counter.id)} onDecrement={() => handleDecrement(counter.id)} />
        )}
        <Starts totalCount={totalCount} />
        {/* <Posts></Posts> */}
        <AddTodo></AddTodo>
        <Todos></Todos>
      </div>
    </div>
  )
}

export default App
