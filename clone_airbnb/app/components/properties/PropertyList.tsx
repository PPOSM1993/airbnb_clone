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


interface PropertyListProps {
  landlord_id?: string | null;
  favorites?: boolean | null;
}


const PropertyList: React.FC<PropertyListProps> = ({
  landlord_id,
  favorites
}) => {

  const [properties, setProperties] = useState<PropertyType[]>([]);

  const getProperties = async () => {
    let url = '/api/properties/';
    const tmpProperties = await apiService.get(url)

    if(landlord_id) {
      url += `?landlord_id=${landlord_id}`
    }

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
