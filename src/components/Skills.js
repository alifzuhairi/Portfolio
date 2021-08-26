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
                        <p class="skill_decs">Aspire to become a front-end web developers. 
                        When i cut myself, i dont see blood. I see HTML and CSS. Most of my time
                        i spent developing website by using ReactJS framework</p>
                        

                <div class="skill_data">
                    <div className="skill_name">
                    <box-icon type='logo' name='html5' className="skill_icon"></box-icon>
                        <span class="skill_name2">HTML5</span>
                    </div>
                    <div className="skill_bar skill_barhtml"></div>
                <div>
                    <span className="skill_percent">80%</span>
                </div>
                </div>


                <div class="skill_data">
                    <div className="skill_name">
                    <box-icon name='css3' type='logo' className="skill_icon" ></box-icon>
                        <span class="skill_name2">CSS</span>
                    </div>
                    <div className="skill_bar skill_barcss"></div>
                <div>
                    <span className="skill_percent">65%</span>
                </div>
                </div>


                <div class="skill_data">
                    <div className="skill_name">
                    <box-icon name='javascript' type='logo' className="skill_icon" ></box-icon>
                        <span class="skill_name2">JavaScript</span>
                    </div>
                    <div className="skill_bar skill_barjs"></div>
                <div>
                    <span className="skill_percent">75%</span>
                </div>
                </div>


                <div class="skill_data">
                    <div className="skill_name">
                    <box-icon type='logo' name='react' className="skill_icon"></box-icon>
                        <span class="skill_name2">ReactJS</span>
                    </div>
                    <div className="skill_bar skill_barreact"></div>
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
               
                <div className="skill_container bd-grid">
               <div>
               <h2 class="skill_title">Other Skills</h2>
                        <p class="skill_decs">My brain are made of Python, because i do love to do Machine Learning project,
                        by using Flask Framework. Interested in PHP and MySQL, developing a lot of Phishing website
                        </p>
                        

                <div class="skill_data">
                    <div className="skill_name">
                    <box-icon type='logo' name='python' className="skill_icon"></box-icon>
                        <span class="skill_name2">Python</span>
                    </div>
                    <div className="skill_bar skill_barpy"></div>
                <div>
                    <span className="skill_percent">55%</span>
                </div>
                </div>


                <div class="skill_data">
                    <div className="skill_name">
                    <box-icon type='logo' name='php' className="skill_icon"></box-icon>
                        <span class="skill_name2">PHP</span>
                    </div>
                    <div className="skill_bar skill_barphp"></div>
                <div>
                    <span className="skill_percent">75%</span>
                </div>
                </div>


                <div class="skill_data">
                    <div className="skill_name">
                    <box-icon name='data' type='solid' className="skill_icon" ></box-icon>
                      <span class="skill_name2">mySQL</span>
                    </div>
                    <div className="skill_bar skill_barmysql"></div>
                <div>
                    <span className="skill_percent">60%</span>
                </div>
                </div>


                <div class="skill_data">
                    <div className="skill_name">
                    <box-icon type='logo' name='git' className="skill_icon"></box-icon>
                        <span class="skill_name2">GIT</span>
                    </div>
                    <div className="skill_bar skill_bargit"></div>
                <div>
                    <span className="skill_percent">70%</span>
                </div>
                </div>
                
                </div>
           </div>

                </div>
        </div>

        </div>
    )
}

export default Skills
