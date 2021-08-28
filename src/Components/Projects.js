import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import Proj1 from '../Assets/Proj1.jpg'
import Proj2 from '../Assets/Proj2.jpg'
import Proj3 from '../Assets/Proj3.jpg'
import Proj4 from '../Assets/Proj4.jpg'
import Proj5 from '../Assets/ThermaxEvapo.jpeg'
import Proj6 from '../Assets/Proj6.jpeg'
import Proj7 from '../Assets/evapoSite.jpg'
import Carousel from 'react-elastic-carousel'
import { Item } from '../Components/Styles'


export default function Projects() {

    const images = [

        { image: Proj1 },
        { image: Proj2 },
        { image: Proj3 },
        { image: Proj4 },
        { image: Proj5 },
        { image: Proj6 },
        { image: Proj7 },


    ];


    const breakpoints = [

        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 1 },
        { width: 768, itemsToShow: 1 },
        { width: 1200, itemsToShow: 2 }

    ]


    return (
        <>
            <Grid alignContent='center' alignItems='center'>

                <Grid item xs={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Carousel breakPoints={breakpoints} style={{ width: '80%' }}>
                        {

                            images.map((item, index) => {

                                const { image } = item;
                                return (
                                    <Item><img src={image} alt={image} style={{ height: '100%', width: '100%' }} /></Item>
                                )


                            })

                        }
                    </Carousel>


                </Grid>


            </Grid>
        </>
    )
}
