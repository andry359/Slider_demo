import './TextBlock.scss';

const TextBlock = ({ text }) => {

    return (
        <div className="contentBlock__textBlock contentBlockText">
            {text}
        </div>
    )
}

export default TextBlock;