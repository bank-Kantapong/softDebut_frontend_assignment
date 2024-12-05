import SOne_index_logos from "../Assets/SOne_index_logos.png";

const Footer = () => {
  return (
    <div className="flex mt-1">
      <img src={SOne_index_logos} alt="footer_logo" />
      <div className="flex items-center justify-between w-full px-1 rounded-md h-9 bg-dark">
        <p className="text-white text-10">Copyright © 2014</p>
      </div>
    </div>
  );
};

export default Footer;
