import React from 'react';

import { images } from '../../constants'
import './AboutUs.css';

const AboutUs = () => (
    <div id='about' className='about'>
        <section className='about-restaurant' id="dinnerMenu">
            <div className='info-left'>
                <h2>Om oss</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi saepe velit, quis repellendus harum unde
                    eum corporis corrupti mollitia dolor excepturi distinctio pariatur eius beatae, ratione molestias rem,
                    itaque cum quaerat soluta? Ex rem molestias ducimus vero velit? Repellendus sequi harum perferendis fuga
                    eaque, libero enim consectetur maxime temporibus beatae, dolore dignissimos doloribus totam asperiores
                    voluptatem vitae laboriosam itaque, facilis impedit?<br /><br /> Debitis ad explicabo aliquid rem iure, magni
                    perferendis odio, nemo ab eos fugit rerum impedit quos. Optio doloribus, fuga voluptas explicabo quis
                    illum perferendis commodi repudiandae beatae delectus quos autem consectetur, voluptates porro non vitae
                    fugit, repellendus dolore ipsum.</p>
            </div>
            <div className='info-right'>
                <img src={images.glasses} alt=""></img>
            </div>
        </section>

        <section className='time'>
            <div className='time-left'>
                <img src={images.history} alt=""></img>
            </div>
            <div className='time-right'>
                <h3>Vår historia</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque incidunt a illo magni iste. Minima reprehenderit ipsam earum esse, similique ipsa distinctio labore? Vitae neque molestias ipsum in, aut repellat aperiam magni excepturi aspernatur explicabo dignissimos hic quas recusandae doloribus ullam perferendis, dicta nihil non totam veritatis amet natus temporibus numquam. Amet voluptas quidem, nostrum eius voluptatum assumenda quo perspiciatis animi earum laboriosam neque officiis quas. Repudiandae modi dicta odit aliquam molestiae cupiditate voluptate voluptatibus nobis deleniti. Alias, repellat dolor.</p>
            </div>
        </section>
    </div>

);

export default AboutUs;
