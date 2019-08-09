class Visibility extends React.Component {
  constructor(probs){
    super(probs);
    this.showText = this.showText.bind(this);
    this.hideText = this.hideText.bind(this);
    this.state = {
      vis = true
    };
  }
  showText() {
   // alert('show!');
    this.setState(() => {
      return {
        vis : !(prevState.state.vis) 
      };
    });
  }
  hideText() {
    //alert('hide!');
    this.setState(() => {
      return {
        vis : !(prevState.state.vis) 
      };
    });
  }
  render() {
    return(
      <div>
        <p>Some text</p>
        <button onClick={this.showText}>Show</button>
        <button onClick={this.hideText}>Hide</button>
      </div>
    ); 
  }
}

ReactDOM.render(<Visibility />, document.getElementById('app'));






// class Counter extends React.Component {
// constructor(probs) {
// super(probs);
// this.handleAddOne = this.handleAddOne.bind(this);
// this.handleMinusOne = this.handleMinusOne.bind(this);
// this.handleReset = this.handleReset.bind(this);
// this.state = {
//   count : 0 
//   };
// }
// handleAddOne() {
//   //console.log('handle Add One');
// //  this.state.count = this.state.count + 1;
// //  console.log(this.state);
// this.setState((prevState) => {
//   return {
//     count : prevState.count + 1
//   };
// });
// }
// handleMinusOne() {
//   //console.log('handle Minuse One');
//   this.setState((prevState) => {
//     return {
//       count : prevState.count -1
//     };
//   });
// }
// handleReset() {
//   //console.log('handle Reset');
//   this.setState(() => {
//     return {
//       count : 0
//     };
//   });
// }
//   render() {
//     return(
//       <div>
//         <h1>Count : {this.state.count} </h1>
//         <button onClick={this.handleAddOne}>+1</button>
//         <button onClick={this.handleMinusOne}>-1</button>
//         <button onClick={this.handleReset}>Reset</button>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Counter />, document.getElementById('app'));





/*const multiplier ={
    numbers : [2, 6, 8],
    mby : 3,
    multiply (){
        return this.numbers.map((number)=> number*this.mby)
    }


};
console.log(multiplier.multiply());
*/


//
/*
//console.log('app.js is ruuning');

const appRoot =document.getElementById('app');

const app = {
  title:'Indecision App',
  subtitle : 'Put your life in the hands of computer',
  options :[]
};
const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if(option){
    app.options.push(option);
    e.target.elements.option.value = ' ';
    renderForm();
  }
};
const template =(
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'no options'}</p>
    <p>{app.options.length}</p>
    <ol>
     
    </ol>
    <form onSubmit={onFormSubmit}>
      <input type="text" name="option"></input>
      <button>Add option</button>
    </form>
  </div>
);

const remove = () => {
  app.options = [];
  renderForm();
};
const decisionMaker = () =>{
  const randNum =Math.floor(Math.random() * app.options.length);
  const option = app.options[randNum];
  alert(option);
};
const renderForm = () => {
  const template =(
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'no options'}</p>
      <button disabled={app.options.length === 0} onClick={decisionMaker}>What I Should Do?</button>
      <button onClick={remove} >Remove All !</button>
      <ol>
      {
        app.options.map((option) => {
          return <li key={option}>{option}</li>
        })
      }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"></input>
        <button>Add option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderForm();
ReactDOM.render(template, appRoot);
*/
