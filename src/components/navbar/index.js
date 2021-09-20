import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { styles } from './styles';
import 'material-icons/iconfont/material-icons.css';

const Navbar = (props) => {
    
    const getPageName = () => {
        let path = props.location.pathname;
        if (path === '/') return 'Home'
        else {
            let pageName = path.split('/')[1];
            return pageName[0].toUpperCase() + pageName.substring(1);
        }
    }

    return(
        <div style={styles.container}>
            {getPageName()}
            <div style={styles.iconsContainer}>
                <Link to='/'>
                    <span className="material-icons">home</span>
                </Link>
                <Link to='/cart'>
                    <span className="material-icons">shopping_cart</span>
                </Link>
            </div>
        </div>
    )
}

export default withRouter(Navbar)