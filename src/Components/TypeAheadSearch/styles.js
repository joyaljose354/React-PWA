const styles = {
    searchResult:{
        listStyleType: 'none',
        textAlign: 'left',
        margin: '8px 0px',
        padding: 0,
        background:'#fafafa',
        height:250,
        overflow:'auto',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        borderRadius:6
    },
    searchResultItem:{
        padding:'10px 5px',
        cursor:'pointer',
        '&:hover':{
            background:'#3f51b5',
            color:'#ffffff'
        }
    }
}

export default styles;