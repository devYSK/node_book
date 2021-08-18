

//jest.mock('../models/user');
const User = require('./user');
const Sequelize = require('sequelize');
const config = require('../config/config.json')['test'];

const sequelize = new Sequelize(
    config.database, config.username, config.password, config,
)

const { addFollowing } = require('../controllers/user');


describe('User 모델', () => {
    test('static init 메서드 호출', () => {
        expect(User.init(sequelize)).toBe(User);
    });
    test('static associate 메서드 호출', () => {
        const db = {
            User: {
                hasMany: jest.fn(),
                belongsToMany: jest.fn(),
            },
            Post: {},
        };

        User.associate(db);
        expect(db.User.hasMany).toHaveBeenCalledWith(db.Post);
        expect(db.User.belongsToMany).toHaveBeenCalledTimes(2);
    });
});

//
// describe('addFollowing', () => {
//     const req = {
//         user: { id: 1},
//         params: { id: 2},
//     };
//
//     const res = {
//         status: jest.fn(() => res),
//         send: jest.fn(),
//     };
//
//     const next = jest.fn();
//
//
//     test('사용자를 찾아 팔로잉을 추가하고 success를 응답해야 함', async () => {
//
//         User.findOne.mockReturnValue(Promise.resolve({
//             addFollowing(id) {
//                 return Promise.resolve(true);
//             }
//         }));
//
//         await addFollowing(req, res, next);
//         expect(res.send).toBeCalledWith('success');
//     });
//
//     test('사용자를 못찾으면 res.stats(404).send(no user) 를 호출', async () => {
//
//         User.findOne.mockReturnValue(null);
//
//         await addFollowing(req, res, next);
//         expect(res.status).toBeCalledWith(404);
//         expect(res.send).toBeCalledWith('no user');
//     });
//
//     // test('DB에서 에러 발생하면 next(error)을 호출함', async () => {
//     //     const error = '테스트용 에러';
//     //
//     //     User.findOne.mockReturnValue(Promise.reject(error));
//     //
//     //     await addFollowing(req, res, next);
//     //     expect(next).toBeCalledWith(error);
//     // });
// });
//
//
