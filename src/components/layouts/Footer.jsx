import { FaSlackHash } from "react-icons/fa"

function Footer() {
    const footerYear = new Date().getFullYear()
  return (
    <footer className="footer mt-12 p-10 footer-center">
        <div>
        <FaSlackHash className="text-5xl text-[#008000]" />
        <p className="text-[#008000]">Copyright &copy; {footerYear} All rights reserved</p>
        </div>
    </footer>
  )
}

export default Footer
