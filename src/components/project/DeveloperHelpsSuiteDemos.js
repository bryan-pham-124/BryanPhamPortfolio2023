import React from 'react'



const features = [
    {
        title: 'Demo - Registering Login and Logout',
        details:  [
            {
                subtitle:'Dynamic inline form validation',
                description: 'Users can only submit a form once all fields are valid'
            },
            {
                subtitle:'Register',
                description: 'Allows if a user to register with an email that is not in the database and notifies the user when the email they try to register with has been taken.'
            },
            {
                subtitle:'Logout',
                description: 'Logs user out if they are logged in.'
            },
            {
                subtitle:'Dynamic inline form validation',
                description: 'Allows users to login if they provide valid credentials and tells users if they do not have any valid credentials'
            },

        ]
    },
     
]

const DeveloperHelpsSuiteDemos = () => {
  return (
     <section>
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="wrapper">

            </div>
        </div>
     </section>
  )
}

export default DeveloperHelpsSuiteDemos