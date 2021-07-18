import React, { useContext, useEffect} from 'react'
import Checkbox from '../common/Checkbox'
import {Context} from './context'



function Header({check, changeType, changeTheme}) {
  const {dispatch} = useContext(Context)

  useEffect(() => {
    console.log('update')
  }, [changeType])


  return (
    <header className="blog-header" >
      <div className="layout layout-header" >
        <div className="blog-logo">
          <a href="/">IT Блог</a>
        </div>
        <div className="tabs">
        <button onClick={() => dispatch({type: 'users', payload: 'users'})}>Пользователи</button>
        <button onClick={() => dispatch({type: 'posts', payload: 'posts'})}>Посты</button>
        </div>
        <Checkbox 
            checked={check} 
            changeTheme={() => dispatch({type: 'theme'})}
            // changeTheme={() => changeTheme()}
        />
      </div>
  </header>
  )
}

export default Header