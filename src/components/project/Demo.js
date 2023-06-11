import React from 'react'
import ProjectSection from './ProjectSection'

const Demo = ({details}) => {
  return (
    <section>
        {
             details.map(detail => (
                <ProjectSection header={detail.subtitle} text={detail.description} textColor={'customBlack'} />
            ))
        }
    </section>
  )
}

export default Demo