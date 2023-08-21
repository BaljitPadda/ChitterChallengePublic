import chai from "chai";
import { expect } from "chai";
import app from "../app.js";
import userMockData from "./testData/usersMockData.js";
import User from '../src/user.model.js';
import chaiHttp from "chai-http";

const mockDataArray = userMockData.users;
chai.use(chaiHttp);

describe("registerUser router tests", () => {

    beforeEach(async () => {
        await User.deleteMany();
        await User.insertMany(mockDataArray);
    })

    it("should handle a post request made to '/signup", async () => {

        //arrange
        //act
        const res = await chai.request(app).post('/signup').send({
            name: "fake",
            username: "fake2023",
            email: "fake@hotmail.com",
            password: "password"
        })
        //assert
        expect(res).to.have.status(200);
    })

    it("should save a new user's details if they have signed up", async () => {

        //arrange
        //act
        const res = await chai.request(app).post('/signup').send({
            name: "fake",
            username: "fake2023",
            email: "fake@hotmail.com",
            password: "password"
        })

        //assert
        expect(res.text).to.include('You have registered successfully!');


    })

    it("should show an error message if someone tries to register with same email or username", async () => {
        //arrange
        //act
        const res = await chai.request(app).post('/signup').send({
            "name": "Spidey",
            "username": "webdev2023",
            "email": "spidey@fake.com",
            "password": "web"
        })

        //assert
        expect(res).to.have.status(400);
        expect(res.text).to.include('Someone already has this username or email.');
    })

})