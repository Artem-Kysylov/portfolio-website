// Imports 
import { FaBehance } from "react-icons/fa"
import { IoLogoGithub } from "react-icons/io"
import { FaLinkedinIn } from "react-icons/fa6"


// Navigation data 
export const navItems = [
    {
        id: 1,
        title: 'Services',
        anchorLink: '#Services_section',
    },
    {
        id: 2,
        title: 'Projects',
        anchorLink: '#Projects_section',
    },
    {
        id: 3,
        title: 'About',
        anchorLink: '#About_section',
    },
]

// Socials data 
export const socialsItems = [
    {
        id: 1,
        title: 'Behance',
        icon: FaBehance,
        link: 'https://www.behance.net/kysylyovar7e7c',
    },
    {
        id: 2,
        title: 'Github',
        icon: IoLogoGithub,
        link: 'https://github.com/Artem-Kysylov',
    },
    {
        id: 3,
        title: 'Linkedin',
        icon: FaLinkedinIn,
        link: 'https://github.com/Artem-Kysylov',
    },
]

// Projects items data 
export const projectItems = [
    {
        id: 1,
        title: 'Project 1',
        description: 'Lorem ipsum dolor sit amet consectetur. Id ac egestas lorem eget enim volutpat convallis in. Faucibus amet ornare in sagittis nisi scelerisque felis. Blandit viverra nisl mattis aliquam viverra vulputate diam egestas. Consectetur venenatis fermentum bibendum ut amet.',
        image: '/project-1-img.png',
        background: 'var(--light-black)',
    },
    {
        id: 2,
        title: 'Project 2',
        description: 'Lorem ipsum dolor sit amet consectetur. Id ac egestas lorem eget enim volutpat convallis in. Faucibus amet ornare in sagittis nisi scelerisque felis. Blandit viverra nisl mattis aliquam viverra vulputate diam egestas. Consectetur venenatis fermentum bibendum ut amet.',
        image: '/project-2-img.png',
        background: 'var(--light)',
    },
    {
        id: 3,
        title: 'Project 3',
        description: 'Lorem ipsum dolor sit amet consectetur. Id ac egestas lorem eget enim volutpat convallis in. Faucibus amet ornare in sagittis nisi scelerisque felis. Blandit viverra nisl mattis aliquam viverra vulputate diam egestas. Consectetur venenatis fermentum bibendum ut amet.',
        image: '/project-1-img.png',
        background: 'var(--light-black)',
    },
    {
        id: 4,
        title: 'Project 4',
        description: 'Lorem ipsum dolor sit amet consectetur. Id ac egestas lorem eget enim volutpat convallis in. Faucibus amet ornare in sagittis nisi scelerisque felis. Blandit viverra nisl mattis aliquam viverra vulputate diam egestas. Consectetur venenatis fermentum bibendum ut amet.',
        image: '/project-2-img.png',
        background: 'var(--light)',
    },
]

// Services items 
export const servicesItems = [
    {
        id: 1,
        number: 1,
        title: 'research & strategy',
    },
    {
        id: 2,
        number: 2,
        title: 'branding identity',
    },
    {
        id: 3,
        number: 3,
        title: 'ui/ux design',
    },
    {
        id: 4,
        number: 4,
        title: 'website development',
    },
    {
        id: 5,
        number: 5,
        title: 'app development',
    },
]