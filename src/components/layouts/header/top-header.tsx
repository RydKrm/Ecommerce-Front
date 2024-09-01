const TopHeader = () => {
  return (
    <div className="container mx-auto mt-2 place-content-between flex flex-row font-normal text-slate-600 text-small">
      <ul className="flex flex-row space-x-4  text-[13px] divide-x ps-3">
        <li>
          <a className="ms-2" href={`about_us`}>
            About us
          </a>
        </li>
        <li>
          <a className="ms-2" href={`about_us`}>
            My Account
          </a>
        </li>
        <li>
          <a className="ms-2" href={`about_us`}>
            Wishlist
          </a>
        </li>
        <li>
          <a className="ms-2" href={`about_us`}>
            Order Tracking
          </a>
        </li>
      </ul>

      <p className="text-[13px]">Save more with coupons </p>

      <ul className="flex space-x-4 text-[13px] divide-x">
        <li>
          <a className="ms-2" href={`about_us`}>
            Need Help? Call Us
          </a>
        </li>
        <li>
          <a className="ms-2" href={`about_us`}>
            +123 4124
          </a>
        </li>
        <li>
          <a className="ms-2" href={`about_us`}>
            My Account
          </a>
        </li>
        <li>
          <a className="ms-2" href={`about_us`}>
            Wishlist
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TopHeader;
