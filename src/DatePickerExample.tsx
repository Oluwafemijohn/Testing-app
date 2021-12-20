import React, { useState } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

export default function DatePickerExample() {
  return (
    <Formik initialValues={{ myDate: moment().format('YYYY-MM-DD') }} onSubmit={values => console.log(values)}>
      {({ handleSubmit, values, setFieldValue }) => (
        <MyForm values={values} setFieldValue={setFieldValue} handleSubmit={handleSubmit} />
      )}
    </Formik>
  );
}

 const MyForm = (props: any ) => {
  const { handleSubmit, values, setFieldValue } = props;
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: moment.MomentInput) => {
    setFieldValue('myDate', moment(date).format('YYYY-MM-DD'))
    hideDatePicker();
  };

  return (
    <View style={styles.container} >
      <Text onPress={showDatePicker}>{moment(values.myDate).format('YYYY-MM-DD')}</Text>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        date={moment(values.myDate).toDate()}
      />
      
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#F5FCFF',
    },

})