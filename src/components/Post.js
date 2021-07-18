import React, {useState, useMemo, useContext} from 'react'
import {Context} from './context';


function sum(n){
  console.log(n)
  return n + 1
}

function Post({title, body, name, email}) {
  // const {changeTheme} = useContext(Context)
  const [num, setNum] = useState(0);
  const [green, setGreen] = useState('false');
  const countSum = useMemo(() => sum(num), [num]);
  const {dispatch} = useContext(Context)


  // console.log('post')
  return(
    <div className="article-content">
    <div className="article-title">
        <a href="/">{title}</a>
        <a href="/">{name}</a>
    </div>
      <p className="article-text" style={{color: green ? 'green' : 'red'}} onClick={() => setGreen()}> 
      {/* т.е. меняя цвет(кликая) у нас перезапускается вся функция Post и также перезапускается функц. countSum, оборачиваем вызываемую функцию в useMemo */}
          {body}
          {email}
      </p>
      {countSum}
      <button onClick={() => setNum(num + 1)} >+</button>
      <button onClick={() => dispatch({type: 'theme'})}>Theme</button>
    </div>
  ) 
}

export default React.memo(Post)  // если значения приходящие через пропсы не меняются, то memo их кэширует и не перередеривается