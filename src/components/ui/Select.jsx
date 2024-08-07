
const Select = ({options, defaultChoice}) => {
  return (
    <select className="select select-bordered w-full max-w-xs">
        <option disabled selected>{defaultChoice}</option>
        {
            options.map((value)=>{
                return <option key={value} value={value}>{value}</option>
            })
        }
        
    </select>
  )
}

export default Select
