import React,{useEffect} from 'react';
import { StyleSheet } from 'react-native';
import { IndexPath, Layout, Select, SelectItem} from '@ui-kitten/components';

const Dropdown = (props)=>{
    const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));

    const displayValue = props.data[selectedIndex.row];
    
    const renderOption = (item) => (
      <SelectItem key={item} title={item} onSelect={props.onSelect(displayValue)}/>
    );
    
    return (
      <Layout style={styles.container} level='1'>
        <Select
        style={styles.select}
        value={displayValue}
        selectedIndex={selectedIndex}
        onSelect={index => setSelectedIndex(index)}>
        {props.data.map(renderOption)}
      </Select>
      </Layout>
    );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  select: {
    flex: 1,
    margin: 2,
  },
});

export default Dropdown;
