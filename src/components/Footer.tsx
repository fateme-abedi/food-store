import React from "react"

const Footer :React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white py-10 shadow ">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">About Us</h4>
              <p className="text-gray-400">
                We are a leading food delivery service, committed to bringing your favorite meals right to your door.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="text-gray-400">
                <li className="mb-2"><a href="#">Home</a></li>
                <li className="mb-2"><a href="#">Menu</a></li>
                <li className="mb-2"><a href="#">Contact</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
              <p className="text-gray-400 mb-2">Email: support@fooddelivery.com</p>
              <p className="text-gray-400 mb-2">Phone: +1 234 567 890</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="text-center mt-8 text-gray-500">
            &copy; 2024 Food Delivery. All rights reserved.
          </div>
        </footer>
      );
    };
export default Footer