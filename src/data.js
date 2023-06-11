 
export const designSkills = ['Wireframing', 'Prototyping', 'Presenting Applications', 'UI + UX ', 'Responsive Web Design']

export const designTools = ['Figma', 'Krita', 'Font Awesome', 'Microsoft Teams (Presentations)'];

export const techSkills = ['React.js', 'HTML/CSS with Tailwind.CSS',  'TypeScript/JavaScript', 'Remix.js', 'Prisma', 'SQL', 'MongoDB'];

export const techTools = ['Visual Studio', 'Github + Github Desktop', 'Chrome Developer Tools', 'Prisma Studio', 'NPM', 'Vercel'];

export const projects = [

    {
        title: "Developer Help Suite",
        description: 'A prototype application for developers to learn and help each other with their technical issues.',
        techUsed: ['React.js', 'Remix.js', 'Tailwind.css', 'TypeScript', 'Prisma', 'MongoDb', 'Bcrypt' , "Chrome Devtools"],
        screenshotLink: 'img/DeveloperHelpSuite.jpg',
        
    },

    {
        title: "Divided We Fall",
        description: 'A news website for a nonprofit that covers the most popular current issues.',
        techUsed: ['WordPress', 'CSS', "WP Rocket", "Chrome Devtools" ],
        screenshotLink: 'img/DividedWeFall.jpg',
    },

    {
        title: "Excelsior",
        description: 'A website for a ficitional construction that showcases my design skills.',
        techUsed: ['HTML', 'CSS', "JavaScript", "Figma (planning)" ],
        screenshotLink: 'img/Xcelsior.jpg',
    },

    {
        title: "Profit Dashboard",
        description: 'A dynamic application that keeps track of transactions and profit.',
        techUsed: ['HTML', 'CSS', "JavaScript", "Chart.js" ],
        screenshotLink: 'img/ProfitDashboard.jpg',
    }
 

]


export const animationValues = (currentVisible,  id)  =>  currentVisible ===  id ? 'animate-fadeIn': 'animate-fadeOut';
