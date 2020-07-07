import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import {AuthPage} from './pages/AuthPage';
import {DomWeatherPage} from './pages/DomWeatherPage';
import {AllCities} from './pages/AllCitiesPage';
import {DetailWeatherCity} from './pages/DetailWeatherCity';


export const useRoutes=isAuthenticated=>{
    if(isAuthenticated){
        return (
            <Switch>
                <Route path="/DomWeather"exact>
                    <DomWeatherPage />
                </Route>
                <Route path="/AllCities"exact>
                    <AllCities />
                </Route>
                <Route path="/DetailWether/:id">
                    <DetailWeatherCity />
                </Route>
                <Redirect to="/DomWeather"/>
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path="/"exact>
               <AuthPage/>
            </Route>
            <Redirect to="/"/>
        </Switch>
    )
}