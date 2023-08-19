import express from 'express';
import { expect, use } from 'chai';
import chai from 'chai';
import chaiHttp from 'chai-http';
import User from '../src/user.model.js';
import app from '../app.js';

chai.use(chaiHttp);

describe("getUser router tests", () => {
    it("should handle a request made to the login page", async () => {

        //arrange
        const username = "John2000";
        //act
        const res = await chai.request(app).post('/login/John2000').send();

        //assert
        expect(res).to.have.status(200);

    })

    it("should get a user from the username provided", async () => {

        //arrange
        const fakeUser = {
            "name": "Spidey",
            "username": "WebDev2023",
            "email": "spidey@fake.com",
            "password": "web"
        }

        //act
        const res = await chai.request(app).post('/login/WebDev2023').send(fakeUser);

        //assert
        expect(res.text).to.include("Welcome Spidey!");


    })

    it("should display an error message if password is incorrect", async () => {

        //arrange
        const fakeUser = {
            "name": "Spidey",
            "username": "WebDev2023",
            "email": "spidey@fake.com",
            "password": "BADPASSWORD"
        }

        //act
        const res = await chai.request(app).post('/login/WebDev2023').send(fakeUser);

        //assert
        expect(res.text).to.include("Incorrect password");
    }),


        it("should display an error message if the username provided doesn't exist", async () => {

            //arrange
            const fakeUser = {
                "name": "Spidey",
                "username": "BADUSERNAME",
                "email": "spidey@fake.com",
                "password": "web"
            }

            //act
            const res = await chai.request(app).post('/login/BADUSERNAME').send(fakeUser);

            //assert
            expect(res.text).to.include("Hmm that user doesn't exist!");
        })


});