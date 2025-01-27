export const opacity = {
    initial: {
        opacity: 0
    },
    enter: {
        opacity: 1,
        transition: { duration: 1, ease: 'easeOut' },
    },
    exit: {
        opacity: 0,
        transition: { duration: 1, ease: 'easeInOut' },
    },
}

export const scaleAnimation = {
    initial: {
        scale: 0, 
        x:"-50%", 
        y:"-50%"
    },
    enter: {
        scale: 1, 
        x:"-50%", 
        y:"-50%", 
        transition: {duration: 0.4, ease: [0.76, 0, 0.24, 1]}
    },
    closed: {
        scale: 0, 
        x:"-50%", 
        y:"-50%", 
        transition: {duration: 0.4, ease: [0.32, 0, 0.67, 0]}
    }
}
