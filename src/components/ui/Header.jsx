const Header = ({ children }) => {
  return (
    <header className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {children}
      </div>
    </header>
  );
};

export default Header;