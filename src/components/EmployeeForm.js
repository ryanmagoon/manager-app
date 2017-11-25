import React from 'react'
import { View, Text, Picker } from 'react-native'
import { CardSection, Input } from './common'

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
}

const EmployeeForm = ({ name, phone, shift, employeeUpdate }) => (
  <View>
    <CardSection>
      <Input
        label="Name"
        placeholder="Jane"
        value={name}
        onChangeText={value => employeeUpdate({ prop: 'name', value })}
      />
    </CardSection>

    <CardSection>
      <Input
        label="Phone"
        placeholder="555-555-5555"
        value={phone}
        onChangeText={value => employeeUpdate({ prop: 'phone', value })}
      />
    </CardSection>

    <CardSection style={{ flexDirection: 'column' }}>
      <Text style={styles.pickerTextStyle}>Shift</Text>
      <Picker
        style={{ flex: 1 }}
        selectedValue={shift}
        onValueChange={value => employeeUpdate({ prop: 'shift', value })}
      >
        <Picker.Item label="Monday" value="Monday" />
        <Picker.Item label="Tuesday" value="Tuesday" />
        <Picker.Item label="Wednesday" value="Wednesday" />
        <Picker.Item label="Thursday" value="Thursday" />
        <Picker.Item label="Friday" value="Friday" />
        <Picker.Item label="Saturday" value="Saturday" />
        <Picker.Item label="Sunday" value="Sunday" />
      </Picker>
    </CardSection>
  </View>
)

export default EmployeeForm
