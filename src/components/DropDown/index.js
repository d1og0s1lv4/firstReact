import './DropDown.css'

const DropDown = (props) => {
    return (
        <div>
            <label>{props.label}</label>
            <select>
                {props.item.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default DropDown