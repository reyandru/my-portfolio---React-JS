import { useState } from 'react';
import Sidebar from '../reusable/Sidebar';
import '../css/home.css';
import '../css/hasSideBar.css';

function Home() {
  const [isCollapse, setIsCollapse] = useState(false);

  return (
    <>
      <Sidebar isCollapse={isCollapse} setIsCollapse={setIsCollapse} />
      <section className={`${isCollapse ? 'collapse' : 'container'}`}>
      </section>
    </>
  );
}

export default Home;
