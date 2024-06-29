import React from 'react'
import './Help.css'
import { Parallax } from 'react-parallax';

// function Help() {
//     return (
//         <>
//             <div className="help-main">
//                 <Parallax
//                     bgImage="./Help-center image/help center image.jpg"
//                     strength={400}
//                     className='h-image1'
//                 >
//                 <div className="h-section1">
//                     <h2>
//                         Need Help? Check <br /> Out Our Help Center
//                     </h2>
//                     <p>
//                         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis saepe maxime itaque totam.
//                     </p>
//                     <button type="button" className="btn btn-light help-button rounded-5">Go to help center</button>
//                 </div>
//                 <div className="h-section2">

//                     {/* <img className="h-image1" src="./Help-center image/help center image.jpg" alt="" /> */}
//                 </div>
//                 </Parallax>
//             </div>
//         </>
//     )
// }

function Help() {
    return (
        <div className="help-main">
            <div className="help-content">
                <div className="h-section1">
                    <h2>
                        Need Help? Check <br /> Out Our Help Center
                    </h2>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br/> Nobis saepe maxime itaque totam.
                    </p>
                    <button type="button" className="btn btn-light help-button rounded-5">Go to help center</button>
                </div>
                <div className="h-section2">
                    <Parallax
                        bgImage="https://static.wixstatic.com/media/c22c23_de5cbbefa9104fc1a1604ea146ea523a~mv2.jpg/v1/fill/w_735,h_607,al_t,q_85,usm_0.66_1.00_0.01,enc_auto/c22c23_de5cbbefa9104fc1a1604ea146ea523a~mv2.jpg"
                        strength={300}
                        className='h-parallax'
                        bgImageStyle={{ height: '150%', width: '100%', objectFit: 'cover' }}
                    >
                        <div />
                    </Parallax>
                </div>
            </div>
        </div>
    );
}

export default Help