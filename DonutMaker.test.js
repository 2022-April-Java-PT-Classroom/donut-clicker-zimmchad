import DonutMaker from "./DonutMaker";

describe ("DonutMaker", () => {

    test ("should be able to add a donut and retrieve the total count", () => {
        //Arrange
        const underTest = new DonutMaker(0);
        //Act
        underTest.addDonut();
        //Assert
        expect (underTest.numDonuts).toEqual(1);


    })

    test ("should be able to add an autoclicker with 100 donuts", () => {
        //Arrange
        const underTest = new DonutMaker(100, 0);
        //Act
        underTest.addAutoclicker();
        //Assert
        expect (underTest.numDonuts).toEqual(0);
        expect (underTest.numAutoclickers).toEqual(1);


    })

    test ("should not be able to purchase an auto clicker with 99 donuts"), () => {
        const underTest = new DonutMaker(99, 0);
        underTest.addAutoclicker();
        expect (underTest.numDonuts).toEqual(99);
        expect (underTest.addAutoclickers).toEqual(0);
    }
    
    test ("should be able to puchas a multiplier with 10 donuts"), () => {
        const underTest = new DonutMaker(10, 0);
        underTest.addDonutmultiplier();
        expect (underTest.numDonuts).toEqual(0);
        expect (underTest.addDonutmultiplier).toEqual(1);
    
    }

    test ("should not be able to purchase a multiplier with 9 donuts"), () => {
        const underTest = new DonutMaker(9, 0);
        underTest.addDonutmultiplier();
        expect (underTest.numDonuts).toEqual(9);
        expect (underTest.addDonutmultiplier).toEqual(0);

    }

    test ("should make additional auto clickers cost 10% more donuts each time"), () => {
        const underTest = new DonutMaker(110, 1);
        underTest.addAutoclickers();
        expect (underTest.numDonuts).toEqual(0);
        expect (underTest.numAutoclickers).toEqual(2);
    }
}) 