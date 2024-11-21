import * as Yup from "yup";

export const LoginSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export const EmailValidationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});


export const ResetPasswordSchema = Yup.object({
  password1: Yup.string().required("Password is required"),
  password2: Yup.string()
    .required("Password is required")
    .oneOf([Yup.ref("password1"), null], "Passwords must match"),
});

export const AccountCreationSchema = Yup.object({
  first_name: Yup.string().required("Password is required"),
  last_name: Yup.string().required("Password is required"),
  password: Yup.string().required("Password is required"),
  date_of_birth: Yup.date()
    .required("Date of Birth is required")
    // .test("is-over-14", "Not eligible", (value) => {
    //   if (!value) return false;
    //   const currentDate = new Date();
    //   const birthDate = new Date(value);
    //   const age = currentDate.getFullYear() - birthDate.getFullYear();
    //   const isOver14 =
    //     age > 14 ||
    //     (age === 14 && currentDate.getMonth() > birthDate.getMonth());
    //   return isOver14;
    // }),
});

export const TrainerAccountDetailsSchema = Yup.object({
  qualifications: Yup.string().required("Qualifications is required"),
  experience: Yup.date().required("Experience is required"),
  location: Yup.string().required("Location is required"),
  instagram: Yup.string(),
  tiktok: Yup.string(),
  youtube: Yup.string(),
  about: Yup.string().required("This Field is required"),
});

export const newProgramDetails = Yup.object({
  programName: Yup.string().required("Program Name is required"),
  programDescription: Yup.string(),
  trainingType: Yup.string().required("Training Type is required"),
  difficultyLevel: Yup.string().required("Difficulty Level is required"),
  numberOfWeeks: Yup.string().required("Number of weeks is required"),
  language: Yup.string().required("language is required"),
  thumbnailImageSquare: Yup.mixed().required("image is required"),
  thumbnailImageRectangular: Yup.mixed().required("image is required"),
  thumbnailVideo: Yup.mixed().required("trailer video is required"),
});