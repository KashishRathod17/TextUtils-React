//practice file
import PropTypes from 'prop-types';

export default function Greeting({name}) {
  return <h1>Hello, {name}!</h1>;
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired, // Ensures 'name' is a string and required
};
