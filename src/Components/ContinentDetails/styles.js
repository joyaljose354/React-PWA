const styles = {
    container:{
        position:'relative',
        display:'flex',
        alignItems:'flex-end',
        justifyContent:'center'
    },
    header:{
        textAlign:'center',
        display:"flex",
        position:'absolute',
        width:'100%',
        zIndex:10
    },
    headerText:{
        flex:1
    },
    searchField:{
        position:'absolute',
        right:0
    },
    bannerImageContainer:{
        height:350,
        width:'100%'
    },
    bannerImage:{
        width:'100%',
        height:'100%',
        objectFit:'cover'
    },
    continentsDataContianer:{
        position:'absolute',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        top:250,
        padding:32,
        background:'#fafafa',
        borderRadius:6,
        width:'80%'
    },
    countryCard:{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        paddingTop:80
    },
    content:{
        position:'relative'
    },
    '@media (max-width: 1160px)': {
        header: {
          display:'block'
        },
        searchField:{
            position: 'unset'
        },
        countryCard:{
            paddingTop:160
        },
        continentsDataContianer:{
            width:'70%',
            top:225
        }
      }
}

export default styles;