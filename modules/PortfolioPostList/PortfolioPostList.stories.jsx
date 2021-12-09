import React from 'react';
import PortfolioPostList from '.';

export default {
    title: 'Modules/PortfolioPostList',
    component: PortfolioPostList,
    args: {
        worksPostList: [
            {
                "id": "home-sweet-home",
                "title": "Home Sweet Home",
                "folderName": "home-sweet-home",
                "platform": "web",
                "tools": [
                    "React",
                    "Nextjs",
                    "TailwindCSS",
                    "PostCSS",
                    "Storybook",
                    "CSS Modules",
                    "rss2json",
                    "SendGrid"
                ],
                "excerpt": "Kişisel web sitesi.",
                "isLive": true,
                "date": "2021-12-17"
            },
            {
                "id": "rotasiz-karavan",
                "title": "Rotasız Karavan",
                "folderName": "rotasiz-karavan",
                "platform": "web",
                "tools": [
                    "React",
                    "Gatsbyjs",
                    "TailwindCSS",
                    "PostCSS",
                    "GraphQl",
                    "Google Analytics"
                ],
                "excerpt": "Rotasız Karavan web sitesi.",
                "isLive": true,
                "date": "2021-10-24"
            },
            {
                "id": "qupo-business",
                "title": "Qupo Business",
                "folderName": "qupo-business",
                "platform": "IOS & Android",
                "tools": [
                    "Flutter",
                    "Bloc State Management"
                ],
                "excerpt": "Qupo Business mobil uygulaması.",
                "isLive": false,
                "date": "2021-02-03"
            },
            {
                "id": "coffee-crafter",
                "title": "Coffee Crafter",
                "folderName": "coffee-crafter",
                "platform": "IOS & Android",
                "tools": [
                    "Flutter",
                    "Google Maps Api",
                    "Socket.IO"
                ],
                "excerpt": "Coffee Crafter mobil uygulaması.",
                "isLive": true,
                "date": "2020-10-20"
            },
            {
                "id": "kuzey-mutfak-aydin",
                "title": "Kuzey Mutfak Aydin",
                "folderName": "kuzey-mutfak-aydin",
                "platform": "web",
                "tools": [
                    "Wordpress"
                ],
                "excerpt": "Kuzey Mutfak İşletmesinin İnternet Sayfası.",
                "isLive": true,
                "date": "2020-10-17"
            },
            {
                "id": "tutkal-app",
                "title": "Tutkal.app",
                "folderName": "tutkal-app",
                "platform": "web",
                "tools": [
                    "Sass",
                    "Gulp"
                ],
                "excerpt": "Tutkal.app web sitesi.",
                "isLive": false,
                "date": "2020-02-03"
            }
        ]
    }
}

const Template = (args) => <PortfolioPostList {...args}/>

export const Default = Template.bind({});