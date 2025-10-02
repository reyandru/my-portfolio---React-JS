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
  const [isDeleting, setIsDeleting] = useState(false);

  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' ? 'dark' : 'light';
  });

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const currentText = text[index];
    const isComplete = !isDeleting && typing === currentText;
    const isEmpty = isDeleting && typing === '';

    const timeout = setTimeout(() => {
      if (isComplete) {
        setIsDeleting(true);
      } else if (isEmpty) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % text.length);
      } else {
        const updated = isDeleting
          ? currentText.substring(0, typing.length - 1)
          : currentText.substring(0, typing.length + 1);
        setTyping(updated);
      }
    }, isDeleting ? 100 : 150);

    return () => clearTimeout(timeout);
  }, [typing, isDeleting, index, text]);

  return (
    <>
      <Sidebar isCollapse={isCollapse} setIsCollapse={setIsCollapse} />
      <section className={`${isCollapse ? 'collapses' : 'container'}`}>
        <div className="home-info">
          <div className="text">
            <div className="home-name" style={{ color: theme === 'dark' ? 'white' : 'black' }}>
              Hi I'm <span className="myName" style={{ color: theme === 'dark' ? 'orange' : 'green' }}>Rei Andrew C. Bairata</span>
              
            </div>
            <div className="home-desc">
              Welcome to my portfolio website! Explore more about me and check
              out the projects I’ve made. You can also contact me using the
              details on the Contact page. Enjoy!
            </div>
            <div className="home-typing" style={{ color: theme === 'dark' ? 'orange' : 'green' }}>{typing}</div>
          </div>
          <div className="home-btn">
            <span>Click here to learn more about me:</span>
            <Link to={'/about'} className="about-btn">About me</Link>
          </div>
        </div>
        <div className="home-img">
          <div className="my-img" style={{borderColor : theme === 'dark' ? 'rgb(65, 235, 31)':'black'}}>
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
