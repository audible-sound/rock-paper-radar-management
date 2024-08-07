
const Select = ({badges,setBadges}) => {
    return (
        <select className="select select-bordered w-full max-w-xs" onChange={(e) =>{ 
            if (!badges.includes(e.target.value)){
                setBadges([...badges,e.target.value])
            }  
            }}>
            <option disabled selected>Pick your favorite Simpson</option>
            <option value={"Malaysia"}>Malaysia</option>
            <option value={"Indonesia"}>Indonesia</option>
            <option value={"Hong Kong"}>Hong Kong</option>
            <option value={"Cambodia"}>Cambodia</option>
            <option value={"Japan"}>Japan</option>
        </select>
    )
}

export default Select
