import React from 'react'
import{ Provider,connect} from 'react-redux';
import{ createStore} from 'redux';


 const initialState = {firstCounter:0,secondCounter : 0}
const countReducer = function(state,action){
 switch(action.type){
    
    case "INCREMENT1":
      return{...state,firstCounter: state.firstCounter + action.value} 
    case "DECREMENT1":
        return{...state,firstCounter: state.firstCounter - action.value}
    case "INCREMENT2":
        return{...state,secondCounter: state.secondCounter + action.value}
    case "DECREMENT2":
        return{...state,secondCounter: state.secondCounter - action.value}
    case 'reset' :
        return initialState
    default:
      return initialState;  
 }
}

const store = createStore(countReducer);
const mapStateTOProps = initialState =>{
  return{
    count1:initialState.firstCounter,
    count2:initialState.secondCounter
  }
}
const mapDispatchToProps = dispatch =>{
  return{
    add1: () =>dispatch({type:"INCREMENT1",value : 1}),
    subtract1: () =>dispatch({type:"DECREMENT1",value : 1}),
    add2: () =>dispatch({type:"INCREMENT2",value : 5}),
    subtract2: () =>dispatch({type:"DECREMENT2",value : 5}),
    reset: () =>dispatch({type:"reset"})
  }
}
const Component = ({count1,count2,add1,subtract1,add2,subtract2,reset}) => 
(<div>

    <div>
        <h1>INCREMENT BY ONE</h1>
        <h2>FIRST COUNTER = {count1}</h2>
        <button onClick={add1}>Add</button>
        <button onClick={subtract1}>Subtract</button>
     </div>

    <div>
        <h1>INCREMENT BY FIVE</h1>
        <h2>SECOND COUNTER= {count2}</h2>
        <button onClick={add2}>Add</button>
        <button onClick={subtract2}>Subtract</button>
     </div>
    <div>
        <h1></h1>
        <button onClick={reset}>RESET</button>
    </div>
    

 </div>)
const Container = connect(mapStateTOProps,mapDispatchToProps)(Component)
function Counders() {
  return (
    <Provider store = {store}>
      <div>
        <Container/>
      </div>
    </Provider>
  );
}

export default Counders;

