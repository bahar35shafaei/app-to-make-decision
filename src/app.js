//import './utils.js';
// import {square, add} from './utils.js';

// console.log(square(4));
// console.log(add(100, 23));
// console.log('app.js is running!!!!!??');

// import {isAdoult, canDrink} from './person.js';

// console.log(isAdoult(12));
// console.log(canDrink(190));

// import validator from 'validator';

// console.log(validator.isEmail('test@gmail.com'));

import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/style.scss';




  
 
  
 
  
  // class Header extends React.Component {
  //   render() {
      
  //     return(
  //       <div>
  //         <h1>{this.props.tittle}</h1>
  //         <h2>{this.props.subTittle}</h2>
  //       </div>
  //     ); 
  //   }
  // }
  
  
  
  // class Action extends React.Component {
  //   // handlePick() {
  //   //   alert('handle Pick!');
  //   // }
  //   render(){
  //     return (
  //       <div>
  //       <button 
  //         onClick={this.props.handlePick}
  //         disabled={!this.props.hasOption}
  //         >
  //         What should I do ?
  //       </button>
  //       </div>
  //     );
  //   }
  // }
  
  
  // class Options extends React.Component {
  //   // handleRemoveAll() {
  //   //   //alert ('remove all !');
  //   //   console.log(this.props.options);
  //   // }
  //   render() {
  //     return(
  //       <div>
  //         <button onClick={this.props.handleDeleteOptions}>Remove All</button>
  //         {
  //           this.props.options.map((option) => <Option key={option} optionText={option}/>)
  //         }
  //       </div>
  //     );
  //   }
  // }
  
  
 
  // class Option extends React.Component {
  //   render() {
  //     return(
  //       <div>
  //         {this.props.optionText}
  //       </div>
  //     );
  //   }
  // }
//   class AddOption extends React.Component {
//     constructor(props) {
//       super(props);
//       this.handleAddOption = this.handleAddOption.bind(this);
//       this.state = {
//         error : undefined
//       }
//     }
//     handleAddOption(e) {
//       e.preventDefault();
      
//       const option = e.target.elements.option.value.trim();
//       const error = this.props.handleAddOption(option);
     
//       this.setState(() => ({error}));
  
//       if(!error) {
//         e.target.elements.option.value = '';
//       }
//       // this.setState(() => {
//       //   return {
//       //     error 
//       //   };
//       // });
//     }
    
//     render() {
//       return(
//         <div>
//           {this.state.error && <p>{this.state.error}</p>}
//           <form onSubmit={this.handleAddOption}>
//             <input type="text" name="option"></input>
//             <button>Add option</button>
//           </form>
//         </div>
//       );
//     }
//   }
  
  
  // IndecisionApp.defaultProps = {
  //   options : []
  // };
  
  /*
  const jsx = (
    <div>
      <Header />
      <Action />
      <Options />
      <AddOption />
    </div>
  );
  */
  
  
  // const User = (props) => {
  //   return(
  //     <div>
        
  //       <p>Name : {props.name}</p>
  //       <p>Age : {props.age}</p>
  //     </div>
  //   ); 
    
  // };
  
  ReactDOM.render(<IndecisionApp />, document.getElementById('app'));