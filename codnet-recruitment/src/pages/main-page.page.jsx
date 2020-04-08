import React, { useState } from "react";
import { GlobalGrid, GlobalStyles } from "../styles/global.styles";

//COMPONENTS
import Header from "../components/header/header.component";
import Banner from "../components/banner/banner.component";
import ChartContainer from "../components/chart-container/chart-container.component";
import Footer from "../components/footer/footer.component";
import { connect } from "react-redux";
import Spinner from "../components/spinner/spinner.component";
import Modal from "../components/modal/modal.component";

const MainPage = (props) => {
  const [openModal, setOpenModal] = useState(false);
  const { loading, errorMessage } = props.cryptocurrency;

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  console.log("errorMessage: ", errorMessage);

  return (
    <React.Fragment>
      <GlobalStyles />
      <GlobalGrid>
        <Header />
        {!loading && errorMessage === undefined ? (
          <React.Fragment>
            <Banner />
            <ChartContainer />
            <Footer />
          </React.Fragment>
        ) : !loading && errorMessage !== undefined ? (
          <Modal
            handleOpen={handleOpenModal}
            h2={"Something went wrong :("}
            p={"Try again later"}
          />
        ) : (
          <Spinner />
        )}
      </GlobalGrid>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  cryptocurrency: state.crypto,
});

export default connect(mapStateToProps)(MainPage);
