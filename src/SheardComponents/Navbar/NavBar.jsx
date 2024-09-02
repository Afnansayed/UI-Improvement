

const NavBar = () => {
    return (
        <div className="bg-[#ecf5ff] flex justify-around p-3 rounded-sm">
            <div>
                <ul className="flex gap-6 text-xl font-semibold">
                    <li>Buy</li>
                    <li>Sell</li>
                    <li>Services</li>
                </ul>
            </div>
            <div><span>icon</span></div>
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