import VerticalNavbar from './AdminVerticalNavbar'

const AdminLayout = ({ children }) => {
    return (
        <div className="flex flex-row w-full h-dvh scrollbar-hidden ">
            <VerticalNavbar />
            <div className='flex flex-col min-h-dvh h-fit bg-[#7091E6] bg-opacity-20 w-full pl-[4.5rem] items-stretch'>
                {children}
            </div>
        </div>

    )
}

export default AdminLayout