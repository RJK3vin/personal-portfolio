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
        description: "A custom-built website for a local car wash business, including service listings, a quote form, embedded map, and customer testimonials to attract new clients",
        link: "placeholderlink"
    },
    {
        id: 3,
        title: "Kevin Cuts Barbershop Website",
        description: "A fictional barbershop site built with React, TypeScript, Tailwind CSS, React Router, and Framer Motion. Includes booking form, gallery, and full-page animations.",
        link: "https://kevin-cuts.vercel.app/"
    },
]