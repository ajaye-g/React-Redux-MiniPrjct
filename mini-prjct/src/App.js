// import './App.css';
// import{ Provider,connect} from 'react-redux';
// import{ createStore} from 'redux';
import Counders from './Counders';

// const countReducer = function(state = 0,action){
//  switch(action.type){
    
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state-1;
//     default:
//       return state;  
//  }
// }

// const store = createStore(countReducer);
// const mapStateTOProps = state =>{
//   return{
//     count:state
//   }
// }
// const mapDispatchToProps = dispatch =>{
//   return{
//     add: () =>dispatch({type:"INCREMENT"}),
//     subtract: () =>dispatch({type:"DECREMENT"})
//   }
// }
// const Component = ({count,add,subtract}) => 
// (<div>
//   <h1>Count = {count}</h1>
//   <button onClick={add}>Add</button>
//   <button onClick={subtract}>Subtract</button>
//  </div>)
// const Container = connect(mapStateTOProps,mapDispatchToProps)(Component)
function App() {
  return (
    // <Provider store = {store}>
      <div>
        <Counders/>
      </div>
    // </Provider>
  );
}

export default App;
