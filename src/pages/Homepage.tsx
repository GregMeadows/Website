import React, { FunctionComponent, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography, Button } from '@material-ui/core';
import { Logo } from '../components/Logo';

const useStyles = makeStyles(() => ({
    root: {
        textAlign: 'center',
    }
}), {
        classNamePrefix: 'homepage',
    });

export const Homepage: FunctionComponent = () => {
    const classes = useStyles();

    const [logoSize, setLogoSize] = useState(2.5);

    function onTestClick() {
        setLogoSize(0.5);
    }

    return (
        <div className={classes.root}>
            <Typography>Homepage</Typography>
            <Button variant="contained" onClick={() => onTestClick()}>Test</Button>
            <Logo size={`${logoSize}rem`} />
            {/* <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis eu volutpat odio facilisis mauris sit amet massa vitae. Volutpat odio facilisis mauris sit amet massa vitae tortor condimentum. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. Neque egestas congue quisque egestas diam in. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Luctus venenatis lectus magna fringilla urna. Augue neque gravida in fermentum et. At auctor urna nunc id cursus metus. Potenti nullam ac tortor vitae purus faucibus ornare suspendisse. Sapien faucibus et molestie ac feugiat sed lectus. Sed elementum tempus egestas sed sed risus. Orci porta non pulvinar neque laoreet suspendisse. Volutpat consequat mauris nunc congue. Fames ac turpis egestas maecenas pharetra convallis. Mauris vitae ultricies leo integer malesuada nunc. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur.

                Proin libero nunc consequat interdum varius sit amet mattis. Volutpat est velit egestas dui id ornare. Libero volutpat sed cras ornare arcu. Neque volutpat ac tincidunt vitae semper. Viverra nibh cras pulvinar mattis nunc sed blandit. Aliquet porttitor lacus luctus accumsan tortor. Tortor id aliquet lectus proin nibh nisl condimentum. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Ut lectus arcu bibendum at varius vel pharetra vel. Semper risus in hendrerit gravida rutrum quisque non tellus. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Vel eros donec ac odio. Tincidunt id aliquet risus feugiat in ante metus. Iaculis urna id volutpat lacus. Lectus mauris ultrices eros in cursus turpis massa. Eget mauris pharetra et ultrices neque ornare aenean. Nibh tortor id aliquet lectus proin nibh nisl. Cras ornare arcu dui vivamus arcu felis. Vel quam elementum pulvinar etiam non quam lacus.

                Varius morbi enim nunc faucibus a pellentesque sit. Varius duis at consectetur lorem donec massa sapien. Magna eget est lorem ipsum dolor sit amet consectetur adipiscing. Leo in vitae turpis massa sed elementum tempus egestas. Posuere sollicitudin aliquam ultrices sagittis orci. Lacus laoreet non curabitur gravida arcu ac. Sollicitudin tempor id eu nisl nunc. Dapibus ultrices in iaculis nunc sed augue lacus viverra. Magna etiam tempor orci eu lobortis elementum nibh. Et leo duis ut diam quam nulla porttitor massa. Vel orci porta non pulvinar neque laoreet suspendisse interdum. Netus et malesuada fames ac turpis egestas integer. Porttitor massa id neque aliquam vestibulum morbi blandit cursus. Posuere lorem ipsum dolor sit amet. Sit amet aliquam id diam maecenas ultricies mi eget mauris. Magna fermentum iaculis eu non diam phasellus vestibulum. Orci sagittis eu volutpat odio.

                Ac turpis egestas integer eget aliquet nibh. Eu consequat ac felis donec et odio. Ornare arcu dui vivamus arcu felis bibendum ut tristique. Accumsan lacus vel facilisis volutpat est velit. Sed elementum tempus egestas sed sed risus. Velit egestas dui id ornare arcu. Tortor id aliquet lectus proin. Ultricies integer quis auctor elit sed vulputate mi sit. Maecenas ultricies mi eget mauris pharetra et ultrices. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Duis ut diam quam nulla. Mi sit amet mauris commodo quis imperdiet massa. Nunc sed augue lacus viverra vitae congue eu consequat. Amet consectetur adipiscing elit pellentesque habitant morbi. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Imperdiet proin fermentum leo vel orci porta. Arcu felis bibendum ut tristique et egestas quis. Vitae aliquet nec ullamcorper sit amet risus nullam eget. Tortor vitae purus faucibus ornare.

                Elementum sagittis vitae et leo duis. Sit amet risus nullam eget felis eget nunc lobortis mattis. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Neque volutpat ac tincidunt vitae. Turpis egestas pretium aenean pharetra magna. Ut etiam sit amet nisl purus in. In ornare quam viverra orci sagittis eu volutpat. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Quam vulputate dignissim suspendisse in est ante in. Arcu risus quis varius quam quisque id. Sagittis vitae et leo duis ut diam quam nulla porttitor. Tincidunt id aliquet risus feugiat. Suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse. Ipsum faucibus vitae aliquet nec ullamcorper. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Elementum eu facilisis sed odio morbi quis.
            </Typography> */}
        </div>
    );
};