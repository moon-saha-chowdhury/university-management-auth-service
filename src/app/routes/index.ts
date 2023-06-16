import express from 'express';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.route';
import { UserRoutes } from '../modules/user/user.router';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users/',
    route: UserRoutes.router,
  },
  {
    path: '/academic-semesters/',
    route: AcademicSemesterRoutes.router,
  },
];

moduleRoutes.forEach(route => {
  router.use(route.path, route.route);
});
// router.use('/users/', UserRoutes.router);
// router.use('/academic-semesters/', AcademicSemesterRoutes.router);

export default router;
