import DotMenu from "../../assets/images/DotMenu.svg"

const Dropdown = ({ items }) => {
    return (
        <div className="dropdown dropdown-left dropdown-end">
            <div tabIndex={0} className="p-8 hover:cursor-pointer">
                <img src={DotMenu} alt="Menu" width="32px" className=""/>
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                {items.map((item) => (
                    <li key={item.label}>
                        <button onClick={item.action}>{item.label}</button>
                        {item.modal}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Dropdown