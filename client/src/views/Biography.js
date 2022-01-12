import bio1 from '../images/bio/bio1.JPG'
import bio2 from '../images/bio/bio2.JPG'
import bio3 from '../images/bio/bio3.jpg'
import bio4 from '../images/bio/bio4.jpg'
import BlogSidebar from '../components/BlogSidebar'
import {Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Biography = ( { posts } ) => {
  // const [bgImg, setBgImg] = useState(aubrey)
  
  // const listenScrollEvent = e => {
  //   if (window.scrollY > 500 && window.scrollY < 1000) {
  //     setBgImg(aubpiano)
  //   } else if(window.scrollY > 1000 && window.scrollY < 1500){
  //     setBgImg(aubrey)
  //   } else if(window.scrollY > 1500){
  //     setBgImg(aub)
  //   }}

  //   useEffect(() => {
  //     window.addEventListener('scroll', listenScrollEvent);
    
  //     return () =>
  //       window.removeEventListener('scroll', listenScrollEvent);
  //   }, []);
  return (
    <div className="" style={{   
      backgroundSize: '100%',
      margin: '15px',
     }}>
       <Row lg={9}>
         <Col>
       <div style={{ display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        // justifyContent: 'center',
      // backgroundSize: '100%',

        alignItems: 'center',
        backgroundColor: 'rgba(50, 0, 50, 0.8)',
        backgroundBlendMode: 'screen', borderRadius: '10px',
        marginTop: '50px'}} ><h1 style={{ fontSize: '4em', color: '#fff', textShadow: '0px 0px 4px #000', marginTop: '.6em' }}>Biography</h1>

        {/* <Row><Col style={{ overflowX: 'hidden'}} xs={4}><img src={apps} style={{  maxHeight: '150px' }} alt="aubery digital make up music guitar voice rock rap microphone"/></Col><Col xs={4}>
        <img src={aub} style={{  maxHeight: '150px' }} alt="aubery digital make up music guitar voice rock rap microphone"/></Col><Col xs={4}>
      <img src={aubpiano} style={{   maxHeight: '150px' }} alt="aubery digital make up music guitar voice rock rap microphone"/></Col></Row> */}
      <div width="100%" >
      <img src={bio1} className="border" style={{ maxHeight: '300px', objectFit: 'cover' }} />
      <img src={bio2} className="border" style={{ maxHeight: '300px', objectFit: 'cover' }} />
      <img src={bio3} className="border" style={{ maxHeight: '300px', objectFit: 'cover' }}/>
      <img src={bio4} className="border" style={{ maxHeight: '300px', objectFit: 'cover' }} />
      </div>

      <p className="pt-4 h4 mx-4" style={{ color: '#fff',   textShadow: '0px 0px 15px #fff', fontWeight: '500', overflow: 'scroll', overflowX: 'hidden' }}>
      ( she/ her )
      <br /><br /><p style={{ fontWeight: '300' }}>Born in a small midwestern town & raised by her very tough and loving mother. <br /><br />Aubrey always knew she was different but learned quickly that existing in society when you aren't like everybody else can be trying, at times, to say the least. Thankfully there was never a shortage of things of do. Whether it was listening to and/or playing music, skateboarding, or designing graphics and coding web sites on her computer. Things hit a rough patch in her senior year of high school. After a near-death car accident her perspective shifted quite a bit. <br /><br />By age 22 she was off to the city for good! She spent time living in Nebraska, Colorado, and Indiana, then finally made the 30 hour trek to move with all her belongings in her car to Las Vegas! Nearly five years later she still loves her surroundings and friends but as each day goes by she realizes more everyday that: this is it! It's now or never. Life is short. Believe in yourself before its too late. <br/><br />Thanks for being a part of my journey!</p> <p className="text-white" style={{ fontFamily: 'WindSong, cursive', textShadow: '2px 2px 5px #000', fontSize: '2.2em' }}>aubrey digital</p></p>
    </div>
    
    <div style={{ display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        // justifyContent: 'center',
      // backgroundSize: '100%',

        alignItems: 'center',
        backgroundColor: 'rgba(50, 0, 50, 0.8)',
        backgroundBlendMode: 'screen', borderRadius: '10px',
        marginTop: '50px'}} ><h1 style={{ fontSize: '3em', color: '#fff', textShadow: '0px 0px 4px #000', marginTop: '.6em' }}>Web Design/ Programming</h1><p className="pt-4 h4 px-3 mx-4" style={{ color: '#fff',   textShadow: '0px 0px 15px #fff', fontWeight: '300', overflow: 'scroll', overflowX: 'hidden' }}>
        Aubrey started designing web pages back in the late nineties! It was a different time! The internet hadn't taken over and become a staple of modern commerce and modern life, but it already had become a staple in her life! She had a domain, purchased-rebellion.org, which was a blog site with an ever changing layout! Back then iframes were cool and she mostly used Adobe Photoshop to design her layouts and map the links.<br /><br />She soon made friends, found new hobbies in skateboarding and playing guitar, and fell out of it for quite some time. Years later, after graduating from Mid-Plains Community College with her Associates of Applied Science with a focus in Graphic Design, she got a new computer and felt inspired to tackle the task of learning the new web! JavaScript was completely foreign as were many of the technologies she now frequently works with.<br /><br />She got her certification from the College of Southern Nevada last May for Front-End Web Development, where she learned about JavaScript, jQuery, Unit Testing, Object Oriented Programming, and finally, the very popular JavaScript framework, React!<br /><br />The learning next stops, though! She now spends nearly ever spare moment she has learning JavaScript algorithms, and building projects with HTML, CSS, and JavaScript. She's also learning back end development with MySQL and php, as well as Python and mongoDB!</p><br /><Link to='/dev'>Check out her work!</Link></div>
        <div style={{ display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        // justifyContent: 'center',
      // backgroundSize: '100%',

        alignItems: 'center',
        backgroundColor: 'rgba(50, 0, 50, 0.8)',
        backgroundBlendMode: 'screen', borderRadius: '10px',
        marginTop: '50px'}} ><h1 style={{ fontSize: '4em', color: '#fff', textShadow: '0px 0px 4px #000', marginTop: '.6em' }}>Music</h1><p className="pt-4 h4 px-3 mx-4" style={{ color: '#fff',   textShadow: '0px 0px 15px #fff', fontWeight: '300', overflow: 'scroll', overflowX: 'hidden' }}>
        Aubrey has been in love with music since birth! Her mother raised her with the sounds of Motown, disco, and a whole lot of Beatles! She started playing the drums at the age of 9.  </p></div>
        </Col>
        <Col lg={3}><BlogSidebar posts={posts}/></Col>
        </Row>
        </div>
  )
}

export default Biography
