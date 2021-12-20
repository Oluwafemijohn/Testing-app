import { Formik } from "formik";
import React from "react";
import { Button, TextInput, View, Text, Pressable } from "react-native";
import * as Yup from "yup";
import AppTextInput from "./AppTextInput";

const validationSchema = Yup.object().shape({
  phoneNumber: Yup.number().required().min(11).label("PhoneNumber"),
  // price: Yup.number().required().min(1).max(10000).label("Price"),
  // description: Yup.string().label("Description"),
  // category: Yup.object().required().nullable().label("Category"),
});

function TestFormik() {
  return (
    <View>
      <Formik
        initialValues={{ phoneNumber: "" }}
        onSubmit={(values) => {
            console.log(values);
        }}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <>
            <TextInput
              onChangeText={handleChange("phoneNumber")}
              onBlur={handleBlur("phoneNumber")}
              value={values.phoneNumber}
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              placeholder="Phone Number"
            />
            {errors.phoneNumber && <Text>{errors.phoneNumber}</Text>}
            <AppTextInput value={values.phoneNumber } 
            onChangeText={ handleChange("phoneNumber")} 
             errors={errors.phoneNumber}   
             onBlur={handleBlur("phoneNumber")} 
             placeholder="Phone Number"  
             style={{height: 40, borderColor: 'gray', borderWidth: 1}}      
            />

            <Pressable onPress={handleSubmit}>
                <Text>Submit</Text>
            </Pressable>
          </>
        )}
      </Formik>
    </View>
  );
}

export default TestFormik;
