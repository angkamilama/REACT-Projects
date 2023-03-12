

const DisplayText = (props) => {
    
    return (
        <div className="text-box">
        {props.sendValue.name && <p>The name of the searched person is <span class="text-item">{props.sendValue.name}</span></p>}
        {props.sendValue.bio && <p>The position is <span class="text-item">{props.sendValue.bio}</span></p>}
        {props.sendValue.location && <p>The location is <span class="text-item">{props.sendValue.location}</span></p>}
        {props.sendValue.followers && <p>The person has <span class="text-item">{props.sendValue.followers} followers</span></p>}
        {props.sendValue.url && <p>The github url is <span class="text-item">{props.sendValue.url} followers</span></p>}
        </div>
    ) 
};

export default DisplayText;

