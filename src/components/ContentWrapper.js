import React from 'react';
import ContentRowTop from './ContentRowTop';
import Footer from './Footer';
import Table from './Table';
import TopBar from './TopBar';


const Contentwrapper = () => {
    return (
        <div id="content-wrapper" class="d-flex flex-column">
    
    
         <div id="content"> 

         <TopBar/>
         <ContentRowTop/>
           
         </div>  


        <Table/>
        <Footer/>
        
    
        </div>
    );
}

export default Contentwrapper;

