import './app-info.css';

const AppInfo = ({increased, employees}) => {
    return (
        <div className="app-info">
            <h1>Track employees in company N</h1>
            <h2>All number of employees: {employees}</h2>
            <h2>Benefit is received: {increased}</h2>
        </div>
    )
}

export default AppInfo;