import Customer from "./customer";
import Address from "./address";

describe("Customer unit tests", () => {

    it("should throw error when id is empty", () => {

        expect(() => {
            let customer = new Customer("", "Murillo");
        }).toThrowError("Id is required");
    });


    it("should throw error when name is empty", () => {
        expect(() => {
            let customer = new Customer("123", "");
        }).toThrowError("Name is required");
    });

    it("should change name", () => {
        // Arrange
        let customer = new Customer("123", "Murillo");
        // Act
        customer.changeName("Customer B");
        // Assert
        expect(customer.name).toBe("Customer B");
    });


    it("should activate customer", () => {
        // Arrange
        const customer = new Customer("123", "Customer A");
        customer.Address = new Address("Street A", 123, "123-12345", "City AState A", "State A");
        // Act
        customer.activate();
        // Assert
        expect(customer.isActive).toBe(true);
    });

    it("should deactivate customer", () => {
        // Arrange
        const customer = new Customer("123", "Customer A");

        // Act
        customer.deactivate();
        // Assert
        expect(customer.isActive).toBe(false);
    });

    it("should throw an error when address is undefined and a customer is activated", () => {

        expect(() => {
            // Arrange
            const customer = new Customer("123", "Customer A");
            // Act
            customer.activate();
            // Assert
        }).toThrowError("Address is required to activate a customer");
    });

    it("should add reward points", () => {
        const customer = new Customer("123", "Customer A");
        expect(customer.rewardPoints).toBe(0);
        customer.addRewardPoints(100);
        expect(customer.rewardPoints).toBe(100);
        customer.addRewardPoints(100);
        expect(customer.rewardPoints).toBe(200);
    });

});