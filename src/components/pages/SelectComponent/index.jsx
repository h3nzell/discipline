import { Select } from '@radix-ui/themes';

const SelectComponent = ({ options, placeholder }) => (
  <Select.Root defaultValue={options[0]}>
    <Select.Trigger radius='full' placeholder={placeholder} />
    <Select.Content>
      <Select.Group>
        {options.map((element) => (
          <Select.Item key={element} value={element.toLowerCase()}>
            {element}
          </Select.Item>
        ))}
      </Select.Group>
    </Select.Content>
  </Select.Root>
);

export default SelectComponent;
