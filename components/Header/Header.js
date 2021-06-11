import React from "react";
import Link from "next/link";
// Styles 
import { makeStyles } from "@material-ui/core/styles";
import styles from '../../styles/components/Header.module.css';
// Naterial core imports
import AppBar from '@material-ui/core/AppBar'
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";

// Material icons
import Menu from "@material-ui/icons/Menu";

const useStyles = makeStyles(styles);
// Header React Component
const Header = (props) => {

    // Hook for mobile-open state
    const [mobileOpen, setMobileOpen] = React.useState(false);
    // Hook useEffect
    React.useEffect(() => {
        if (props.changeColorOnScroll) {
            window.addEventListener("scroll", headerColorChange);
        }
        return function cleanup() {
            if (props.changeColorOnScroll) {
                window.removeEventListener("scroll", headerColorChange);
            }
        };
    });
    // Method handleDrawerToggle
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    // Method headerColorChange
    const headerColorChange = () => {
        // Hook to store color
        const { color, changeColorOnScroll } = props;
        const windowsScrollTop = window.pageYOffset;
        if (windowsScrollTop > changeColorOnScroll.height) {
            document.body
                .getElementsByTagName("header")[0]
                .classList.remove(classes[color]);
            document.body
                .getElementsByTagName("header")[0]
                .classList.add(classes[changeColorOnScroll.color]);
        } else {
            document.body
                .getElementsByTagName("header")[0]
                .classList.add(classes[color]);
            document.body
                .getElementsByTagName("header")[0]
                .classList.remove(classes[changeColorOnScroll.color]);
        }
    };
    // Props stored 
    const { color, rightLinks, leftLinks, brand, fixed, absolute } = props;
    // Brand component
    const brandComponent = (
        <Link href="/" as="/">
            <Button className={styles.title}><h1>{brand}</h1></Button>
        </Link>
    );
    return (

        <AppBar className={styles.appBarCabeza} position="fixed">
            <Toolbar className={styles.container}>
                {leftLinks !== undefined ? brandComponent : null}
                <div className={styles.flex}>
                    {leftLinks !== undefined ? (
                        <Hidden smDown implementation="css">
                            {leftLinks}
                        </Hidden>
                    ) : (
                        brandComponent
                    )}
                </div>
                {/* Hidden component */}
                <Hidden smDown implementation="css">
                    {rightLinks}
                </Hidden>
                <Hidden mdUp>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerToggle}
                    >
                        <Menu />
                    </IconButton>
                </Hidden>
            </Toolbar>
            {/* Medium Hidden */}

            <Hidden mdUp implementation="js">
                <Drawer
                    variant="temporary"
                    anchor={"right"}
                    open={mobileOpen}
                    classes={{
                        paper: styles.drawerPaper
                    }}
                    onClose={handleDrawerToggle}
                >
                    <div className={styles.appResponsive}>
                        {leftLinks}
                        {rightLinks}
                    </div>
                </Drawer>
            </Hidden>
        </AppBar>

    );
}

export default Header;