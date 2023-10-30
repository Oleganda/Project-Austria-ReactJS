import React from 'react';
import "../Styles/tippslocals.css";

const TippsLocals = () => {
    return (

        <div id="feedbackMainContId" className='feedbackMainCont'>
            <div className='tippsFirstLocal'>
                <h4 className='tippsFirstLocalQuestion'>WHAT TO EAT?</h4>
                <img className='firstPhotoCity' src="https://images.unsplash.com/photo-1565464315440-8e0d89bc8fd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHZpZW5uYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt='photo1' />
                <div className='tippsFirst'><ul className='tippsFirstLocalAnswer'>You should try traditional Austrian desert, which many locals eat like a main dish. It is called "Kaiserschmarn". You would love it!<hr /> Marco</ul>
                </div>
            </div>
            <div className='tippsSecondLocal'>
                <h4 className='tippsSecondLocalQuestion'>ANY HIDDEN GEMS?</h4>
                <img className='secondPhoto' src="https://images.unsplash.com/photo-1527018181612-30ec1d97571a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHZpZW5uYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt='photo2' />
                <div className='tippsSecond'><ul className='tippsSecondLocalAnswer'>If you have been to many popular places in Vienna, visit the Schlumberger Cellar World. This is an an Austria's oldest sparkling cellars.<hr />Magdalena </ul>
                </div>
            </div>
            <div className='tippsThirdLocal'>
                <h4 className='tippsThirdLocalQuestion'>WHERE TO GO OUT?</h4>
                <img className='thirdPhoto' src="https://images.unsplash.com/photo-1618325262870-03a840ed0a3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHZpZW5uYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt='phot3' />
                <div className='tippsThird'><ul className='tippsThirdLocalAnswer'>Go to the Danube in summer and spend there evening with a lot of people around. You can take your drinks and to seat right on the floor<hr /> Florian</ul>
                </div>
            </div>
            <div className='tippsForthLocal'>
                <h4 className='tippsForthLocalQuestion'>WHERE TO SHOP?</h4>
                <img className='forthPhoto' src="https://images.unsplash.com/photo-1590253198910-1683b35ba5bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpZW5uYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt='photo4' />
                <div className='tippsForth'><ul className='tippsForthLocalAnswer'>I love going to Vintage stores. One of my favourite in Vienna is Burggasse 24. You can find some cool stuff and have some coffee there <hr />Daniella </ul>
                </div>
            </div>
            <div className='tippsFifthLocal'>
                <h4 className='tippsFifthLocalQuestion'>WHERE TO STAY?</h4>
                <img className='fifthPhoto' src="https://images.unsplash.com/photo-1609856878074-cf31e21ccb6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dmllbm5hfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt='photo5' />
                <div className='tippsFifth'><ul className='tippsFifthLocalAnswer'>Public transport in Vienna is very convinient. Basicly you can stay somewhere close to the U-bahn and could easily go to the city centre<hr />Stefan </ul>
                </div>
            </div>
        </div >

    )
}

export default TippsLocals;
