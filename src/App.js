
import React from 'react';
import './App.css';
import Navbar from './Components/Menu';
import BannerMain from './Components/Banner';
import FooterPage from './Components/Footer';
import Information from './Components/Information';
import TippsLocals from './Components/TippsLocals';
import WinterActivities from './Components/WinterActivities';


const App = () => {

  const slides1 = [
    { image: 'https://images.unsplash.com/photo-1660745244170-647c6bc19170?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80', title: <h3>Skiing</h3>, description: <h3>Want to go to ski? We know good places!</h3> },
    { image: 'https://images.unsplash.com/photo-1521762662178-62d5f449f54c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80', title: <h3>Snow Shoes</h3>, description: <h3>Snowshoe hiking</h3> },
    { image: 'https://images.unsplash.com/photo-1606819788638-bd1cda3ca8e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', title: <h3>Christmas Markets</h3>, description: <h3>Punsh or Glue wein?</h3> },
    { image: 'https://images.unsplash.com/photo-1615887879727-ca2c4a474b54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', title: <h3>Tobogganing</h3>, description: <h3>Fun for kids and parents</h3> },
    { image: 'https://images.unsplash.com/photo-1442560151894-8ac615cff97a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', title: <h3>Thermal Spa</h3>, description: <h3>Heated pools in Alpine valley</h3> },
    { image: 'https://images.unsplash.com/photo-1585815157396-ad62043f721b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', title: <h3>Sauna</h3>, description: <h3>Healthy way to recover</h3> },
    { image: 'https://images.unsplash.com/photo-1628412277659-b4bb70d40b7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80', title: <h3>Tasty Food</h3>, description: <h3>Hungry after skiing?</h3> },
    { image: 'https://images.unsplash.com/photo-1621870906355-033cc7630dc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80', title: <h3>Viennese Ball</h3>, description: <h3>Join a centuries-old tradition</h3> }
  ];
  const slides2 = [
    { image: 'https://images.unsplash.com/photo-1613592497868-cd2155e11e41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1156&q=80', title: <h3>Sightseeings</h3>, description: <h3>Museums, palaces, parks</h3> },
    { image: 'https://images.unsplash.com/photo-1596039867217-2bce741dfb95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', title: <h3>Bike trip</h3>, description: <h3>Rent a bike and explore more places</h3> },
    { image: 'https://images.unsplash.com/photo-1463725876303-ff840e2aa8d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80', title: <h3>Hiking</h3>, description: <h3>Breathtaking views</h3> },
    { image: 'https://images.unsplash.com/photo-1569243962808-e6c6ef569d9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80', title: <h3>Tirol</h3>, description: <h3>Mountains are everywhere</h3> },
    { image: 'https://images.unsplash.com/photo-1600422497863-84e3e9c14f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', title: <h3>Wine</h3>, description: <h3>Regions and sorts of Austrian wines</h3> },
    { image: 'https://images.unsplash.com/photo-1634148410097-a3cd8833c7e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', title: <h3>Architercture</h3>, description: <h3>Hiding spots of art</h3> },
    { image: 'https://images.unsplash.com/photo-1521320226546-87b106956014?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80', title: <h3>Lakes</h3>, description: <h3>Best lakes in Austria</h3> }
  ];

  return (
    <div className='page-container'>

      <Navbar />
      <BannerMain />
      <TippsLocals />
      <WinterActivities slides={slides1} id="sliderIdSummer"/>
      <Information />
      <WinterActivities slides={slides2} id="sliderWinter"/>

      <FooterPage />
    </div >
  );
}

export default App;
