import React from 'react'
import logo from './logo.svg'
import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import MyInfo from './components/MyInfo'
import TodoItem from './components/TodoItem'

function App() {
    return (
        <div className='todo-list'>
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </div>
    )
}

//function App() {
//    const day = new Date()
//    const hours = day.getHours()
//    let timeOfDay
//    const styles = {
//        color: 'rosybrown',
//        fontSize: '30px'
//    }
//        
//    if (hours < 12) {
//        timeOfDay = 'morning'
//    } else if (hours >= 12 && hours < 12) {
//        timeOfDay = 'afternoon'
//    } else {
//        timeOfDay = 'night'
//        styles.textAlign = 'center'
//    }
//    
//  return (
//    <div className='navbar'>
//      <h1 style={styles}>Good {timeOfDay}</h1>
//    </div>
//  )
//}


//function App() {
//  return (
//    <div className='container'>
//      <Header />
//      <MyInfo />
//      <Footer />
//    </div>
//  )
//}

//function App() {
//    return (component)    
//}
//
//let component = 
//    <div>
//      <p>
//        <input type="checkbox" id="one" name="one" /> 
//        <label for="one">One</label>
//      </p>
//      <p>
//        <input type="checkbox" id="two" name="two" /> 
//        <label for="two">Two</label>
//      </p>
//      <p>
//        <input type="checkbox" id="three" name="three" /> 
//        <label for="three">Three</label>
//      </p>
//      <p>
//        <input type="checkbox" id="four" name="four" /> 
//        <label for="four">Four</label>
//      </p>
//    </div>

export default App
