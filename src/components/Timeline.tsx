import React, { FunctionComponent } from 'react';
import { Theme, fade, useTheme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export interface TimelineObject {
    name: string;
    startYear: number;
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        marginTop: '3rem',
        marginBottom: '3rem',
    },
    item: {
        padding: '0.6rem',
        borderRight: `1px solid ${theme.palette.background.highlight}`,
        overflow: 'hidden',
    },
}), {
    classNamePrefix: 'timeline',
});

export const Timeline: FunctionComponent<{
    items: TimelineObject[];
}> = ({ items }) => {
    const classes = useStyles();
    const theme = useTheme();

    var startYear = Math.min.apply(Math, items.map(item => {return item.startYear}));
    var endYear = Math.max.apply(Math, items.map(item => {return item.startYear}));

    var year = new Date().getFullYear();
    if (endYear === year) {
        year++;
    }
    const range = 100 / (year - startYear);

    const sortedItems = items.sort((a, b) => (a.startYear > b.startYear) ? 1 : -1);
    
    const timeline = sortedItems.map((item, i) => {
        const subRange = (i + 1 < sortedItems.length ? sortedItems[i + 1].startYear : year) - item.startYear;
        return (
            <div
                className={classes.item}
                style={{
                    width: `${subRange * range}%`,
                    backgroundColor: fade(theme.palette.primary.main, (1 / (items.length - i)))
                }}
                key={item.name}
            >
                {item.startYear} - {item.name}
            </div>
        );
    });

    return (
        <section className={classes.root}>
            {timeline}
        </section>
    );
};