import { RequestHandler } from 'express';
import { UserService } from './user.services';

const createdUser: RequestHandler = async (req, res, next) => {
  try {
    const { users } = req.body;
    const result = await UserService.createUser(users);
    res.status(200).json({
      success: true,
      message: 'User created successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const UserController = {
  createdUser,
};
