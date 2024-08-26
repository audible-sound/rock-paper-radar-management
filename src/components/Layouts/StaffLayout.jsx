import StaffVerticalNavbar from './StaffVerticalNavbar'

const StaffLayout = ({ children }) => {
    return (
        <div className="flex flex-row w-full h-dvh scrollbar-hidden ">
            <StaffVerticalNavbar />
            <div className='flex flex-col min-h-dvh h-fit bg-[#7091E6] bg-opacity-20 w-full pl-[4.5rem] items-stretch'>
                {children}
            </div>
        </div>

    )
}

export default StaffLayout