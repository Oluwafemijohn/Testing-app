// import React, { useState } from 'react';
// export const MyForm = props => {
//     const { handleSubmit, values, setFieldValue } = props;
//     const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  
//     const showDatePicker = () => {
//       setDatePickerVisibility(true);
//     };
  
//     const hideDatePicker = () => {
//       setDatePickerVisibility(false);
//     };
  
//     const handleConfirm = (date: any) => {
//       setFieldValue('myDate', moment(date).format('YYYY-MM-DD'))
//       hideDatePicker();
//     };
  
//     return (
//       <View>
//         <Text onPress={showDatePicker}>{moment(values.myDate).format('YYYY-MM-DD')}</Text>
//         <DateTimePickerModal
//           isVisible={isDatePickerVisible}
//           mode="date"
//           onConfirm={handleConfirm}
//           onCancel={hideDatePicker}
//           date={moment(values.myDate).toDate()}
//         />
//         <Button title="Submit" onPress={handleSubmit} />
//       </View>
//     );
//   }