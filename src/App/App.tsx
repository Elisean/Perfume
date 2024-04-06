import { HomePage } from "../Pages/Home-page";
import { RegistationPage } from "../Pages/Registration-page";
import { BasketPage } from "../Pages/Basket-page";
import { BonusesPage } from "../Pages/Bonuses-page";
import { AboutUsPage } from "../Pages/AboutUs-page";
import { DocumentationPage } from "../Pages/Documentation-page";
import { Route, Routes } from "react-router-dom";
import { useState, createContext, useEffect } from "react";
import { NotFoundPage } from "../Pages/NotFoundPage";
import { ManCatalogPage } from "../Pages/ManCatalog-page";
import { WomenCatalogPage } from "../Pages/WomenCatalog-page";
import { SingleProduct } from "../Pages/SingleProduct-page";
import { UserPage } from "../Pages/User-page";
import { UnisexCatalogPage } from "../Pages/UnisexCatalog-page";
import { ROUTES } from "../Utils/routes";
import { BonusesPanel } from "../Pages/Control-panel/Bonuses-panel";
import { OrderPanel } from "../Pages/Control-panel/Order-panel";
import { DownloadsPanel } from "../Pages/Control-panel/Downloads-panel";
import { LocationPanel } from "../Pages/Control-panel/Location-panel";
import { UserPanel } from "../Pages/Control-panel/User-panel";



export const useAuthContext = createContext<any>('');

const isAuthenticated = () => !localStorage.getItem('userAuth');

export const App = () => {
  const [useAuth, setUseAuth] = useState(isAuthenticated );



  return (
    <>
      <div className='app'>
            <useAuthContext.Provider value={{useAuth, setUseAuth}}>
              <Routes>
                  <Route element={<HomePage />}  path={ROUTES.HOME} />
                  <Route element={<BasketPage/>} path={ROUTES.BASKET}/>
                  <Route element={<BonusesPage/>} path={ROUTES.BONUSES}/>
                  <Route element={<AboutUsPage/>} path={ROUTES.ABOUTUS}/>
                  <Route element={<DocumentationPage/>} path={ROUTES.DOCUMENTATION}/>
                  <Route element={<ManCatalogPage />} path={ROUTES.MANCATALOGPAGE}/>
                  <Route element={<WomenCatalogPage />} path={ROUTES.WOMENCATALOGPAGE}/>
                  <Route element={<UnisexCatalogPage />} path={ROUTES.UNISEX}/>
                  <Route element={<UserPage/>} path={ROUTES.USERPAGE}/>
                  <Route element={<OrderPanel/>} path={ROUTES.ORDERPANEL}/>
                  <Route element={<BonusesPanel/>} path={ROUTES.BONUSESPANEL}/>
                  <Route element={<DownloadsPanel/>} path={ROUTES.DOWNLOADSPANEL}/>
                  <Route element={<LocationPanel/>} path={ROUTES.LOCATIONPANEL}/>
                  <Route element={<UserPanel/>} path={ROUTES.USERPANEL}/>
                  <Route element={<SingleProduct/>} path={ROUTES.HOME + ROUTES.SINGLEPRODUCT + ':id/'}/>
                  <Route element={<NotFoundPage/>} path={ROUTES.NOTFOUNDPAGE} />
                  <Route element={<RegistationPage/>} path={ROUTES.REGISTRATION} />
              </Routes>  
  
            </useAuthContext.Provider>
      </div>
    </>

  );
}


