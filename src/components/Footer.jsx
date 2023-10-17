

const Footer = () => {
    return (
        <div>
            <div className="bg-base-100">

<footer className="footer container justify-between mx-auto flex p-10  text-base-content">
  <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
{/* 2nd footer */}
            <footer className="footer footer-center p-4 bg-base-200 text-base-content">
                <aside>
                    <p>Copyright © 2023 - All right reserved by Loveo Wedding Ltd</p>
                </aside>
            </footer>
            </div>
        </div>
    );
};

export default Footer;