import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';
// Difference between Link and NavLink element...
// classname on NavLink takes in a function that returns the desired classname.
// Also takes in an object that we can use to destructure the isActive property (provided by react-router-dom)
function MainNavigation() {
    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? classes.active : undefined
                            }
                            // style={({ isActive }) => ({
                            //   textAlign: isActive ? 'center' : 'left',
                            // })}
                            end
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/products"
                            className={({ isActive }) =>
                                isActive ? classes.active : undefined
                            }
                        >
                            Products
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;