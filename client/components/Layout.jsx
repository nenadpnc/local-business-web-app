import React, { useContext } from 'react';
import Head from 'next/head';
import Context from './Context';
import Dropdown from './Dropdown';

const Layout = ({
  children,
  title = 'Business places info',
}) => {
  const { places, currentPlace, setCurrentPlace } = useContext(Context);
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="container">
        <header>
          <h2 className="title">{title}</h2>
        </header>
        <div className="dropdown">
          <Dropdown 
            options={places} 
            title="Select business place"
            selectedItem={currentPlace}
            onItemChange={(item) => setCurrentPlace(item)} />
        </div>
        <div className="content">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout;