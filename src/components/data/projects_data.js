import cricinfo from '../../assets/projects_images/Cricinfo.PNG'
import onesheet from '../../assets/projects_images/onesheet.PNG'
import todo from '../../assets/projects_images/todo.PNG'


// ! add projects here
const data_projects = [
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
        name: 'Todoist App',
        image: todo,
        deployed_url: '',
        github_url: 'https://github.com/Sambhunath-Sahoo/Todoist',
        category: ['node.js', 'hmtl']
    },

]

export default data_projects;