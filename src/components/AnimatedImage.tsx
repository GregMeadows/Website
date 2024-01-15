import { Skeleton, Typography } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import React, { FunctionComponent, useState } from 'react';
import { makeStyles } from 'tss-react/mui';

interface StyleProps {
  maxHeight?: number;
  maxWidth?: number;
}

const useStyles = makeStyles<StyleProps>()(
  (theme, { maxHeight, maxWidth }) => ({
    image: {
      maxHeight,
      width: maxWidth,
    },
    container: {
      position: 'relative',
      maxHeight,
      maxWidth: '100%',
    },
    skeletonContainer: {
      position: 'absolute',
      height: '100%',
      width: '100%',
    },
  })
);

interface AnimatedImageProps {
  src: string;
  alt: string;
  caption: string;
  maxHeight?: number;
  maxWidth?: number;
  className?: string;
}

const AnimatedImage: FunctionComponent<AnimatedImageProps> =
  function AnimatedImage({
    src,
    alt,
    caption,
    maxHeight,
    maxWidth,
    className,
  }) {
    const { classes } = useStyles({ maxHeight, maxWidth });
    const [loading, setLoading] = useState(true);

    const variants = {
      in: {
        opacity: 1,
      },
      out: {
        opacity: 0,
      },
    };

    return (
      <figure className={className}>
        <div className={classes.container}>
          <AnimatePresence>
            {loading && (
              <motion.div
                initial="in"
                exit="out"
                variants={variants}
                className={classes.skeletonContainer}
              >
                <Skeleton height="100%" variant="rectangular" />
              </motion.div>
            )}
          </AnimatePresence>
          <motion.img
            initial="out"
            animate={loading || 'in'}
            variants={variants}
            src={src}
            alt={alt}
            loading="lazy"
            onLoad={() => setLoading(false)}
            className={classes.image}
          />
        </div>
        <figcaption>
          <Typography variant="subtitle2">{caption}</Typography>
        </figcaption>
      </figure>
    );
  };

export default AnimatedImage;
