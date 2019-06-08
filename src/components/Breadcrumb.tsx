import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme, Breadcrumbs } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useLocation } from './Routing';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import HomeIcon from '@material-ui/icons/Home';
import { observer } from 'mobx-react-lite';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        color: theme.palette.text.primary,
        fontWeight: 'bold',
        fontSize: '0.8rem',
    },
    link: {
        display: 'flex',
        padding: '2px 6px',
        borderRadius: 10,
        background: theme.palette.primary.main,
        color: theme.palette.text.primary,
        textDecoration: 'none',
        transition: 'color 0.175s, background 0.175s',
        '&:hover, &:focus': {
            background: theme.palette.head.main,
        },
        '& svg': {
            marginRight: 4,
            fontSize: '1.3em',
        }
    },
    separator: {
        marginLeft: -8,
        marginRight: -8,
    }
}), {
    classNamePrefix: 'breadcrumb',
});

export const Breadcrumb: FunctionComponent = () => {
    const classes = useStyles();
    const pathnames = useLocation().pathname.split('/').filter(x => x);

    return (
        <Breadcrumbs 
            aria-label='Breadcrumb'
            separator={<NavigateNextIcon fontSize='small'  className={classes.separator} />}
            className={classes.root}
        >
            <Link to="/" className={classes.link}>
                <HomeIcon fontSize='inherit' />
                Home
            </Link>

            {pathnames.map((value, index) => {
                const last = index === pathnames.length - 1;
                const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                return last ? <span>{value}</span> : <Link className={classes.link} to={to} key={to}>{value}</Link>;
            })};
        </Breadcrumbs>
    );
};