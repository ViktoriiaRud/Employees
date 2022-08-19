import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';

const EmployeesList = ({date}) => {


    const elements = date.map(item => {
        const {id,...itemProps} = item;
        return(
            <EmployeesListItem key={id}{...itemProps}/> 
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