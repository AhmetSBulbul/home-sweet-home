import SnippetPostLink from "../components/SnippetPostLink";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    component: SnippetPostLink,
    title: 'Components/PostLink/SnippetLink',
    args: {
      date: '2021-11-10',
      title: 'Snippet Title,'
    }
}



export const SnippetPost = (args) => <SnippetPostLink {...args}/>

