import {
  Alert,
  AlertIcon,
  Button,
  Checkbox,
  CloseButton,
  HStack,
  IconButton,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  PinInput,
  PinInputField,
  Radio,
  RadioGroup,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Select,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
  Switch,
  Tab,
  Table,
  TableContainer,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
  TagCloseButton,
  TagLabel,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tooltip,
  Tr,
  useColorMode,
  VStack,
} from '@chakra-ui/react';
import { HiOutlinePencil } from 'react-icons/hi';
import { FiAlertTriangle, FiCheck, FiInfo } from 'react-icons/fi';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import './App.css';
import { ReactSelect } from './components/ReactSelect';
import { ReactMultiDatePicker } from './components/ReactMultiDatePicker';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <div>
        <h1>text h1</h1>
        <h2>text h2</h2>
        <h3>text h3</h3>
        <Text color="text">default styles text</Text>
        <Text variant="subtitle">subtitle one text</Text>
        <hr />
        <Text variant="subtitle">primary buttons</Text>
        <Text>small</Text>
        <Button size="sm">Default</Button>
        <Button size="sm" disabled>
          Disabled
        </Button>
        <Text>medium</Text>
        <Button>Default</Button>
        <Text>large</Text>
        <Button size="lg">Default</Button>

        <Text variant="subtitle">secondary buttons</Text>
        <Text>small</Text>
        <Button variant="secondary" size="sm">
          Default
        </Button>
        <Button variant="secondary" disabled size="sm">
          Disabled
        </Button>
        <Text>medium</Text>
        <Button variant="secondary">Default</Button>
        <Text>large</Text>
        <Button variant="secondary" size="lg">
          Default
        </Button>

        <Text variant="subtitle">tertiary buttons</Text>
        <Text>small</Text>
        <Button variant="tertiary">Default</Button>
        <Button variant="tertiary" disabled>
          Disabled
        </Button>
        <hr />
        <Text variant="subtitle">icon buttons</Text>
        <IconButton icon={<HiOutlinePencil size={20} />} size="md" />
        <IconButton disabled icon={<HiOutlinePencil size={20} />} size="md" />
        <hr />
        <Text variant="subtitle">primary checkbox</Text>
        <Checkbox isChecked>Checkbox</Checkbox>
        <Checkbox isDisabled>Checkbox</Checkbox>
        <Checkbox isDisabled defaultChecked>
          Checkbox
        </Checkbox>

        <Text variant="subtitle">secondary checkbox</Text>
        <Checkbox variant="secondary" size="sm" isChecked>
          Checkbox
        </Checkbox>
        <Checkbox variant="secondary" size="sm" isDisabled>
          Checkbox
        </Checkbox>
        <Checkbox variant="secondary" size="sm" isDisabled defaultChecked>
          Checkbox
        </Checkbox>
        <hr />
        <Text variant="subtitle">primary radio</Text>
        <RadioGroup defaultValue="2">
          <Stack spacing={5} direction="row">
            <Radio value="1">Radio</Radio>
            <Radio value="2">Radio</Radio>
            <Radio value="3" isDisabled>
              Radio
            </Radio>
          </Stack>
        </RadioGroup>

        <Text variant="subtitle">secondary radio</Text>
        <RadioGroup defaultValue="2">
          <Stack spacing={5} direction="row">
            <Radio value="1" variant="secondary">
              Radio
            </Radio>
            <Radio value="2" variant="secondary">
              Radio
            </Radio>
            <Radio value="3" variant="secondary" isDisabled>
              Radio
            </Radio>
          </Stack>
        </RadioGroup>
        <hr />
        <Text variant="subtitle">primary switch</Text>
        <Stack align="center" direction="row">
          <Switch size="sm" />
          <Switch />
          <Switch size="lg" isChecked />
          <Switch size="lg" disabled />
        </Stack>
        <Text variant="subtitle">secondary switch</Text>
        <Stack align="center" direction="row">
          <Switch size="sm" variant="secondary" />
          <Switch variant="secondary" />
          <Switch size="lg" variant="secondary" isChecked />
          <Switch size="lg" variant="secondary" disabled />
        </Stack>
        <hr />
        <Text variant="subtitle">primary slider</Text>
        <Slider defaultValue={30}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        <Text variant="subtitle">secondary slider</Text>
        <Slider defaultValue={30} variant="secondary">
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        <hr />
        <Text variant="subtitle">primary range slider</Text>
        <RangeSlider defaultValue={[10, 30]}>
          <RangeSliderTrack>
            <RangeSliderFilledTrack />
          </RangeSliderTrack>
          <RangeSliderThumb index={0} />
          <RangeSliderThumb index={1} />
        </RangeSlider>
        <Text variant="subtitle">secondary range slider</Text>
        <RangeSlider defaultValue={[10, 30]} variant="secondary">
          <RangeSliderTrack>
            <RangeSliderFilledTrack />
          </RangeSliderTrack>
          <RangeSliderThumb index={0} />
          <RangeSliderThumb index={1} />
        </RangeSlider>
        <hr />
        <Text variant="subtitle">tags</Text>
        <HStack spacing={4}>
          <Tag>
            <TagLabel>Default</TagLabel>
          </Tag>
          <Tag>
            <TagLabel>Default</TagLabel>
            <TagCloseButton />
          </Tag>
          <Tag>
            <TagLabel>Default</TagLabel>
            <TagCloseButton isDisabled />
          </Tag>
        </HStack>
        <hr />
        <Text variant="subtitle">tabs</Text>
        <Tabs>
          <TabList>
            <Tab>One</Tab>
            <Tab>Two</Tab>
            <Tab>Three</Tab>
            <Tab isDisabled>Four</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
            <TabPanel>
              <p>four!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
        <hr />
        <Text variant="subtitle">inputs</Text>
        <Text>default</Text>
        <HStack>
          <Input placeholder="Placeholder" defaultValue="Default" />
          <Input
            placeholder="Placeholder"
            defaultValue="with Error"
            isInvalid
          />
          <Input isDisabled value="Disabled" />
        </HStack>
        <Text>pill-shaped</Text>
        <HStack>
          <Input
            variant="pill-shaped"
            placeholder="Placeholder"
            defaultValue="Default"
          />
          <Input
            variant="pill-shaped"
            placeholder="Placeholder"
            defaultValue="with Error"
            isInvalid
          />
          <Input variant="pill-shaped" isDisabled value="Disabled" />
        </HStack>
        <Text variant="subtitle">number input</Text>
        <Text>default</Text>
        <HStack>
          <NumberInput>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <NumberInput isInvalid>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <NumberInput isDisabled>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </HStack>
        <Text>pill-shaped</Text>
        <HStack>
          <NumberInput variant="pill-shaped">
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <NumberInput variant="pill-shaped" isInvalid>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <NumberInput variant="pill-shaped" isDisabled>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </HStack>
        <Text variant="subtitle">pin input</Text>
        <Text>default</Text>
        <HStack>
          <PinInput>
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
          <PinInput isInvalid>
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
          <PinInput isDisabled>
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
        </HStack>
        <Text>pill-shaped</Text>
        <HStack>
          <PinInput variant="pill-shaped">
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
          <PinInput variant="pill-shaped" isInvalid>
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
          <PinInput variant="pill-shaped" isDisabled>
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
        </HStack>
        <hr />
        <Text variant="subtitle">selects</Text>
        <Text>default</Text>
        <HStack>
          <Select placeholder="Select option">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <Select placeholder="Select option" isInvalid>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <Select placeholder="Select option" isDisabled>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </HStack>
        <Text>pill-shaped</Text>
        <HStack>
          <Select placeholder="Select option" variant="pill-shaped">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <Select placeholder="Select option" variant="pill-shaped" isInvalid>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <Select placeholder="Select option" variant="pill-shaped" isDisabled>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </HStack>
        <hr />
        <Text variant="subtitle">table</Text>
        <TableContainer>
          <Table variant="striped">
            <Thead>
              <Tr>
                <Th>Column 1</Th>
                <Th>Column 2</Th>
                <Th>Column 3</Th>
                <Th isNumeric>Column 4</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Cell text</Td>
                <Td>Cell text</Td>
                <Td>Cell text</Td>
                <Td isNumeric>25.4</Td>
              </Tr>
              <Tr>
                <Td>Cell text</Td>
                <Td>Cell text</Td>
                <Td>Cell text</Td>
                <Td isNumeric>30.48</Td>
              </Tr>
              <Tr>
                <Td>Cell text</Td>
                <Td>Cell text</Td>
                <Td>Cell text</Td>
                <Td isNumeric>0.91444</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        <hr />
        <Text variant="subtitle">alerts</Text>
        <VStack spacing={3}>
          <Alert status="info" colorScheme="neutral.600">
            <AlertIcon as={FiInfo} />
            Chakra is going live on August 30th. Get ready!
            <CloseButton
              alignSelf="flex-start"
              position="absolute"
              right={1}
              top={2}
            />
          </Alert>

          <Alert status="success" colorScheme="primary.400">
            <AlertIcon as={FiCheck} />
            Data uploaded to the server. Fire on!
            <CloseButton
              alignSelf="flex-start"
              position="absolute"
              right={1}
              top={2}
            />
          </Alert>

          <Alert status="error" colorScheme="secondary.500">
            <AlertIcon as={FiAlertTriangle} />
            There was an error processing your request
            <CloseButton
              alignSelf="flex-start"
              position="absolute"
              right={1}
              top={2}
            />
          </Alert>
        </VStack>
        <hr />
        <Text variant="subtitle">third-party component</Text>
        <Text>select (react-select)</Text>
        <HStack>
          <ReactSelect options={options} />
          <ReactSelect options={options} isDisabled />
        </HStack>
        <hr />
        <Text>date picker (react-multi-date-picker)</Text>
        <ReactMultiDatePicker range name="dates" label="Dates" />
      </div>
      <Tooltip
        label={
          colorMode === 'light' ? 'Change to dark mode' : 'Change to light mode'
        }
      >
        <IconButton
          pos="fixed"
          top={3}
          right={3}
          icon={colorMode === 'light' ? <BsFillMoonFill /> : <BsFillSunFill />}
          onClick={toggleColorMode}
        />
      </Tooltip>
    </>
  );
};

export default App;
