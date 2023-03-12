import DisplayText from "./DisplayText";


const ChoosingProperty = () => {
    return(
        
        <div className="properties">
            <form >
            <h1>choose a property</h1>
            <label className="property-heading"> 
            Pick a Property:
            <select name="property" id="userProperties">
            </select>
            </label>
            <input type="submit" className="btn-property"/>
        </form>      
        </div>

    );

};

export default ChoosingProperty;