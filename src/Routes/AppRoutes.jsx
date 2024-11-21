import React, { useCallback } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Layout from '../Pages/AppLayout/Layout';
import { useEffect } from 'react';

import AnalyticsOverview from '../Pages/Analytics';
import Revenues from "../Pages/Analytics/Revenue";
import Transactions from "../Pages/Analytics/Transactions";
import Subscribers from "../Pages/Analytics/Subscribers";
import Trainers from '../Pages/Analytics/Trainers';
import Programs from '../Pages/Analytics/Programs';
import ExerciseLibrary from '../Pages/ExerciseLibrary';
import EditExerciseLibrary from '../Pages/ExerciseLibrary';
import TraineeManagement from '../Pages/TraineeManagement';
import Location from '../Pages/ListsManagement/Location';
import WorkoutType from '../Pages/ListsManagement/WorkoutType';
import TrainerManagement from '../Pages/TrainerManagement';
import ProgramPackageManagement from '../Pages/ProgramPackageManagement';
import PaymentMangement from '../Pages/PaymentMangement';
import Login from "../Pages/Authentication/Login"
import Signup from "../Pages/Authentication/Signup"
import CreateAccount from "../Pages/Authentication/CreateAccount"
import ForgotPassword from "../Pages/Authentication/ForgotPassword"
import ResetPassword from "../Pages/Authentication/ResetPassword"

const AppRoutes = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathSegments = location.pathname.split('/').slice(1);

  useEffect(() => {
    if (pathSegments.includes('') || pathSegments.length === 0) {
      navigate('/analytics/overview');
    }
    if (pathSegments.includes('analytics') && pathSegments.length === 1) {
      navigate('/analytics/overview');
    }
    if (pathSegments.includes('list-management') && pathSegments.length === 1) {
      navigate('/list-management/location');
    }
  }, [pathSegments])

  const WrapperContainer = useCallback((children) => (

    <Layout>
      {children}
    </Layout>

  ), []
  )

  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/create-account' element={<CreateAccount />} />
      <Route path='/forgot-password' element={<ForgotPassword />} />
      <Route path='/reset-password' element={<ResetPassword />} />
      <Route
        path='/analytics/overview'
        element={
          WrapperContainer(<AnalyticsOverview />)
        }
      />

      <Route path='/analytics/revenue' element={WrapperContainer(<Revenues />)} />
      <Route path='/analytics/transactions' element={WrapperContainer(<Transactions />)} />
      <Route path='/analytics/subscribers' element={WrapperContainer(<Subscribers />)} />
      <Route path='/analytics/trainers' element={WrapperContainer(<Trainers />)} />
      <Route path='/analytics/programs' element={WrapperContainer(<Programs />)} />


      <Route path='/payment-management' element={WrapperContainer(<PaymentMangement />)} />
      <Route path='/trainer-management' element={WrapperContainer(<TrainerManagement />)} />
      <Route path='/trainee-management' element={WrapperContainer(<TraineeManagement />)} />
      <Route path='/program-and-package-management' element={WrapperContainer(<ProgramPackageManagement />)} />
      <Route path='/exercise-library' element={WrapperContainer(<ExerciseLibrary />)} />
      <Route path='/exercise-library/edit/:exerciseUid' element={WrapperContainer(<EditExerciseLibrary />)} />


      <Route path='/list-management/location' element={WrapperContainer(<Location />)} />
      <Route path='/list-management/workout-type' element={WrapperContainer(<WorkoutType />)} />
    </Routes>

  );
}

export default AppRoutes;
