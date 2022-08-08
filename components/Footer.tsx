const Footer = () => {
    return (
        <div className="flex justify-center p-10 bg-gray-900 z-[1]">
          <div className="m-auto z-[4] grid grid-cols-1 lg:grid-cols-3 gap-52">
            <div>
              <div className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
              <img className="h-[100px] my-5" src="banner.png"></img>
              <div>JPEG ALPHA © 2021 ALL RIGHTS RESERVED.</div>
            </div>
            <div>
              <div className="mb-2 font-bold text-xl">Nav</div>
              <div>About</div>
              <div>Tools</div>
              <div>Success</div>
              <div>Team</div>
              <div>Faq</div>
              <div>Dashboard</div>
            </div>
            <div>
              <div className="mb-2 font-bold text-xl">Links</div>
              <div>Opensea</div>
              <div>Twitter</div>
              <div>Medium</div>
            </div>
          </div>
        </div>
    );
}

export default Footer;