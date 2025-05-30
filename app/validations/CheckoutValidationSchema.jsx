import * as Yup from "yup";

export const CheckoutValidationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  address: Yup.string().required("Address is required"),
  mobile: Yup.string().required("Mobile is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  city: Yup.string().required("City is required"),
  comment: Yup.string(),
  paymentMethod: Yup.string().required("Payment Method is required"),
  deliveryMethod: Yup.string().required("Delivery Method is required"),
});
