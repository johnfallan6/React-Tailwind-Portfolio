import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-black to-darkBackground text-paragraph'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-primary text-header'>
                    About
                </p>
            </div>
            <p className='mt-10'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores fugit ab accusantium quod repudiandae error blanditiis nam perspiciatis dicta provident sequi quo iure qui vitae, rem nostrum amet nobis eos!
            </p>
            <br />
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum sapiente autem unde, et suscipit est sed, provident possimus accusamus delectus minima, non dolores? Sequi asperiores saepe, minus porro odio beatae!
            </p>
        </div>
    </div>
  )
}

export default About;