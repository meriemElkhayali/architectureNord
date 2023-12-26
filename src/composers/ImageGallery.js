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
      'image/immo5.jpg',
      'image/immo6.jpg', 
      'image/immo1.png',
      'image/immo3.png',

      'image/immo2.png',
      'image/immo4.png',
       
      'image/immo7.jpg',
      'image/immo8.jpg',
      'image/immo10.jpg',
      'image/immo11.png',
      'image/immo12.png',
       
      'image/immo13.png',
      'image/immo14.png',
      'image/immo15.png',

    ];
    const images2 = [
      
      'image/Villa1.png',
      'image/Villa2.png',
      'image/Villa3.png',
      'image/Villa3.png',
      'image/Villa4.png',
      'image/Villa5.png',
      'image/villa6.png',
      'image/villa7.png',
      'image/villa8.png',
      'image/villa9.png',
      'image/villa10.png',  
      'image/villa11.jpg',
      'image/villa12.jpeg',  

    ];
    const images3 = [
      
      'image/AB2.jpeg',
      'image/CD2.jpeg',
      
      'image/EF2.jpeg',
      'image/GH2.jpeg',

      'image/AB3.jpeg',
      'image/CD3.jpeg',
      'image/EF3.jpeg',
      'image/GH3.jpeg',
      'image/amminagement1.jpg',
      'image/amminagement2.jpg',
      'image/AB4.jpeg',
      'image/CD4.jpeg',
      'image/EF4.jpeg',  
      'image/GH4.jpeg',
      'image/AB5.jpeg',
      'image/CD5.jpeg',
      'image/EF5.jpeg',
      'image/GH5.jpeg',  
      'image/IJ5.jpeg',
      'image/KL5.jpeg',  
      'image/MN5.jpeg',
      'image/VDO5.mp4'
     

    ];
    const images4 = [
      
      'image/scool1.png',
      'image/scool2.png',
      'image/scool3.png',
      'image/scool4.png',
      'image/scool5.jpg',
      'image/scool6.jpg',
      'image/scool7.jpg',

    
     

    ];
    const images5= [
      
      'image/lotti.jpg',
      'image/plan autorise.jpg',
      'image/20.999 (1)-1.png'
    
     

    ];
    const images6= [
      'image/association.jpg',
      'image/urban.png',
      'image/scool7.jpg',

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
          <div className="gridimg" style={{ backgroundImage: 'url(" image/AB1.jpeg")' }}>&nbsp;</div>

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
          <div className="gridimg" style={{ backgroundImage: 'url("image/Villa2.png")' }}>&nbsp;</div>
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
          <div className="gridimg" style={{ backgroundImage: 'url("image/AB4.jpeg")' }}>&nbsp;</div>

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
          <div className="gridimg" style={{ backgroundImage: 'url("image/scool4.png")' }}>&nbsp;</div>

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
          <div className="gridimg" style={{ backgroundImage: 'url(image/lotti.jpg)' }}>&nbsp;</div>
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
          <div className="gridimg" style={{ backgroundImage: 'url("image/association.jpg")' }}>&nbsp;</div>
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
















