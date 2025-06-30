export interface Project {
    id: number
    title: string
    description: string
    link: string
}

export const projects: Project[] = [
    {
        id: 1,
        title: "EasyGradPath",
        description: "A smart academic planning tool that helps students create personalized graduation paths using priority scheduling logic.",
        link: "https://chill-helicopter-d36.notion.site/EasyGradPlan-Your-Easiest-Path-to-Graduation-21191add595480f2af17c6049ef657cc"
    },
    {
        id: 2,
        title: "Wellness Detailing",
        description: "A custom-built, mobile-responsive website for a local car wash business, featuring service listings, a real-time quote form, customer testimonials, and an image gallery. The site was optimized for SEO and performance, designed to convert visitors into customers through clean UI, clear call-to-actions, and tailored branding. This site is currently in progress - additional features, content, and visual enhancements are being added.",
        link: "https://car-wash-frontend-alpha.vercel.app/"
    },
    {
        id: 3,
        title: "Kevin Cuts Barbershop Website",
        description: "A fictional barbershop site built with React, TypeScript, Tailwind CSS, React Router, and Framer Motion. Includes booking form, gallery, and full-page animations.",
        link: "https://kevin-cuts.vercel.app/"
    },
]