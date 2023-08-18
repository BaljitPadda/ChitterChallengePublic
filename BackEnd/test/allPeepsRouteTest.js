import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import app from "../app.js";
import Peep from "../src/peep.model.js";
import mockData from "./testData/peepsMockData.js";

const mockDataArray = mockData.peeps;

chai.use(chaiHttp);

describe('allPeeps router tests', () => {

    beforeEach(async () => {
        await Peep.deleteMany();
        await Peep.insertMany(mockDataArray);
    })

    it("should handle a get request to '/peeps' ", async () => {

        //arrange
        //act
        const res = await chai.request(app).get('/peeps').send();

        //assert
        expect(res).to.have.status(200);
    })

    it("should return all the peeps as an array", async () => {

        //arrange
        //act
        const res = await chai.request(app).get('/peeps').send();

        //assert
        expect(res.body).to.be.an(`array`);
        expect(res.body.length).to.be.equal(mockDataArray.length);
    })

    it("should sort all peeps by newest first", async () => {
        //arrange
        //act
        const res = await chai.request(app).get('/peeps').send();

        //assert
        expect(res.body[0].time).to.include(["2023-08-12T08:00:00.000Z"]);
        expect(res.body[1].time).to.include(["2000-01-01T08:00:00.000Z"]);
        expect(res.body[2].time).to.include(["1970-12-31T06:00:00.000Z"]);

    });



})


