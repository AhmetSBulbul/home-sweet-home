import TechnologyLink from "../components/TechnologyLink";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    component: TechnologyLink,
    title: 'Components/PostLink/TechnologyLink',
    args: {
      src: '/technologies/gatsbyjs.svg'
    }
}



export const TechnologyPageLink = (args) => <TechnologyLink alt="" {...args}/>

