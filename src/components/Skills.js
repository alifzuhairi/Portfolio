import React from 'react'
import 'boxicons'

const Skills = () => {
    return (
        <div className="skill" id="Skills">
           
           <div className="split left">
                <div className="centered">

           <div className="skill_container bd-grid">
               <div>
               <h2 class="skill_title">My Skills</h2>
                        <p class="skill_decs">Aspire to become a front-end web developers. When i cut myself, i dont see blood. I see HTML and CSS. Most of my body part are made of Python. Expert in Flask Framework. I do hack bad people with PHP and MYSQL. We called it Phishing. Yes i do hack for life, funny is it?</p>
                        

                <div class="skill_data">
                    <div className="skill_name">
                    <box-icon name='react' type='logo' className="skill_icon" ></box-icon>
                        <span class="skill_name2">REACT JS</span>
                    </div>
                    <div className="skill_bar skill_barreact"></div>
                <div>
                    <span className="skill_percent">80%</span>
                </div>
                </div>


                <div class="skill_data">
                    <div className="skill_name">
                    <box-icon name='python' type='logo' className="skill_icon" ></box-icon>
                        <span class="skill_name2">PYTHON</span>
                    </div>
                    <div className="skill_bar skill_barpy"></div>
                <div>
                    <span className="skill_percent">65%</span>
                </div>
                </div>


                <div class="skill_data">
                    <div className="skill_name">
                    <box-icon name='php' type='logo' className="skill_icon" ></box-icon>
                        <span class="skill_name2">PHP</span>
                    </div>
                    <div className="skill_bar skill_barphp"></div>
                <div>
                    <span className="skill_percent">75%</span>
                </div>
                </div>


                <div class="skill_data">
                    <div className="skill_name">
                    <box-icon type='solid' name='data' className="skill_icon"></box-icon>
                        <span class="skill_name2">MYSQL</span>
                    </div>
                    <div className="skill_bar skill_barmysql"></div>
                <div>
                    <span className="skill_percent">70%</span>
                </div>
                </div>
                
                </div>
           </div>
                 </div>
        </div>

        <div className="split right">
                <div className="centered">
                <h2 class="skill_title">Youtube Channel</h2>
                        <p class="skill_decs">My youtube channel. It's all about cyber security stuff, hacking activity and programming</p>
                        
                <img src="assets/Youtube.png" className="pic">
                 </img>
                </div>
        </div>

        </div>
    )
}

export default Skills
