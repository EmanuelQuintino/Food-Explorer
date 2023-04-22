import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";

export const authRoutes =  [
  {path: '/', element: <SignIn/>},
  {path: '/signup', element: <SignUp/>}
];