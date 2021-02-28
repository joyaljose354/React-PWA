/*
    TypeAheadSearch Component
*/

import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

function TypeAheadSearch(props) {

    const {
        classes, //internal prop
        options, // list on which suggestions is made
        onSelectCountry // callback to handle on select of an option
    } = props;

    const [searchText, setSearchText] = useState(''); //value of text field 
    const [suggestions, setSuggestions] = useState([]); // suggestions to be listed in dropdown

    //function to handle text change
    const onChangeText = (e) => {
        let newSuggestion;
        const searchValue = e.target.value;

        //check for search string availability
        if(searchValue.length >0){
            const regex = new RegExp(`^${searchValue}`, `i`);
            newSuggestion = options?.filter(v => regex.test(v.name));
        }

        onSelectCountry(newSuggestion || []);  //callback function called for setting filtered country list
        setSuggestions(newSuggestion || []);  // updating the suggestion list based on entered text
        setSearchText(searchValue);     // updating text field value on change
    }

    // handles selection of a suggestion from dropdown
    const onSelectSuggestion = (value) =>{
        setSearchText(value);

        // filtering out selected country from the list
         const selectedCountry = options.filter(s => s.name === value);

         onSelectCountry(selectedCountry); //callback function called for setting filtered country list
         setSuggestions([]); // reseting the suggestion list to empty
    }

    // handles the suggestion list render
    const renderSuggestions = () => {
        const newSuggestions = suggestions;

        // checks and returns suggestion listing jsx based on suggestion availability 
        
        if(newSuggestions.length === 0){
            return null;
        }
        return (
            <ul className={classes.searchResult}>
                {newSuggestions.map(item => (
                    <li className={classes.searchResultItem} key={item.code} onClick={(e) => onSelectSuggestion(item.name)}>
                        {item.name}
                    </li>
                ))}
            </ul>
        )

    }

    return (
        <div>
            <TextField onChange={onChangeText} value={searchText} id="filled-search" label="Search country" type="search"  />
            {renderSuggestions()}
        </div>
    )
}

export default withStyles(styles)(TypeAheadSearch)
