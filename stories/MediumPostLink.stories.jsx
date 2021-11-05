import MediumPostLink from "../components/MediumPostLink";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    component: MediumPostLink,
    title: 'Components/PostLink/MediumPostLink',
    args: {
      post: {
        title: "Başlık",
        link: "https://medium.com/@ahmets.bulbul/2021-modern-web-geli%C5%9Ftirme-yakla%C5%9F%C4%B1m%C4%B1-58fe1eca7775?source=rss-b8314211af08------2",
        description:
          '\n<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of “de Finibus Bonorum et Malorum” (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,</p>\n<img src="https://medium.com/_/stat?event=post.clientViewed&amp;referrerSource=full_rss&amp;postId=21cabd7748f8" width="1" height="1" alt="">\n',
      }
    }
}



export const MediumPost = (args) => <MediumPostLink {...args}/>

