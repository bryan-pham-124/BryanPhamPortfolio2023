import React from 'react'
import H3 from '../text/H3'
import H4 from '../text/H4'

const ProjectSection = ({header, textColor,   text = false,  inputArray = false}) => {
  return (
    <section>
        <div className="wrapper">
            <H3 color={textColor} text ={header} />

            { text && <H4   color={textColor}  text ={text} />}

            {inputArray && inputArray.length > 0 && inputArray.map(elm => <H4  color={textColor} text={elm}/> ) }
                 
        </div>
    </section>
  )
}

export default ProjectSection