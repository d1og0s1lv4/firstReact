import './InputBox.css'

const Inputbox = (props) => {
    return (
        <div className="input-box">
            <label>{props.label}
            </label>
            <input placeholder={props.placeholder} />
        </div >    
)
}

export default Inputbox