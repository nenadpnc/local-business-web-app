import App from 'next/app';
import Router, { withRouter } from 'next/router';
import Context from '../components/Context';
import Layout from '../components/Layout';
import { getPlaces } from '../utils/dataAccess';
import '../../styles/app.scss';

class CustomApp extends App {
  constructor(props) {
    super(props);

    this.state = {
      places: [],
      currentPlace: {}
    };
  }

  componentDidMount() {
    getPlaces().then((res = []) => {
      this.setState({
        places: res,
        currentPlace: res.find((item) => item.id === this.props.router.query.id)
      })
    }).catch((err) => console.error(err));
  }

  setCurrentPlace(item) {
    this.setState({ currentPlace: item });
    Router.push( !item ? '/' : `/place?id=${item.id}`);
  }

  render() {
    const { Component, pageProps } = this.props;
    const { places, currentPlace } = this.state;
    return (
      <Context.Provider
        value={{
          places,
          currentPlace,
          setCurrentPlace: (item) => this.setCurrentPlace(item)
        }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Context.Provider>
    )
  }
}

export default withRouter(CustomApp);