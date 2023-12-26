import './ImageGallery.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React ,{ useState,useEffect }  from 'react';
export default function TemplateDemo() {
  const [activeIndex, setActiveIndex] = useState(0);

    const images1 = [
      
      'https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/AB1.jpeg?alt=media&token=28b5b1d9-5a0d-4e58-a542-922a1b93f4b8',
      'https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/CD1.jpeg?alt=media&token=decedde2-b40c-45a5-88d4-39d449ed68d1',
      'https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/EF1.jpeg?alt=media&token=f53ecef5-5222-413f-9430-daccc52efb24',
      'https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/GH1.jpeg?alt=media&token=acee145a-9414-4238-a494-e159d24610c4',
      'https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/IJ1.jpeg?alt=media&token=8080d3e7-d13f-4fa7-85e0-f54334abe7bd',
      'https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/immo5.jpg?alt=media&token=8e2bfa5a-be7d-4121-9dd5-05b5b1839eed',
      'https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/immo6.jpg?alt=media&token=008b32e9-e6a3-4f4a-9c33-6bf4314b9512', 
      'https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/immo1.png?alt=media&token=a65c21c2-9858-4eb9-ac02-fd9d79c89a02',
      'https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/immo3.png?alt=media&token=658e9d45-a051-46cc-af6b-171a571c33d8',
      'https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/immo2.png?alt=media&token=9caa5884-4294-4586-9f74-3646b039edbb',
      'https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/immo4.png?alt=media&token=3d25123d-6f84-4177-b61e-e0747560583e',
      'https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/immo7.jpg?alt=media&token=b314f929-6476-4bc4-9955-10e7e3ca2ce7',
      'https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/immo8.jpg?alt=media&token=f5218fa1-e773-4391-870b-2763cdf41b9c',
      'https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/immo10.jpg?alt=media&token=7b9c9cef-f03a-4459-bfad-cc3453f2e0c2',
      'https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/immo11.png?alt=media&token=a4e90b6b-f1b7-4dde-962a-b74bf0e350af',
      'https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/immo12.PNG?alt=media&token=eab67243-8048-4d41-93c0-87c8c11c31b0',
      'https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/immo13.png?alt=media&token=dd12a22d-1bf4-4349-b723-27f16743d25f',
      'https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/immo14.png?alt=media&token=e7620dcc-b51e-4c49-94e4-d15df3c22ea2',
      'https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/immo15.PNG?alt=media&token=0619c4a9-e984-47db-989e-8a36f6bc534c',

    ];
    const images2 = [
      
      'https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/Villa1.png?alt=media&token=010972cc-f115-4a8b-9b39-1ffec2880f93',
      'https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/Villa2.png?alt=media&token=9c3c5862-30f9-422a-a86c-a5985eefb030',
      'https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/Villa3.png?alt=media&token=6c3c5e4a-8895-4660-96b7-c9a180f1a8e6',
      'https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/Villa4.png?alt=media&token=0d544d72-a884-4254-820c-4f95f9b0bd80',
      'https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/Villa5.png?alt=media&token=a52548fd-b3c8-4b09-a242-c0b9a21ae9b6',
      'https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/villa6.png?alt=media&token=f8c81eb0-d6a1-42cb-aedc-8fdc9090f593',
      'https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/villa7.png?alt=media&token=af84a755-7dd9-49fd-903b-976e98c73eb8',
      'https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/villa8.png?alt=media&token=75c0281a-3333-43d5-9d67-f2043b48efdf',
      'https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/villa9.png?alt=media&token=df35564b-aebb-4a68-a76d-eaa5b24b0322',
      'https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/villa10.png?alt=media&token=18f3ece6-2b4f-4ce4-b007-fa754c8865fd',  
      'https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/villa11.jpg?alt=media&token=db69c088-d5ec-43c4-8f98-34886cfb356b',
      'https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/villa12.jpeg?alt=media&token=643cdca3-2e96-4aae-9cf7-18097f544af6',  

    ];
    const images3 = [
      
      'https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/AB2.jpeg?alt=media&token=a4baa9c8-8221-43bc-bd26-fd7468d38127',
      'https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/CD2.jpeg?alt=media&token=08f1ce08-c16b-430e-99ed-035c0e64789c',
      
      'https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/EF2.jpeg?alt=media&token=cc8df483-5fcc-4de3-bf48-50e0327d6014',
      'https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/GH2.jpeg?alt=media&token=17e2b894-9f88-43fc-a8de-f2ed96eccc9f',

      'https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/AB3.jpeg?alt=media&token=88524cb0-dfdb-4416-a039-079876798afd',
      'https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/CD3.jpeg?alt=media&token=11726a36-ab65-4710-a707-f37600138910',
      'https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/EF3.jpeg?alt=media&token=44f9ef96-ccbd-4f11-8723-9056ec44b49d',
      'https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/GH3.jpeg?alt=media&token=0a519445-2ae1-4b9d-a64a-f48eccbb37ba',
      'https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/amminagement1.jpg?alt=media&token=c98e9ae7-2f0c-4b82-b41d-affd7181bf6e',
      'https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/amminagement2.jpg?alt=media&token=9e377fe3-5d0e-4a26-9272-5fbdbf4fbb55',
      'https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/AB4.jpeg?alt=media&token=0a3676be-13ab-4870-b891-ac89bfcb4090',
      'https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/CD4.jpeg?alt=media&token=c9b77cb5-2e84-4cf3-b350-49c8ebb2ed81',
      'https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/EF4.jpeg?alt=media&token=6d44fb4a-a954-4ed7-a3ed-084ca7e94794',  
      'https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/GH4.jpeg?alt=media&token=950e8ac9-e74e-4e85-a7b7-351ab7d56782',
      'https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/AB5.jpeg?alt=media&token=9da980de-07ce-49d1-a462-76eea0a3aef2',
      'https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/CD5.jpeg?alt=media&token=4a45d653-d64e-466a-b8d2-dd81defde8c9',
      'https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/EF5.jpeg?alt=media&token=6dc64cda-6344-4d40-95f8-56ce3f6362de',
      'https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/GH5.jpeg?alt=media&token=26d3006c-ce46-4963-b773-f8314f14997e',  
      'https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/IJ5.jpeg?alt=media&token=ae5a58dc-44ba-47ab-b5f3-395f2baffb44',
      'https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/KL5.jpeg?alt=media&token=0b099716-5570-4c47-9cff-94f847ba8ecb',  
      'https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/MN5.jpeg?alt=media&token=7d9b7f85-2508-468f-bfc1-62a6b255f67b',
      'image/VDO5.mp4'
     

    ];
    const images4 = [
      
      'https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/scool1.png?alt=media&token=659c5175-ca71-41cb-9ad0-c1f8116bdb96',
      'https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/scool2.png?alt=media&token=b1a05961-b464-4957-94aa-b7d8513e9c95',
      'https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/scool3.png?alt=media&token=dc625f8b-ada5-499a-ab9b-bb7a75a85378',
      'https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/scool4.png?alt=media&token=709e3199-cfec-4a4a-924d-4d78d503d97a',
      'https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/scool5.JPG?alt=media&token=7dcf79e8-3fed-44dc-b418-4b60e99c9160',
      'https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/scool6.JPG?alt=media&token=b971e78e-b500-443c-8fa1-af6a7be41eca',


    ];
    const images5= [
      
      'https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/lotti.JPG?alt=media&token=76f2f03e-5473-4e29-8fab-bb92e3316bb1',
      'https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/plan%20autorise.jpg?alt=media&token=31a1fc0d-c72e-4fcf-a62a-ca31590894a4',
      'https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/20.999%20(1)-1.png?alt=media&token=8046344f-29b2-4eb7-a659-6ae009375e80'
    
     

    ];
    const images6= [
      'https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/association.jpg?alt=media&token=50ec2906-d900-4661-821b-0d3c238b4234',
      'https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/urban.png?alt=media&token=62a592b0-2377-43eb-9288-c9e9300188c1',
      'https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/scool7.JPG?alt=media&token=0ca537ab-6176-48a4-acc3-bea90e5c5e2b',

    ]
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      maxWidth:'90%',
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: activeIndex,
      beforeChange: (current, next) => setActiveIndex(next),    };
  
  return (
    <div id="projets">
    <div className="card margin-bottom flex" > 
      <div className="intro">
        <h1>Nos Projets!</h1>
        <p>Sté Abdo Archi Nord </p>
        <br />
      </div>

      <div className="gridywrap">
        <div className="gridy-2 gridyhe-1">
          <div className="gridimg" style={{ backgroundImage: 'url(" https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/AB1.jpeg?alt=media&token=28b5b1d9-5a0d-4e58-a542-922a1b93f4b8")' }}>&nbsp;</div>

          <div className="gridinfo">
            <h3>PROJETS-IMMEUBLE</h3>
            <div className="gridmeta">
            </div>
            <a href="#" class="grid-btn grid-more" data-toggle="modal" data-target="#myModal">
  <span>More</span> <i class="fa fa-plus"></i>
</a>          </div>

        </div>
      

        <div class="modal" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered "
            role="document"
            style={{ maxWidth: '95%' }}
  >
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title" id="exampleModalLabel">PROJETS-IMMEUBLE</h3>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
  
        <div className="dynamic-carousel" >
            <Slider {...settings} >
          {images1.map((image, index) => (
            <div key={index} style={{display: "flex", justifyContent: "center"}}>
              <img src={image}  style={{ maxHeight:"500px",maxWidth:"100%" , margin: "0 auto"}} alt={`slide ${index + 1}`} className="pic" />
            </div>

          ))}
        </Slider>
        </div>
      {/* </div> */}
    </div>
  </div>
</div>

        <div className="gridy-1 gridyhe-1">
          <div className="gridimg" style={{ backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/Villa2.png?alt=media&token=9c3c5862-30f9-422a-a86c-a5985eefb030")' }}>&nbsp;</div>
          <div className="gridinfo">
            <h3>PROJETS-VILLA</h3>
            <div className="gridmeta">
              </div>

            <a href="#" class="grid-btn grid-more" data-toggle="modal" data-target="#myModal1">
  <span>More</span> <i class="fa fa-plus"></i>
</a>             </div>
        </div>



        <div class="modal" id="myModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog  modal-dialog-centered"
            role="document"
            style={{ maxWidth: '95%' }}
  >
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title" id="exampleModalLabel">PROJETS-VILLA</h3>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    
        <div className="dynamic-carousel" >
            <Slider {...settings} >
          {images2.map((image, index) => (
            <div key={index} style={{display: "flex", justifyContent: "center"}}>
              <img src={image}  style={{ maxHeight:"500px",maxWidth:"100%" , margin: "0 auto"}} alt={`slide ${index + 1}`} className="pic" />
            </div>

          ))}
        </Slider>
        </div>
      {/* </div> */}
    </div>
  </div>
</div>



        <div className="gridy-1 gridyhe-1">
          <div className="gridimg" style={{ backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/AB4.jpeg?alt=media&token=0a3676be-13ab-4870-b891-ac89bfcb4090")' }}>&nbsp;</div>

          <div className="gridinfo">
            <h3>PROJETS-AMENAGEMENT INTERIEURE</h3>
            <div className="gridmeta">
              {/* <p className="gridwhen"><i className="fa fa-clock-o"></i> 17:22 17th Feb 2015</p> */}
              {/* <p className="gridwho"><i className="fa fa-user"></i> Clark Kent</p> */}
            </div>
            {/* <p className="gridexerpt">Lorem ipsum dolor set amet, some dummy content..</p> */}
            <a href="#" class="grid-btn grid-more" data-toggle="modal" data-target="#myModal3">
  <span>More</span> <i class="fa fa-plus"></i>
</a>              </div>
        </div>

        <div class="modal" id="myModal3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog modal-dialog-centered"
            role="document"
            style={{ maxWidth: '95%' }}
  >
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title" id="exampleModalLabel">PROJETS-AMENAGEMENT INTERIEURE</h3>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
     
        <div className="dynamic-carousel" >
        <Slider {...settings}>
      {images3.map((item, index) => (
        <div key={index} style={{ display: 'flex', justifyContent: 'center' }}>
          {typeof item === 'string' && item.endsWith('.mp4') ? (
            <video controls style={{ maxHeight: '700px', maxWidth: '100%', margin: '0 auto' }}>
              <source src={item} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img src={item} style={{ maxHeight: '500px', maxWidth: '100%', margin: '0 auto' }} alt={`slide ${index + 1}`} className="pic" />
          )}
        </div>
      ))}
    </Slider>
        </div>
      {/* </div> */}
    </div>
  </div>
</div>


        <div className="gridy-2 gridyhe-1">
          <div className="gridimg" style={{ backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/scool4.png?alt=media&token=709e3199-cfec-4a4a-924d-4d78d503d97a")' }}>&nbsp;</div>

          <div className="gridinfo">
            <h3>PROJETS-SCOLAIRE</h3>
            <div className="gridmeta">
            
            </div>
            <a href="#" class="grid-btn grid-more" data-toggle="modal" data-target="#myModal4">
  <span>More</span> <i class="fa fa-plus"></i>
</a>            </div>
        </div>

        
        <div class="modal" id="myModal4" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered "
            role="document"
            style={{ maxWidth: '95%' }}
  >
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title" id="exampleModalLabel">PROJETS-SCOLAIRE</h3>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
     
        <div className="dynamic-carousel" >
            <Slider {...settings} >
          {images4.map((image, index) => (
            <div key={index} style={{display: "flex", justifyContent: "center"}}>
              <img src={image}  style={{ maxHeight:"500px",maxWidth:"100%" , margin: "0 auto"}} alt={`slide ${index + 1}`} className="pic" />
            </div>

          ))}
        </Slider>
        </div>
      {/* </div> */}
    </div>
  </div>
</div>



        <div className="gridy-2 gridyhe-1">
          <div className="gridimg" style={{ backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/lotti.JPG?alt=media&token=76f2f03e-5473-4e29-8fab-bb92e3316bb1)' }}>&nbsp;</div>
          <div className="gridinfo">
            <h3>PROJETS-URBANISME</h3>
            <div className="gridmeta">
           
            </div>
            <a href="#" class="grid-btn grid-more" data-toggle="modal" data-target="#myModal5">
  <span>More</span> <i class="fa fa-plus"></i>
</a>             </div>
        </div>

       
        <div class="modal" id="myModal5" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered "
            role="document"
            style={{ maxWidth: '95%' }}
  >
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title" id="exampleModalLabel">PROJETS-URBANISME</h3>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
     
        <div className="dynamic-carousel" >
            <Slider {...settings} >
          {images5.map((image, index) => (
            <div key={index} style={{display: "flex", justifyContent: "center"}}>
              <img src={image}  style={{ maxHeight:"500px",maxWidth:"100%" , margin: "0 auto"}} alt={`slide ${index + 1}`} className="pic" />
            </div>

          ))}
        </Slider>
        </div>
      {/* </div> */}
    </div>
  </div>
</div>
<div className="gridy-1 gridyhe-1">
          <div className="gridimg" style={{ backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/archivideo-14dff.appspot.com/o/association.jpg?alt=media&token=50ec2906-d900-4661-821b-0d3c238b4234")' }}>&nbsp;</div>
          <div className="gridinfo">
            <h3>AUTRES ... </h3>
            <div className="gridmeta">
              </div>

            <a href="#" class="grid-btn grid-more" data-toggle="modal" data-target="#myModal6">
  <span>More</span> <i class="fa fa-plus"></i>
</a>             </div>
        </div>



        <div class="modal" id="myModal6" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog  modal-dialog-centered"
            role="document"
            style={{ maxWidth: '95%' }}
  >
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title" id="exampleModalLabel">AUTRES ...</h3>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    
        <div className="dynamic-carousel" >
            <Slider {...settings} >
          {images6.map((image, index) => (
            <div key={index} style={{display: "flex", justifyContent: "center"}}>
              <img src={image}  style={{ maxHeight:"500px",maxWidth:"100%" , margin: "0 auto"}} alt={`slide ${index + 1}`} className="pic" />
            </div>

          ))}
        </Slider>
        </div>
      {/* </div> */}
    </div>
  </div>
</div>



</div>
     




















  


   


      </div>







      
    </div>
  );
}
















