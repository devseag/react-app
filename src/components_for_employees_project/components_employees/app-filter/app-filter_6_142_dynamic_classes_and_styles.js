import './app-filter.css';

const AppFilter = (props) => {
    const buttonsData = [
        {name: 'all', label: 'All employees', colored: false},
        {name: 'rise', label: 'Employees for promotion', colored: false},
        {name: 'moreThen1000', label: 'Salary more than $1000', colored: true}, // comma is not error now
    ];

    const buttons = buttonsData.map(({name, label, colored}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light'
        const style = colored ? {color: 'red'} : null;
        return (
            <button 
                className={`btn ${clazz}`}
                type="button"
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
                type="button">
                    All employees
                </button>
                <button 
                className="btn btn-outline-light"
                type="button">
                    Employees for promotion
                </button>
                <button 
                className="btn btn-outline-light"
                type="button">
                    Salary more than $1000
                </button>                                 */}
        </div>
    )
}

export default AppFilter;