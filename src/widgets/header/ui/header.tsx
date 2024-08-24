import { IMAGES } from "../../../shared";

const Header = () => {
    console.log(IMAGES.logo)
    return (
        <header className="header">
            <div className="header__container">
                <img src={IMAGES.logo} alt="logo" className="header__logo" />
            </div>
        </header>
    );
};

export default Header;