import { Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { blueButton } from "../../styles/motions/props";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "../../styles/layouts/HomePage.scss";

const HomePage = (): JSX.Element => {
  return (
    <div className="home-page page">
      <Box className="home-page__header" boxShadow="md" p="3">
        <Header></Header>
      </Box>
      <Box className="home-page__container">
        <Box className="home-page__title">
          <p>Evalue la madurez cultural de su empresa</p>
        </Box>
        <Link to="/questionary" className="home-page__link">
          <Button {...blueButton} className="home-page__button center">
            Iniciar evaluación
          </Button>
        </Link>
      </Box>
      <Box className="home-page__footer">
        <Footer></Footer>
      </Box>
    </div>
  );
};

export default HomePage;
