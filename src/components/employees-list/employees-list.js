import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';

const EmployeesList = ({date}) => {


    const elements = date.map(item => {
        return(
            <EmployeesListItem  {...item}/> 
             //1 variant: name={item.name} salary={item.salary} bat ...item
        )
    })

    return (
        <ul className='app-list list-group'>
            {elements}
        </ul>
    )
}

export default EmployeesList;