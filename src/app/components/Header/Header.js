import React, {useRef, useState, useEffect} from "react";
import Logo from '../../assets/images/Logo.png';
import BurgerIcon from '../../assets/images/burgerIcon.png';
import {NavLink, useLocation, useNavigate} from 'react-router-dom';
import classes from './Header.module.css';



function Header(props) {
    const {pathname} = useLocation();
    const navigate=useNavigate();
    const [dropdownShow, setDropDownShow] = useState(false);
    let closeHeaderDropDawnRef = useRef(null);
    let closeHeaderDropDawnContentRef = useRef(null);


    const handleClickDropdown = () => {
        setDropDownShow(!dropdownShow)
    }
    const handleClickOutSide = (e) => {
        let closeDropDawnRef = closeHeaderDropDawnRef;
        let contentRef = closeHeaderDropDawnContentRef;
        if (contentRef.current && !contentRef.current.contains(e.target)
            && !closeDropDawnRef.current.contains(e.target)) {
            setDropDownShow(false)
        }
    }
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutSide, true)
        return () => {
            document.removeEventListener('mousedown', handleClickOutSide, true)
        }
    }, []);

    return (
        <div className={classes.headerWhole}>
            <div className="container">
                <div className={classes.header}>
                    <div className={classes.logo} onClick={()=>navigate(`/`)}>
                        <img src={Logo} alt='logo' alt=""/>
                    </div>
                    <div className={classes.headerPartMobile}>
                        <div className="d-flex fd-column align-items-center header_dropDown ">
                            <img src={BurgerIcon} alt="" className={classes.menu_burger}
                                 onClick={handleClickDropdown} ref={closeHeaderDropDawnRef}/>
                            {
                                dropdownShow &&
                                <div
                                    className="d-flex fd-column header_dropDown_content f-400"
                                    ref={closeHeaderDropDawnContentRef}>
                                    <NavLink
                                        to="/services"
                                        className={({isActive}) =>
                                            classes['nav_link' + (pathname === '/services'  && isActive ?
                                                '_active' : '')]
                                        }
                                    >
                                        Services
                                    </NavLink>
                                    <NavLink
                                        className={({isActive}) =>
                                            classes['nav_link' +
                                            ((pathname === '/life-at-tykans' && isActive)
                                            || (pathname === '/life-at-tykans/team-testimonials' && isActive)
                                                ? '_active' : '' ) ]
                                        }
                                        to="/life-at-tykans" >
                                        Life at Tykans
                                    </NavLink>
                                    <NavLink        className={({isActive}) =>
                                        classes['nav_link' +
                                        ((pathname === '/careers' && isActive) ||
                                        (pathname === `/careers/job/${props.jobId}`  && isActive)
                                        || (pathname === '/careers/faq' && isActive)
                                            ? '_active' : '' ) ]
                                    } to="/careers">
                                        Careers
                                    </NavLink>
                                    <NavLink        className={({isActive}) =>
                                        classes['nav_link' + ( isActive ? '_active' : '' ) ]
                                    } to="/about-us" >
                                        About Us
                                    </NavLink>
                                    <div className={classes.activeBlue} onClick={()=>navigate(`/contact-us`)}>
                                        Contact Us
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                    <div className={classes.headerPart2}>
                        <NavLink
                            to="/services"
                            className={({isActive}) =>
                                classes['nav_link' + (pathname === '/services'  && isActive ? '_active' : '')]
                            }
                        >
                            Services
                        </NavLink>
                        <NavLink
                            className={({isActive}) =>
                                classes['nav_link' +
                                ((pathname === '/life-at-tykans' && isActive)
                                || (pathname === '/life-at-tykans/team-testimonials' && isActive)
                                    ? '_active' : '' ) ]}
                            to="/life-at-tykans" >
                            Life at Tykans
                        </NavLink>
                        <NavLink   className={({isActive}) =>
                            classes['nav_link' +
                            ((pathname === '/careers' && isActive) ||
                            (pathname === `/careers/job/${props.jobId}` && isActive)
                            || (pathname === '/careers/faq' && isActive)
                                ? '_active' : '' ) ]
                        }
                                        to="/careers">
                            Careers
                        </NavLink>
                        <NavLink        className={({isActive}) =>
                            classes['nav_link' + ( isActive ? '_active' : '' ) ]
                        }
                                        to="/about-us" >
                            About Us
                        </NavLink>
                        <div className={classes.activeBlue} onClick={()=>navigate(`/contact-us`)}>Contact Us</div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Header;
