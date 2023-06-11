import { Link } from "react-router-dom";

 
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



const linkStyles = "border-b-2 border-black pb-2 ";

export const projectDetails = [

    {
        title: 'Developer Help Suite',
        screenshotLink: 'img/DeveloperHelpSuite.jpg',
        details:   [ 
            {
                header: 'Detailed Description',
                value: "This application is a prototype of what a useful Q and A knowledge base could be. My application has a section where developers can ask questions and get answers on their technical issues. Developers can also answer other questions. This application has a plethora of features on both the front end and back end of this application."
            },
            {
                header: 'Technologies Used',
                value:  ['React.js', 'Remix.js', 'Tailwind.css', 'TypeScript', 'Prisma', 'MongoDb', 'Bcrypt' , "Chrome Devtools"],
            },
            {
                header: 'Notable Features',
                value: ['Form Input Validation', 'Account creation', 'Authentication', 'Authorization', 'Dynamic Rendering', 'Dynamic Database Fetching', 'Backend Data Validation']
            },
            {
                header: 'Links',
                value: [

                            <div className="wrapper my-4">
                                <Link to="https://github.com/bryan-pham-124/DeveloperHelpSuite" className={linkStyles}> Github</Link>
                            </div>  
                            ,

                            <div className="wrapper my-4">
                                <Link to="https://developer-help-suite.vercel.app/" className={linkStyles}> Live App </Link>
                            </div>

                       ]
            }
          
        ]
        
    },


    {
        title: 'Divided We Fall',
        screenshotLink: 'img/DividedWeFall.jpg',
        details:   [ 
            {
                header: 'Detailed Description',
                value: "This was a website that I worked on for a non-profit. I was in charge of maintaining this website and making sure to fix graphical UI bugs with CSS and implementing mobile friendly redesigns to the website. In addition, I helped reduce loading times for the website."
            },
            {
                header: 'Technologies Used',
                value:   ['WordPress', 'CSS', "WP Rocket", "Chrome Devtools" ],
            },
            {
                header: 'Notable Features',
                value:   ['Responsive Web Design', 'CSS Grids',  'Lazy Loading', 'Minimizing CSS and JS']
            },
            {
                header: 'Links',
                value: [

                            <div className="wrapper my-4">
                                <Link to="https://dividedwefall.org/" className={linkStyles}> Live App </Link>
                            </div>

                       ]
            }
          
        ]
        
    },


    {
        title: 'Excelsior',
        screenshotLink: 'img/Xcelsior.jpg',
        details:   [ 
            {
                header: 'Detailed Description',
                value: "This website is a multi-page fully reponsive website for a fictional construction company using vanilla HTML/CSS. It features CSS transitions and parallax in addition to having a professional graphical design and color palette. I made sure the website met WCAG color contrast accessiblity standards by having colors that contrast well with each other."
            },
            {
                header: 'Technologies Used',
                value:   ['WordPress', 'CSS', "WP Rocket", "Chrome Devtools" ],
            },
            {
                header: 'Notable Features',
                value:   ['Responsive Web Design', 'CSS Grids',  'CSS Transitions', 'Parallax Scrolling']
            },
            {
                header: 'Links',
                value: [

                            <div className="wrapper my-4">
                                <Link to="https://bryan-pham-124.github.io/ExcelsiorWebsitev2/" className={linkStyles}> Live App </Link>
                            </div>
                            
                            ,

                            <div className="wrapper my-4">
                                <Link to="https://github.com/bryan-pham-124/ExcelsiorWebsitev2" className={linkStyles}> Github</Link>
                            </div>  

                       ]
            }
          
        ]
        
    },



    {
        title: 'Profit Dashboard',
        screenshotLink: 'img/ProfitDashboard.jpg',
        details:   [ 
            {
                header: 'Detailed Description',
                value: "This dynamic app keeps track of a business' incomes, expense and profit. It can also keep track of transaction history and allows users to sort through their transaction history. I used vanilla JS to be able to dynamically update the charts in this application once users enter in valid information into a form."
            },
            {
                header: 'Technologies Used',
                value:   ['HTML', 'CSS', "JavaScript", "Chrome Devtools", 'Chart.js' ],
            },
            {
                header: 'Notable Features',
                value:   ['Form Validation', 'Dynamically Updating Charts',  'Dynamic UI', 'Datat Sorting', 'Sample Data Generation', 'Modal']
            },
            {
                header: 'Links',
                value: [

                            <div className="wrapper my-4">
                                <Link to="https://bryan-pham-124.github.io/BudgetDashboard/" className={linkStyles}> Live App </Link>
                            </div>
                            
                            ,

                            <div className="wrapper my-4">
                                <Link to="https://github.com/bryan-pham-124/BudgetDashboard" className={linkStyles}> Github</Link>
                            </div>  

                       ]
            }
          
        ]
        
    },



    
]


export const animationValues = (currentVisible,  id)  =>  currentVisible ===  id ? 'animate-fadeIn': 'animate-fadeOut';
