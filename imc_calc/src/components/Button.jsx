
import './Button.css'

const button = ({ id, text, action }) => {

    const handleAction = (e) => {
        action(e);
    };
    return (
        <button id={id} onClick={handleAction}>
            {text}
        </button>
    )
}

export default button