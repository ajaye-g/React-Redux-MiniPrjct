import React from 'react'

export default function MiddlewareThunk() {
  return (next) =>{          //for what to do next we use next
    return(action) =>{       // here we give what the next action we needed,dispatch will not automatically done because of middleware
        // console.log("hello")
        // next({type:"INCREMENT1",value : 1})
         next(action)
    }
  }
}
// redux logger will show what the action is done,and it will also show 
//state before action and state after action
//when we write state before next it will give previous state,
//if we write state after next it will give state after updating in store

//example for above

// export default function MiddlewareThunk({dispatch,getState}) {
//     return (next) =>{          
//       return(action) =>{  
//         console.log('PREV STATE',getState())
//         console.log('ACTION',action)
//         next(action)
//         console.log('NEXT STATE',getState())
//         console.log('-----------')
//       }
//     }
// }

// redux logger npm library is there so install it then make changes in store components import it and add it in create store

//we only use synchronous actions in reducers but in thunk we can use asynchronous actions
//thunk will provide function interface which can dispatch
//we can return functions in action using thunk