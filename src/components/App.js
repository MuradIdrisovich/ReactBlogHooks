import React, {useState, useEffect, useRef, useReducer, useMemo} from 'react'
import Header from './Header'
import PostList from './PostList'
import Footer from './Footer'
import { Context } from './context'
import reducer from './reducer'

// const initPost = [
//   {
//       id: 1,
//       title: "Title",
//       body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis quaerat autem eos fuga voluptas deserunt laudantium! Similique delectus consequuntur, magni perferendis quam assumenda recusandae, facilis aliquid, eius provident eveniet architecto!"
//   },
//   {
//       id: 2,
//       title: "Title",
//       body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis quaerat autem eos fuga voluptas deserunt laudantium! Similique delectus consequuntur, magni perferendis quam assumenda recusandae, facilis aliquid, eius provident eveniet architecto!"
//   },
//   {
//       id: 3,
//       title: "Title",
//       body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis quaerat autem eos fuga voluptas deserunt laudantium! Similique delectus consequuntur, magni perferendis quam assumenda recusandae, facilis aliquid, eius provident eveniet architecto!"
//   },
//   {
//       id: 5,
//       title: "Title",
//       body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis quaerat autem eos fuga voluptas deserunt laudantium! Similique delectus consequuntur, magni perferendis quam assumenda recusandae, facilis aliquid, eius provident eveniet architecto!"
//   },
//   {
//       id: 6,
//       title: "Title",
//       body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis quaerat autem eos fuga voluptas deserunt laudantium! Similique delectus consequuntur, magni perferendis quam assumenda recusandae, facilis aliquid, eius provident eveniet architecto!"
//   }
// ]

function App() {

  const ref = useRef(null)
  // const [posts, setPost] = useState([])
  // const [theme, setTheme] = useState('light')
  // const [check, setCheck] = useState(false);
  // const [type, setType] = useState('posts')
  const [state, dispatch] = useReducer(reducer, {posts: [], check: false, type: 'posts', theme: 'light'})

  useEffect(() => {
    setTimeout(() => {
      document.title = `Page ${state.type}`
    }, 300);
    fetch(`https://jsonplaceholder.typicode.com/${state.type}`)
      .then(response => response.json())
      .then(json => 
        dispatch({type: 'fetch', payload: json}))
      return () => {
        document.title = 'Page'  // пример работы componentWillUnmount, т.е. после перерисовки(удаления компонента) перед появлением нового и вызывается этот return
      }
  },[state.type]);

  // const changeTheme = () => {
  //   setTheme(theme === 'light' ? 'dark' : 'light');
  //   setCheck(!check)
  // }
 
  const handleFocus = () => {  
    console.log(ref.current.focus());
    // ref.current.style.color = 'red';
  }


  return (
    <Context.Provider value={
      {dispatch
      // changeTheme
      }
    }>
      <div className={`app ${state.theme}`}>
      <div className='form'>
        <input ref={ref}/>
        <button onClick={handleFocus}>focus</button> 
      </div>
      <Header  check={state.check} 
        // changeTheme={state.change}
      />
      <PostList posts={state.posts}/>
      <Footer />
    </div>
    </Context.Provider>
  )
  
}

export default App
