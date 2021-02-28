/*
    ContinentDetails Component
*/

import React, {useEffect, useState} from 'react'
import {fetchContinentData} from '../../utils/apiHandler'
import { useLocation } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';
import CountryCard from '../CountryCard';
import TypeAheadSearch from '../TypeAheadSearch';
import continentsData from '../../utils/continentData.json';
import styles from './styles';
import { CircularProgress } from '@material-ui/core';


function ContinentDetails(props) {
    const location = useLocation(); // hook call that gets location details from router
    const {classes} = props;  //internal

    const [selectedContinent , setSelectedContinent] = useState(); // selected continent data from location
    const [continentData, setContinentData] = useState();  // continent data fetched from api
    const [filteredCountryList, setFilteredList] = useState();  // filtered country list based on typeahead search

    useEffect(() => {
        // fetches continent data based on the continent code passed
        fetchContinentData(location.selectedContinent?.code)
        .then((res)=>{
            setContinentData(res.data.continents[0]); // sets the continent details
            setFilteredList(res.data.continents[0].countries) // initializes the filtered country list
            });
        setSelectedContinent(location.selectedContinent); // sets the selected continent from location
    },[location]);

    // callback passed to typeahed search top set the filtered country list based on search
    const selectCountry = (result) => {
        if(result.length === 0){
            setFilteredList(continentData.countries) 
        }else{
            setFilteredList(result) 
        }
    }

    return (
        <div className={classes.container}>
            <div className={classes.bannerImageContainer}>
                <img className = {classes.bannerImage} src={continentsData[selectedContinent?.code]} alt={setContinentData?.name}/>
            </div>
            <div className={classes.continentsDataContianer}>
                <div className={classes.content}>
                    <div className={classes.header}>
                        <Typography className={classes.headerText} variant="h2" component="h2" gutterBottom>
                            {selectedContinent?.name}
                        </Typography>
                        <div className={classes.searchField}>
                            <TypeAheadSearch options={continentData?.countries} onSelectCountry={(res)=>{selectCountry(res)}}/>
                        </div>
                    </div>
                    {/* display the filtered country list */}


                   {!filteredCountryList?(
                        <div className={classes.countryCard}>
                            <CircularProgress size={80}/>
                        </div>
                   ):(
                        <div className={classes.countryCard}>
                            {filteredCountryList?.map((country) => 
                                <CountryCard country={country} />
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default withStyles(styles)(ContinentDetails)
