import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = ({date, onDelete, onToddleIncrease, onToddleRise}) => {


    const elements = date.map(item => {
        const {id,...itemProps} = item;
        return(
            <EmployeesListItem 
            key={id}
            {...itemProps}
            onDelete={() => onDelete(id)}
            onToddleIncrease={() => onToddleIncrease(id)}
            onToddleRise={() => onToddleRise(id)}/> 
        )
    })

    return (
        <ul className='app-list list-group'>
            {elements}
        </ul>
    )
}

export default EmployeesList;

