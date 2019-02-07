  class IndecisionApp extends React.Component {
  constructor (props) {
    super (props);
    this.addOption = this.addOption.bind(this);
    this.removeAll = this.removeAll.bind(this);
    this.removeOption = this.removeOption.bind(this);
    this.pickRand = this.pickRand.bind(this);
    this.state = {
      appSubtitle: 'Computer decides life for you!',
      options: props.options,
    };
  };

  addOption (item) {
    if (!item)
      return 'Enter valid value to add item';
    else if (this.state.options.indexOf(item) > -1)
      return 'This option already exists';
    this.setState (() => ({options: this.state.options.concat(item)}));
  };

  removeOption (idx) {
    this.setState (() => ({
      options: this.state.options
        .filter ((item, index) => index !== idx)
    }));
  };
  
  pickRand () {
    const r = Math.floor(Math.random() * this.state.options.length);
    alert (this.state.options [r]);
  }

  removeAll () {
    this.setState (() => ({
      options: []
    }));
  };

  render () {
    return (
      <div>
        <Header subtitle={this.state.appSubtitle}/>
        <Action opt={this.state.options} rmvAll={this.removeAll} handlePick={this.pickRand}/>
        <Options opt={this.state.options} rmvOpt={this.removeOption}/>
        <AddOption addOpt={this.addOption}/>
      </div>
    );
  };
};

IndecisionApp.defaultProps = {options: ['Finish ReactJS Course', 'Contribute to PRaaS', 'Backup Sarayu Machine', 'Install Debian 9 in Sarayu Computer']}

const Header = props => 
  <div>
    <h1>{props.title}</h1>
    {props.subtitle && <h4>{props.subtitle}</h4>}
  </div>

Header.defaultProps = {title: 'Indecision App'};

const Action = props =>
  <div>
    <button 
      onClick={(e => props.rmvAll())}
      >Remove All Options
    </button>
    <button 
      disabled = {!props.opt.length}
      onClick = {(e => props.handlePick())}
      >What should I do?
    </button>
  </div>

const Options = props =>
  <ol>
    {props.opt.map ((itm, idx) => 
      <Option 
        key={idx}
        keyValue={idx}
        item={itm}
        rmvOption={props.rmvOpt} />
    )}
  </ol>

const Option = props => 
  <li>
    {props.item}
    <button 
      onClick={(e => props.rmvOption(props.keyValue))}
      >Remove
    </button>
  </li>

class AddOption extends React.Component {
  constructor (props) {
    super (props);
    this.onFormSubmit = this.onFormSubmit.bind (this);
    this.state = { error: undefined };
  };

  onFormSubmit (e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.addOpt (option)
    this.setState (() => ({ error }))
    if (option) e.target.elements.option.value = '';
  };
  
  render () {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onFormSubmit}>
          <input type="text" name="option"/>
          <button>Add option</button>
        </form>
      </div>
    );
  };
};

ReactDOM.render (<IndecisionApp options={['Watch Movie','Supper @Rayar ','Kabali Pradakshanam','KAJ Schmidt', 'Bicycle to Beach']}/>, document.getElementById('app'));