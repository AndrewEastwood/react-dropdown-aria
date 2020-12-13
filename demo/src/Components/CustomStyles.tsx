import React from 'react';
import ExampleSection from './ExampleSection';
import Dropdown, { Option, OptionGroup } from 'react-dropdown-aria';
import styles from '../styles/CustomStyles';

const airOptions: Option[] = [
  { value: 'Helicopter', iconClass: 'fas fa-helicopter' },
  { value: 'Plane', iconClass: 'fas fa-plane' },
  { value: 'Rocket', iconClass: 'fas fa-rocket' },
];

const landOptions: Option[] = [
  { value: 'Train', iconClass: 'fas fa-train' },
  { value: 'Bus', iconClass: 'fas fa-bus' },
  { value: 'Car', iconClass: 'fas fa-car' },
  { value: 'Ship', iconClass: 'fas fa-ship' },
  { value: 'Bike', iconClass: 'fas fa-bicycle' },
  { value: 'Motorcycle', iconClass: 'fas fa-motorcycle' },
];

const options: OptionGroup[] = [
  { label: 'Air', groupOptions: airOptions },
  { label: 'Land', groupOptions: landOptions },
];

class CustomStyles extends React.Component {
  state = {
    interest: undefined,
  };

  setInterest = (selectedOption: Option) => {
    this.setState({ interest: selectedOption.value });
  }

  render() {
    const { interest } = this.state;

    return (
      <ExampleSection title="Custom Styling" fileName="CustomStyles.jsx" sectionId="custom_styles">
        {(dropdownState) => (
          <Dropdown
            {...dropdownState}
            placeholder="Transportation of Choice?"
            ariaLabel="Custom styled Dropdown"
            options={options}
            value={interest}
            onChange={this.setInterest}
            width={400}
            maxContentHeight={150}
            theme={styles}
            pageKeyTraverseSize={3}
          />
        )}
      </ExampleSection>
    );
  }
}

export default CustomStyles;
