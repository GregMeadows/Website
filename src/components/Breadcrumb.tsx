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
        '& .icon': {
            marginRight: 4,
            fontSize: '1.3em',
        }
    },
    linkBase: {
        display: 'flex',
        alignItems: 'center',
        padding: '2px 8px',
    },
    homeFlat: {
        paddingTop: 4,
        paddingLeft: 4,
    },
    link: {
        borderRadius: 10,
        background: theme.palette.background.highlight,
        color: theme.palette.text.primary,
        transition: 'background 0.175s',
        '&:hover, &:focus': {
            color: theme.palette.text.primary,
            background: theme.palette.primary.main,
        },
    },
    separator: {
        marginLeft: -8,
        marginRight: -8,
    }
}), {
    classNamePrefix: 'breadcrumb',
});

export const Breadcrumb: FunctionComponent<{
    className?: string,
}> = observer(({className}) => {
    const classes = useStyles();
    const pathnames = useLocation().pathname.split('/').filter(x => x);

    const homeFlat = (
        <>
            <HomeIcon fontSize='inherit' className='icon' />
            Home
        </>
    );

    return (
        <Breadcrumbs
            aria-label='Breadcrumb'
            separator={<NavigateNextIcon fontSize='small' className={classes.separator} />}
            className={`${classes.root} ${className}`}
        >
            {pathnames.length === 0 ?
                (<span className={`${classes.linkBase} ${classes.homeFlat}`}>{homeFlat}</span>) 
                : (<Link to="/" className={`${classes.linkBase} ${classes.link}`}>{homeFlat}</Link>)}

            {pathnames.map((value, index) => {
                const last = index === pathnames.length - 1;
                const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                return last ? (<span key={to}>{value}</span>) : (<Link className={`${classes.linkBase} ${classes.link}`} to={to} key={to}>{value}</Link>);
            })};
        </Breadcrumbs>
    );
});