'use client';

import { useEffect, useState } from 'react';

import PropertyListItems from './PropertyListItems';

import apiService from '@/app/services/apiService';

export type PropertyType = {
  id: string;
  title: string;
  price_per_night: number;
  image_url: string;
}

const PropertyList = () => {

  const [properties, setProperties] = useState<PropertyType[]>([]);

  const getProperties = async () => {    
    const tmpProperties = await apiService.get('/api/properties/')

    setProperties(tmpProperties.data);
  };


  useEffect(() => {
    apiService.get('/api/properties/');

    getProperties();
  }, []);

  return (
    <>
    {properties.map((property) => {
        return (
            <PropertyListItems key={property.id} property={property} />
        )
    })}
</>
  )
}

export default PropertyList;
