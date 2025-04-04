const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app"); // Update path if needed

chai.use(chaiHttp);
const { expect } = chai;

describe("TravelMate App", () => {
  it("should return city data for Mumbai", (done) => {
    chai.request(app)
      .get("/travelmate?city=mumbai")
      .end((err, res) => {
        expect(res).to.have.status(200);
                expect(res).to.be.html;
                done();
      });
  });

    it("should return city data for Delhi", (done) => {
      chai.request(app)
        .get("/travelmate?city=Delhi")
        .end((err, res) => {
          expect(res).to.have.status(404);
                  expect(res).to.be.html;
                  done();
        });
    });


  it("should return an error for an invalid city Umatilla", (done) => {
    chai.request(app)
      .get("/travelmate?city=Umatilla")
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.text).to.include("No matching cities found. Please try a different search term.");
        done();
      });
  });
});
