@Users-Get_Service
Feature: Users Get Service
    Scenario: Users Get
        Given Request To "http://localhost:3000/"
        When Recieves Response
        Then Recieved Response 200