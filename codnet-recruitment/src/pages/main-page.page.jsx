import React from "react";
import { GlobalGrid, GlobalStyles } from "../styles/global.styles";

//COMPONENTS
import Header from "../components/header/header.component";
import Banner from "../components/banner/banner.component";
import BannerInfo from "../components/banner-info/banner-info.component";
import ChartContainer from "../components/chart-container/chart-container.component";
import Footer from "../components/footer/footer.component";
import { connect } from "react-redux";
import Spinner from '../components/spinner/spinner.component';

const MainPage = (props) => {
  const { loading } = props.cryptocurrency;

  return (
    <React.Fragment>
      <GlobalStyles />
      <GlobalGrid>
        <Header />
        {!loading ? (
          <React.Fragment>
            <Banner />
            <ChartContainer />
          </React.Fragment>
        ) : (
          <Spinner/>
        )}
        <Footer />
      </GlobalGrid>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  cryptocurrency: state.crypto,
});

export default connect(mapStateToProps)(MainPage);
