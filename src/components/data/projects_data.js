import cricinfo from '../../assets/projects_images/Cricinfo.PNG'
import onesheet from '../../assets/projects_images/onesheet.PNG'
import todo from '../../assets/projects_images/todo.PNG'
import slack from "../../assets/projects_images/slack.PNG"
import netflix from "../../assets/projects_images/netflix.PNG"
import Spotify_UI from "../../assets/projects_images/spotify.PNG"
import hackerrank from "../../assets/projects_images/hackerrank.PNG"
import interviewbit from "../../assets/projects_images/interviewbit.PNG"


// ! add projects here
const data_projects = [
    {
        name: 'Slack-mini',
        image: slack,
        deployed_url: 'https://slack-clone-2cee4.web.app/',
        github_url: 'https://github.com/Sambhunath-Sahoo/slack-clone',
        category: ['react.js', 'node.js', 'ContextAPI']
    },
    {
        name: 'Spotify_UI',
        image: Spotify_UI,
        deployed_url: 'https://github.com/Sambhunath-Sahoo/spotify-clone',
        github_url: 'https://github.com/Sambhunath-Sahoo/spotify-clone',
        category: ['react.js', 'node.js', 'ContextAPI']
    },
    {
        name: 'Netflix_clone',
        image: netflix,
        deployed_url: 'https://netflix-clone-9510f.web.app/',
        github_url: 'https://github.com/Sambhunath-Sahoo/netflix-clone',
        category:['react.js', 'node.js', 'ContextAPI']
    },
    {
        name: 'One-Sheet Online',
        image: onesheet,
        deployed_url: 'https://one-sheet.netlify.app/',
        github_url: 'https://github.com/Sambhunath-Sahoo/One-Sheet',
        category: ['vanilla', 'node.js', 'html']
    },

    {
        name: 'Cricinfo Scrapper',
        image: cricinfo,
        deployed_url: '',
        github_url: 'https://github.com/Sambhunath-Sahoo/Web_Scrapper-Cricinfo',
        category: ['node.js', '']
    },

    {
        name: 'hackerrank submitter',
        image: hackerrank,
        deployed_url: '',
        github_url: 'https://github.com/Sambhunath-Sahoo/hackerrank-code-submitter',
        category: ['node.js', '']
    },

    {
        name: 'interviewbit Scrapper',
        image: interviewbit,
        deployed_url: '',
        github_url: 'https://github.com/Sambhunath-Sahoo/interviewBit-scraper',
        category: ['node.js', '']
    },

    {
        name: 'Todoist App',
        image: todo,
        deployed_url: '',
        github_url: 'https://github.com/Sambhunath-Sahoo/Todoist',
        category: ['node.js', 'hmtl']
    },

]

export default data_projects;