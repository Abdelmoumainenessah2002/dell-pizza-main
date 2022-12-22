const Footer = () => {
  return (
    <footer className="w-full py-10 px-20 bg-black text-white ">
      <div className="flex justify-between">
        <div className="space-y-10 w-1/2">
          <h2 className="text-2xl">Top cities</h2>
          <div className="flex items-start justify-between">
            <ul className="space-y-2">
              <li>Alger</li>
              <li>Oran</li>
              <li>Annaba</li>
              <li>Blida</li>
              <li>Batna</li>
              <li>Setif</li>
              <li>Telemcen</li>
              <li>Taref</li>
            </ul>
            <ul className="space-y-2">
              <li>Soug ahres</li>
              <li>Khenchela</li>
              <li>Biskra</li>
              <li>Ouad Souf</li>
              <li>Aghouat</li>
              <li>Djelfa</li>
              <li>Boumerdas</li>
              <li>Skikda</li>
            </ul>
            <ul className="space-y-2">
              <li>Jijel</li>
              <li>Bechar</li>
              <li>Wergla</li>
              <li>Tipaza</li>
              <li>Bejaia</li>
              <li>Tizi ouazou</li>
              <li>Saida</li>
              <li>Constantine</li>
            </ul>
          </div>
        </div>
        <div className="space-y-10 w-1/3">
          <h2 className="text-2xl">Let Us Help You</h2>
          <div className="flex items-start justify-between">
            <ul className="space-y-2">
              <li>Account Detail</li>
              <li><a href="/about">About us</a></li>
              <li><a href="/help">Help</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-32">
        <div className="w-1/2 flex items-center justify-between">
          <div className="flex items-center">
            <img src="/assets/svg/logo_white.svg" alt="logo_white" />
            <span className="ml-3">Terms of service</span>
          </div>
          <h2>Privacy</h2>
          <div className="flex items-center">
            <a href="/"><img src="/assets/svg/copyright.svg" alt="logo_white" /></a>
            <span className="ml-1">2023 DELL-PIZZA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
