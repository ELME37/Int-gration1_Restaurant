import React, { useState, useEffect } from 'react';

import Banner from '../../components/banner';
import CategoryMenuCard from '../../components/categoryMenuCard';
import { LayoutFluid } from '../../container/layout';
import Story from '../../components/story';
import { CarouselSpecialties } from '../../container/carousel';
import { CarouselGallery } from '../../container/carousel';
import { CarouselChefs } from '../../container/carousel';
import FilterItem from '../../components/filterItem';
import MenuItem from '../../menuItem';
import GalleryItem from '../../components/galleryItem';
import Modal from '../../container/modal';
import Button from '../../components/button';
import FormReservation from '../../container/formReservation';

import MainCourse from '../../assets/images/générals/plats.png'
import SoupsSalads from '../../assets/images/générals/soupes.png'
import Drinks from '../../assets/images/générals/boissons.png'
import Desserts from '../../assets/images/générals/desserts.png'
import Restaurant from '../../assets/images/générals/restaurant.jpg'

import { Root, CategoryMenu, Specialties, Carte, Menu, Gallery, GalleryPhoto, Chef, Table, TableImage, TableH3, TableSpan, 
         Reservation, Filter, H2, SpanTitle } from './home.styled';

export default function Home () {
    const [itemMenu, setItemMenu] = useState([]);
    const [itemFilter, setItemFilter] = useState([]);
    const [selectedFilter, setSelectedFilter] = useState(1);
    const [filteredMenu, setFilteredMenu] = useState([]);
    const [itemGallery, setItemGallery] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const [itemChef, setItemChef] = useState([]);


    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        fetch('/dataMenu/itemsMenu.json')
          .then(response => response.json())
          .then(data => {setItemMenu(data)})
          .catch(error => console.error(error))
      }, []);

    useEffect(() => {
        fetch('/dataMenu/itemsFilter.json')
          .then(response => response.json())
          .then(data => {setItemFilter(data)})
          .catch(error => console.error(error))
    }, []);

    useEffect(() => {
        fetch('/dataMenu/itemsGallery.json')
          .then(response => response.json())
          .then(data => {setItemGallery(data)})
          .catch(error => console.error(error))
    }, []);

    useEffect(() => {
        fetch('/dataMenu/itemsChefs.json')
          .then(response => response.json())
          .then(data => {setItemChef(data)})
          .catch(error => console.error(error))
    }, []);

    useEffect(() => {
        const filteredItems = itemMenu.filter(item => item.categoryId === selectedFilter);
        setFilteredMenu(filteredItems);
    }, [selectedFilter, itemMenu]);

      const specialtiesItem = itemMenu.filter(item => [9, 10, 5, 7, 14, 16].includes(item.id));

      const handleFilterClick = (id) => {
        setSelectedFilter(id);
    };

    const handleGalleryItemClick = (index) => {
        setSelectedImageIndex(index);
        openModal();
    };

    return (
        <Root className='home'>
            <Banner/>
            <LayoutFluid style={{ width: '90%' }}>
                <CategoryMenu>
                    <CategoryMenuCard image={MainCourse} span={"Plats principaux"}/>
                    <CategoryMenuCard image={SoupsSalads} span={"Soupes et Salades"}/>
                    <CategoryMenuCard image={Drinks} span={"Boissons"}/>
                    <CategoryMenuCard image={Desserts} span={"Desserts"}/>
                </CategoryMenu>
                <Story/>
                <Specialties>
                    <H2>Spécialités du jour</H2>
                    <SpanTitle>~ Delicious foods ~</SpanTitle>
                    <CarouselSpecialties slides={specialtiesItem}/>
                </Specialties>
                <Carte>
                    <H2>Notre Carte</H2>
                    <SpanTitle>~ See what we offer ~</SpanTitle>
                    <Filter>
                        {itemFilter.map((filter, index) => (
                            <FilterItem key={index} icon={filter.image} name={filter.name} onClick={() => handleFilterClick(filter.id)} active={filter.id === selectedFilter}/>
                        ))}
                    </Filter>
                    <Menu>
                        {filteredMenu.map((menuItem, index) => (
                            <MenuItem key={index} name={menuItem.name} />
                        ))}
                    </Menu>
                </Carte>
                <Gallery>
                    <H2>Galerie Photo</H2>
                    <SpanTitle>~ Our restaurant ~</SpanTitle>
                    <GalleryPhoto>
                        {itemGallery.map((gallery, index) => (
                            <GalleryItem key={index} image={gallery.image} onClick={() => handleGalleryItemClick(index)}/>
                        ))}
                    </GalleryPhoto>
                </Gallery>
                <Chef>
                    <H2>Nos chefs</H2>
                    <SpanTitle>~ See what we offer ~</SpanTitle>
                    <CarouselChefs slides={itemChef}/>
                </Chef>
            </LayoutFluid>
            <Table>
                <TableImage src={Restaurant} alt="restaurant" />
                <TableH3>Laissez vos papilles s'éveiller à nos côtés.</TableH3>
                <TableSpan>Wish you have a good meal!</TableSpan>
                <Button>Réserver une table</Button>
            </Table>
            <LayoutFluid style={{ width: '90%' }}>
                <Reservation>
                    <H2>Réserver une table</H2>
                    <SpanTitle>~ Check out our place ~</SpanTitle>
                </Reservation>
            </LayoutFluid>
            <FormReservation/>
            <Modal isOpen={isOpen} onClose={closeModal}>
                <CarouselGallery images={itemGallery} initialSlide={selectedImageIndex}/>
            </Modal>
        </Root>
    );
};
