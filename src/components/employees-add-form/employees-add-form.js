
import {Component} from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {
   constructor(props) {
    super(props);
  this.state = {
    name: '',
    salary: ''
  }
   }


   onValueChange = (e) => {
    this.setState({
        [e.target.name] : e.target.salary
    })
   }

    render() {
        return (
            <div className="app-add-form">
                <h3>Add new employees</h3>
                <form className="add form d-flex">
                    <input type="text"
                    className="form control new-post-label" 
                    placeholder="name"
                    name='name'
                    onChange={this.onValueChange} />
                    
                    <input type="number"
                    className="form control new-post-label" 
                    placeholder="$?"
                    name='salary'
                    onChange={this.onValueChange} />
                 <button type="submit"
                 className="btn btn-outline-light">Add</button>
                </form>
    
            </div>
        )
    }
}


export default EmployeesAddForm;