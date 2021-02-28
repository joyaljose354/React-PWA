/*
  Landing page
*/

import React, { useState,useEffect } from 'react'
import ContinentCard from '../../Components/ContinentCards';
import {fetchContinentList} from '../../utils/apiHandler'
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import history from '../../utils/history';
import styles from './styles';

function Landing(props) {

    const[continentList, setContinentList] = useState(); // holds the fetched continent list
    
    const {
      classes // internal prop passed by withStyles hoc
    } = props; 

    useEffect( () => {
      // function call to fetch the continent list on component mount
    fetchContinentList()
        .then((res)=>{
        console.log(res.data)
        setContinentList(res.data.continents);
        });
    },[]);

    return (
      <div className={classes.main}>
        {!continentList?(
          <div className={classes.loading}>
            <CircularProgress size={100}/>
          </div>
        ):(
            <div className={classes.mainCard}>
              {continentList?.map(continent => 
                <div className={classes.continentCard} onClick={() => history.push({
                  pathname: '/Continent',
                  selectedContinent: continent 
                })}>
                  <ContinentCard continent={continent}/>
              </div> 
            )}
            </div>
          )}
      </div>
    )
}

export default withStyles(styles)(Landing)
