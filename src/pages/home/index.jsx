import React from 'react';

import Banner from '../../components/banner';
import CategoryMenuCard from '../../components/categoryMenuCard';
import { LayoutFluid } from '../../container/layout';

import MainCourse from '../../assets/images/générals/plats.png'
import SoupsSalads from '../../assets/images/générals/soupes.png'
import Drinks from '../../assets/images/générals/boissons.png'
import Desserts from '../../assets/images/générals/desserts.png'

import { Root, CategoryMenu } from './home.styled';

export default function Home () {
    return (
        <Root className='home'>
            <Banner/>
            <LayoutFluid>
                <CategoryMenu>
                    <CategoryMenuCard image={MainCourse} span={"Plats principaux"}/>
                    <CategoryMenuCard image={SoupsSalads} span={"Soupes et Salades"}/>
                    <CategoryMenuCard image={Drinks} span={"Boissons"}/>
                    <CategoryMenuCard image={Desserts} span={"Desserts"}/>
                </CategoryMenu>
            </LayoutFluid>
        </Root>
    );
};
