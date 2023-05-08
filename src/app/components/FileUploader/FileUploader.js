import React from 'react'
import classes from './FileUploader.module.css';


const FileUploader = props => {

    const hiddenFileInput = React.useRef(null);
    const handleClick = event => {
        event.preventDefault();
        hiddenFileInput.current.click();
    };

    const handleChange = event => {
        props.onHandleFile(event);
    };

    return (
        <>
            <button className={classes.attachedButton} onClick={handleClick}>
                <img className={classes.imgStyle} src={props.img}  alt=""/>
                {props.btnText}
            </button>
            <input
                accept={props.accept}
                type="file"
                name={props.name}
                style={{display:'none'}}
                ref={hiddenFileInput}
                onChange={handleChange}
            />
        </>
    );
}
export default FileUploader;
