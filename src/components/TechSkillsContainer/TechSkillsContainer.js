import React from 'react'
import { TechSkillsContainerDiv } from './StyleTechSkillsContainer';

const TechSkillsContainer = () => {
    return (
        <TechSkillsContainerDiv id='TechSkills' >

            <div className='TitleTechSkills'>

                <h3>TechSkills</h3>

                <img src='icons/tools.svg' alt='Tech Skills' />

            </div>




            <div className='ContainerGeralSkills'>

                <div className='containerSkills a'>

                    <div className='skills '>

                        <img src='icons/html-5.svg' alt='HTML' title='HTML' />


                        <div className='barPorcent one'>

                            <span>Intermediário</span>

                        </div>

                    </div>

                </div>

                <div className='containerSkills b'>

                    <div className='skills '>

                        <img src='icons/nodejs.svg' alt='Node.JS' title='Node.js' />

                        <div className='barPorcent two'>

                            <span>Básicos</span>
                            
                        </div>

                    </div>
                
                </div>


                <div className='containerSkills c'>

                    <div className='skills'>

                        <img src='icons/javascript.svg' alt='JavaScript' title='JavaScript' />

                        <div className='barPorcent tree'>

                            <span>Intermediário</span>
                            
                        </div>

                    </div>

                </div>


                <div className='containerSkills d'>

                    <div className='skills'>

                        <img src='icons/React.svg' alt='React' title='React' />

                        <div className='barPorcent four'>

                            <span>Básico</span>
                            
                        </div>

                    </div>

                </div>


                <div className='containerSkills e'>


                    <div className='skills'>

                        <img src='icons/css.svg' alt='Css' title='Css' />

                        <div className='barPorcent five'>

                            <span>Intermediário</span>
                            
                        </div>

                    </div>

                </div>

            </div>
            
        </TechSkillsContainerDiv>
    )
}

export default TechSkillsContainer
