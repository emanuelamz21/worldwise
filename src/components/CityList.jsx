import Spinner from "./Spinner";
import CityItem from "./CityItem";
import Message from "./Message";
import styles from "./CityList.module.css";
import PropTypes from "prop-types";

CityList.propTypes = {
  cities: PropTypes.array,
  isLoading: PropTypes.bool,
};

function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length) return <Message />;

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
