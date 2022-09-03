import './app-filter.css';

const AppFilter = (props) => {

const buttonsData = [
  {name: 'all' , label: 'All employees', colored: false},
  {name: 'rise', label: 'Salary increase', colored: false},
  {name: 'moreThem1000', label: 'Salary over 1000$', colored: true},
];


const buttons = buttonsData.map(({name, label, colored}) => {
  const active = props.filter === name;
  const clazz = active ? 'btn-light' : 'btn-outline-light'
  const style = colored ? {color : 'red'} : null;
  return (
    <button type="button"
        className={`btn ${clazz}`}
        key={name}
        onClick={() => props.onFilterSelect(name)}
        style={style}>
        {label}
    </button>
  )
})


    return (
        <div className="btn-group">
          {buttons}
            {/* <button 
              className="btn btn-light"
              tape="button">
                All employees
            </button>

            <button 
              className="btn btn-outline-light"
              tape="button">
                Salary increase
            </button>

            <button 
              className="btn btn-outline-light"
              tape="button">
                Salary over 1000$
            </button> */}
        </div>
    )
}


export default AppFilter;
