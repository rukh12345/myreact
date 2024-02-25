import React from 'react'
import CardTwo from '../components/CardTwo'
import NavBar from '../components/NavBar'
const About = () => {
  return (
    <>

    <NavBar/>
        {/* ------potion0 */}

     <div className="container-fluid ">
        <img src="/images/6.png" className="d-block w-100" alt="..." />
        <div className="about-img carousel-caption">
          <h1>About Us</h1>
        </div>
      </div>
      {/* ------Portion 1 */}
      <br />
      
 <div className="container-fluid  mx-auto">
  <div className="row  d-flex justify-content-center ">
    <div className="col-sm-6 m-2 " style={{width: '40rem', border: 'none'}}>
    <div className="text">
        <br />
      <p className="card-text about-text">Blood buddies is a non profit organization dedicated to help and support thalassemia, anemia, surgery and hemophilia patients. We are committed to open and honest communication with our donors and partners, ensuring trust and accountability. We provide a user-friendly platform where willing donors can easily connect with individuals in need of blood, ensuring a timely response to emergencies and planned transfusions. We empower donors with the knowledge and resources needed to make informed and confident choices.
      </p>
    </div>
  </div>
  <div className="col-sm-6 m-2" style={{width: '24rem', border: 'none'}}>
      <img src="/images/img2.png" className="card-img-top mt-2 mission" alt="..." />
      
    </div>
</div>
</div>

      {/* ------potion2 */}
   
      <div className="container  ">
  <div className="row d-flex justify-content-center ">
    {/* Mission  */}
    <div className="col-sm-4 m-5 mvs" style={{width: '35rem', border: 'none'}}>
      <img src="images/image10.png" className="card-img-top mt-2 mission" alt="..." />
      <br />
      <br />
      <div className="text">
        <h4>Our Mission</h4>
        <p className="card-text about-text-1" >At Blood Donors United, our mission is to save lives and foster a culture of compassion, hope, and unity through voluntary blood donations. We are dedicated to ensuring a safe and reliable blood supply that can address the ever-present need for life-saving transfusions. 
        </p>
      </div>
    </div>
    {/* Vision */}
    <div className="col-sm-4 m-5 mvs" style={{width: '35rem', border: 'none'}}>
      <img src="images/image11.png" className="card-img-top mt-2 mission" alt="..." />
      <br />
      <br />
      <div className="text">
        <h4>Our Statement</h4>
        <p className="card-text about-text-1">Our vision is a Pakistan where no one has to suffer or perish due to a shortage of blood. We aspire to create a social network of selfless donors, united by their willingness to give the gift of life. We aim to make voluntary blood donation a part of everyday life.</p>
      </div>
    </div>
  </div>
</div>
 {/* ------potion3 */}
 <CardTwo/>
    </>
  )
}

export default About
