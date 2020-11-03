import React from 'react';
import Dropdown, { GetStyleFunction, Option } from 'react-dropdown-aria';
import ExampleSection from './ExampleSection';
import '../styles/CustomRender.scss';
import { OptionItemProps } from 'react-dropdown-aria/components/OptionItem';

const options: Option[] = [
  { value: 'Custom' },
  { value: 'Render' },
  { value: 'Function' },
  { value: 'Example' },
];

class CustomRender extends React.Component {
  state = {
    interest: undefined,
  };

  setInterest = (selectedOption: Option) => {
    this.setState({ interest: selectedOption.value });
  }

  renderOption = (props: OptionItemProps, getStyle: GetStyleFunction, index: number) => {
    const { option } = props;

    return (
      <span style={{ 'textAlign': index % 2 === 0 ? 'left' : 'right', width: '100%' }}>
        { option.value }
      </span>
    );
  }

  render() {
    const { interest } = this.state;

    return (
      <ExampleSection title="Custom Option Render Function" fileName="CustomRender.jsx" sectionId="custom_option_renderer">
        {(dropdownState) => (
          <Dropdown
            className="my-dropdown"
            ariaLabel="Custom Option Rendering Dropdown"
            options={options}
            optionItemRenderer={this.renderOption}
            value={interest}
            onChange={this.setInterest}
            width={400}
            {...dropdownState}
          />
        )}
      </ExampleSection>
    );
  }
}

export default CustomRender;