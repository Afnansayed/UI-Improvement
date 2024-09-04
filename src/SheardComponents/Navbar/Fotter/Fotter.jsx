import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import img from '../../../assets/photos/OSKHFO0.jpg'
const Fotter = () => {
  return (
    <>
      <footer className="footer bg-[#ecf5ff]  p-10">
        <nav>
            <span><img src={img} className="w-12 rounded-bl-xl rounded-tr-xl mb-3" alt="logo" /></span>
            <p>Lorem ipsum dolor sit amet consectetur,<br /> adipisicing elit. </p>
        </nav>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <footer className="footer bg-[#ecf5ff] border-base-300 border-t px-10 py-4">
        <aside className="grid-flow-col items-center ">
            
          <p>
            ACME Industries Ltd.
            
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a>
              <FaTwitterSquare className="text-[#0e63b5] text-2xl" />
            </a>
            <a>
              <FaFacebookSquare className="text-[#0e63b5] text-2xl" />
            </a>
            <a>
              <FaLinkedin className="text-[#0e63b5] text-2xl"/>
            </a>
          </div>
        </nav>
      </footer>
    </>
  );
};

export default Fotter;
