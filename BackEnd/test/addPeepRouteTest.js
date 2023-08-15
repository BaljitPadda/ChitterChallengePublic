import chai from "chai";
import { expect } from "chai";
import chaiHttp from "chai-http";
import app from "../app.js";
import Peep from "../src/peep.model.js";
import mockData from "./testData/peepsMockData.js";

const mockDataArray = mockData.peeps;
chai.use(chaiHttp);

describe("addPeep router tests", () => {

    it("should handle a post request made to '/addPeep' ", async () => {
        //arrange
        //act

        const res = await chai.request(app).post('/addPeep').send({
            "userID": "333",
            "message": "This is a fake peep peeps!"
        });

        //assert
        expect(res).to.have.status(200);
    })

    it("should save a peep to the database", async () => {
        //arrange
        //act
        const res = await chai.request(app).post('/addPeep').send({
            "userID": "333",
            "message": "This is a PRETEND peep!"
        });

        //assert
        expect(res.text).to.include("Peep added successfully!")


    })

    it("should display an error message if a peep is not saved to the database", async () => {
        //arrange
        //act
        const res = await chai.request(app).post('/addPeep').send({
            "fakeField": "333",
            "thisWillError": "This is a PRETEND peep!"
        });

        //assert
        expect(res).to.have.status(400);
        expect(res.text).to.include("Oops, could not add your peep! A peep needs a userID and a message!")


    })
})
