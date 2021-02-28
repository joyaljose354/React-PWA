const styles = {
    mainCard:{
      display:'flex',
      justifyContent:'space-around',
      flexWrap:'wrap',
      boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
      margin:100,
      padding:60,
      borderRadius:6,
      backgroundColor:'#fafafa',
    },
    continentCard:{
      flex:'0 1 45%',
      padding:16
    },
    loading:{
      display:'flex',
      height:'100vh',
      justifyContent:'center',
      alignItems:'center'
    },
    '@media (max-width: 960px)': {
      mainCard:{
        margin:0,
      }
    },
    '@media (max-width: 760px)': {
      continentCard:{
        flex:'1 1 45%',
      }
    },
    '@media (max-width: 400px)': {
      continentCard:{
        padding:8
      }
    },
    '@media (max-width: 300px)': {
      continentCard:{
        padding:0
      }
    }
  }

  export default styles;