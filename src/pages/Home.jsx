import { useEffect, useState } from 'react';
import Sidebar from '../reusable/Sidebar';
import { Link } from 'react-router-dom';
import '../css/home.css';
import '../css/hasSideBar.css';
import { formalMe, togaMe } from '../assets/assets';

function Home() {
  const images = [formalMe, togaMe];
  const text = [
    'I am a Web Developer',
    'HTML',
    'CSS',
    'JAVASCRIPT',
    'REACT JS',
    'NODE JS'
  ];

  const [isCollapse, setIsCollapse] = useState(false);
  const [current, setCurrent] = useState(0);
  const [typing, setTyping] = useState('');
  const [index, setIndex] = useState(0);
  const [charSet, setCharSet] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [theme, setTheme] = useState(() => {
    const saveTheme = localStorage.getItem('theme');
    return saveTheme === 'dark' ? 'dark':'light';
  });

   useEffect(() => {
      document.body.className = theme;
      localStorage.setItem('theme', theme);
    }, [theme]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const handleTyping = () => {
      const currentText = text[index];
      let updatedCharSet = isDeleting ? charSet - 1 : charSet + 1;
      let updatedTyping = currentText.substring(0, updatedCharSet);

      setTyping(updatedTyping);
      setCharSet(updatedCharSet);

      if (!isDeleting && updatedCharSet === currentText.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && updatedCharSet === 0) {
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % text.length);
      }
    };

    const timeout = setTimeout(handleTyping, isDeleting ? 100 : 150);
    return () => clearTimeout(timeout);
  }, [charSet, isDeleting, index, text]);

  return (
    <>
      <Sidebar isCollapse={isCollapse} setIsCollapse={setIsCollapse} />
      <section className={`${isCollapse ? 'collapses' : 'container'}`}>
        <div className="home-info">
          <div className="text">
            <div className="home-name">
              Hi I'am <span className="myName">Rei Andrew C. Bairata</span>
            </div>
            <div className="home-desc">
              Welcome to my portfolio website! Explore more about me and check
              out the projects I’ve made. You can also contact me using the
              details on the Contact page. Enjoy!
            </div>
            <div className="home-typing">{typing}</div>
          </div>
          <div className="home-btn">
            <span>Click here to learn more about me:</span>
            <Link to={'/about'} className='about-btn'>About me</Link>
          </div>
        </div>
        <div className="home-img">
          <div className="my-img">
            {images.map((img, idx) => (
              <img
                src={img}
                key={idx}
                alt=""
                style={{ display: idx === current ? 'block' : 'none' }}
                height={500}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
