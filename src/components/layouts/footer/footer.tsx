const Footer = () => {
  return (
    <footer className="bg-gray-100 py-16 my-10 text-h5">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        <div className="-mt-10">
          <div className="flex items-center">
            <img
              className="w-32 h-32"
              src="/logo.svg"
              alt="Nest Logo"
              width={50}
              height={50}
            />
          </div>
          <p className="mb-2">Awesome grocery store </p>
          <p className="flex items-center mb-2">
            <span className="material-icons mr-2">location_on</span>
            5171 W Campbell
          </p>
          <p className="flex items-center mb-2">
            <span className="material-icons mr-2">call</span>
            (+91) - 540-025-124553
          </p>
          <p className="flex items-center mb-2">
            <span className="material-icons mr-2">email</span>
            sale@Nest.com
          </p>
          <p className="flex items-center">Hours:10:00-18:00,Mon-Sat</p>
        </div>
        <div className="text-small">
          <h2 className="text-lg font-bold mb-4">Company</h2>
          <ul>
            <li className="mb-2">
              <a href="#">About Us</a>
            </li>
            <li className="mb-2">
              <a href="#">Delivery Information</a>
            </li>
            <li className="mb-2">
              <a href="#">Privacy Policy</a>
            </li>
            <li className="mb-2">
              <a href="#">Terms & Conditions</a>
            </li>
            <li className="mb-2">
              <a href="#">Contact Us</a>
            </li>
            <li className="mb-2">
              <a href="#">Support Center</a>
            </li>
            <li className="mb-2">
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4 text-small">Account</h2>
          <ul className="text-small">
            <li className="mb-2">
              <a href="#">Sign In</a>
            </li>
            <li className="mb-2">
              <a href="#">View Cart</a>
            </li>
            <li className="mb-2">
              <a href="#">My Wishlist</a>
            </li>
            <li className="mb-2">
              <a href="#">Track My Order</a>
            </li>
            <li className="mb-2">
              <a href="#">Help Ticket</a>
            </li>
            <li className="mb-2">
              <a href="#">Shipping Details</a>
            </li>
            <li className="mb-2">
              <a href="#">Compare products</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4 text-small">Corporate</h2>
          <ul className="text-small">
            <li className="mb-2">
              <a href="#">Become a Vendor</a>
            </li>
            <li className="mb-2">
              <a href="#">Affiliate Program</a>
            </li>
            <li className="mb-2">
              <a href="#">Farm Business</a>
            </li>
            <li className="mb-2">
              <a href="#">Farm Careers</a>
            </li>
            <li className="mb-2">
              <a href="#">Our Suppliers</a>
            </li>
            <li className="mb-2">
              <a href="#">Accessibility</a>
            </li>
            <li className="mb-2">
              <a href="#">Promotions</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4 text-small">Popular</h2>
          <ul className="text-small">
            <li className="mb-2">
              <a href="#">Milk & Flavoured Milk</a>
            </li>
            <li className="mb-2">
              <a href="#">Butter and Margarine</a>
            </li>
            <li className="mb-2">
              <a href="#">Eggs Substitutes</a>
            </li>
            <li className="mb-2">
              <a href="#">Marmalades</a>
            </li>
            <li className="mb-2">
              <a href="#">Sour Cream and Dips</a>
            </li>
            <li className="mb-2">
              <a href="#">Tea & Kombucha</a>
            </li>
            <li className="mb-2">
              <a href="#">Cheese</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
