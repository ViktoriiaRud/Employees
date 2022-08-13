import './app-filter.css';


const AppFilter = () => {
    return (
        <div className="btn-group">
            <button 
              className="btn btn-light"
              tape="button">
                All employees
            </button>

            <button 
              className="btn btn-online-light"
              tape="button">
                Salary increase
            </button>

            <button 
              className="btn btn-online-light"
              tape="button">
                Salary over 1000$
            </button>

        </div>
    )
}


export default AppFilter;
