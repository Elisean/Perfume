import React from 'react'
import { CatalogLayout } from '../Layout/Catalog-layout/CatalogLayout'

export const ManCatalogPage:React.FC = () => {
  return (
    <>
       <CatalogLayout title={'Для Мужчин'} filter={'Мужские'}/>
    </>
  )
}
