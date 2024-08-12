import DotMenu from "../../assets/images/DotMenu.svg"

const Dropdown = ({items}) => {

  return (
    <div className="dropdown dropdown-left dropdown-end">
        <div tabIndex={0} role="button" className="btn m-1">
            <img src={DotMenu} alt="" width={"32px"}/>
        </div>
        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            {items.map((item)=>{
                return (
                    <>
                        <li key={item.label}><button onClick={item.action}>{item.label}</button></li>
                        {item.modal}
                    </>
                
            )                     
            })}
        </ul>
    </div>
  )
}

export default Dropdown
