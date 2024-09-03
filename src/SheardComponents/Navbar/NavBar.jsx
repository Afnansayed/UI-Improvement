import { Navigate, NavLink } from "react-router-dom";

const NavBar = () => {
  const nav = (
    <>
       <NavLink to='/' className={({isActive}) => isActive ? 'border-b-[3px] border-blue-600 ' : ''}><li>Home</li></NavLink>
       <NavLink to='/buy' className={({isActive}) => isActive ? 'border-b-[3px] border-blue-600 ' : ''}><li>Buy</li></NavLink>
       <NavLink to='/sell' className={({isActive}) => isActive ? 'border-b-[3px] border-blue-600 ' : ''}><li>Sell</li></NavLink>
      <li>Services</li>
    </>
  );
  return (
    <div className="bg-[#ecf5ff] flex justify-around p-3 rounded-sm">
      <div>
        <ul className="flex gap-6 text-xl font-semibold">
            {nav}
        </ul>
      </div>
      <div>
        <span>icon</span>
      </div>
      <div>
        <ul className="flex gap-6 text-xl font-semibold">
          <li>Mange Rent</li>
          <li>Sign in</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
