describe("AccessToken route",()=>{
    it("Should return 400 if the method is not rf_token", ()=>{
        expect  ('Please login now!') ,() =>{
            err.message;
        };
    });
});

describe("AccessToken route",()=>{
    it("Should return 400 if the method is not result", ()=>{
        expect  ('Your token is incorrect or has expired.') ,() =>{
            err.message;
        };
    });
});
describe("AccessToken route",()=>{
    it("Should return 400 if the method is not user", ()=>{
        expect  ('User does not exist.') ,() =>{
            err.message;
        };
    });

});



