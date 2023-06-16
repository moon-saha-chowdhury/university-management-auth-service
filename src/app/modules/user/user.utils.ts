import { User } from './user.model';

export const findLastUserId = async () => {
  const lastUser = await User.findOne({}, { id: 1, _id: 0 })
    .sort({
      createdAt: -1,
    })
    .lean(); //field filtering and .lean use kore amra akta pure javascript object return korchi
  return lastUser?.id;
};

export const generateUserId = async () => {
  const currentId = (await findLastUserId()) || (0).toString().padStart(5, '0');
  //increment by 1
  const incrementedId = (parseInt(currentId) + 1).toString().padStart(5, '0');
  return incrementedId;
};
