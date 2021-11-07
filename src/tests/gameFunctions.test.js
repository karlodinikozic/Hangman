
const {smarterCalulateScore}  = require('../functions/gameFunctions')


describe('Testing “smarter” function for calculating the score', () => {
    
    it('score of the solution with fewer errors should always be higher than for the solution with more errors',()=>{
        let error_num_1 = 10
        let error_num_2 = 1
        let error_num_3 = 5
        let error_num_4 = 6
        // length  | unique | error | time
        let res_1 = smarterCalulateScore(10,6,error_num_1,2)
        let res_2 = smarterCalulateScore(6,4,error_num_2,3)
        let res_3 = smarterCalulateScore(12,59,error_num_3,2)
        let res_4 = smarterCalulateScore(4,20,error_num_4,0)

        
        let help_bool = res_2 > res_3
        help_bool = help_bool && res_3 > res_4
        help_bool = help_bool && res_4> res_1
        expect(help_bool).toBe(true);

        let error_num_5 = 10
        let res_5 = smarterCalulateScore(10,6,error_num_5,2)
        expect(res_1==res_5).toBeTruthy();
       

    })

    it('given the same number of errors, solutions with larger numbers of unique letters should be scored higher',()=>{
        let unique_num_1 = 10
        let unique_num_2 = 1
        let unique_num_3 = 5
        let unique_num_4 = 6

        const number_of_errors = 5

        // length  | unique | error | time
        let res_1 = smarterCalulateScore(5,unique_num_1,number_of_errors,5)

        let res_2 = smarterCalulateScore(10,unique_num_2,number_of_errors,3)
        let res_3 = smarterCalulateScore(2,unique_num_3,number_of_errors,10)
        let res_4 = smarterCalulateScore(1,unique_num_4,number_of_errors,2)


        let help_bool = res_1 > res_4
        help_bool = help_bool && res_4 > res_3
        help_bool = help_bool && res_3> res_2
        expect(help_bool).toBeTruthy();


        let unique_num_5 = 10           
        let res_5 = smarterCalulateScore(5,unique_num_5,number_of_errors,5)
        expect(res_1==res_5).toBeTruthy();
    })


    it('given the same number of errors and unique letters, longer solutions should be scored higher',()=>{

        let length_num_1 = 10
        let length_num_2 = 1
        let length_num_3 = 5
        let length_num_4 = 6

        const number_of_errors = 5
        const number_of_unique = 15

        // ( length  | unique | error | time )
        let res_1 = smarterCalulateScore(length_num_1,number_of_unique,number_of_errors,5)
        let res_2 = smarterCalulateScore(length_num_2,number_of_unique,number_of_errors,3)
        let res_3 = smarterCalulateScore(length_num_3,number_of_unique,number_of_errors,10)
        let res_4 = smarterCalulateScore(length_num_4,number_of_unique,number_of_errors,2)


        let help_bool = res_1 > res_4
        help_bool = help_bool && res_4 > res_3
        help_bool = help_bool && res_3> res_2
        expect(help_bool).toBeTruthy();


        let length_num_5 = 10
        let res_5 = smarterCalulateScore(length_num_5,number_of_unique,number_of_errors,5)
        expect(res_1==res_5).toBeTruthy();

    })

    it('given the same number of errors, unique letters, and quote length, faster solutions should be scored higher',()=>{
        let time_num_1 = 859
        let time_num_2 = 1203
        let time_num_3 = 5477
        let time_num_4 = 1023

        const number_of_errors = 5
        const number_of_unique = 115
        const number_of_length = 1132

        // ( length  | unique | error | time )
        let res_1 = smarterCalulateScore(number_of_length,number_of_unique,number_of_errors,time_num_1)
        let res_2 = smarterCalulateScore(number_of_length,number_of_unique,number_of_errors,time_num_2)
        let res_3 = smarterCalulateScore(number_of_length,number_of_unique,number_of_errors,time_num_3)
        let res_4 = smarterCalulateScore(number_of_length,number_of_unique,number_of_errors,time_num_4)


        let help_bool = res_1 > res_4
        help_bool = help_bool && res_4 > res_2
        help_bool = help_bool && res_2 > res_3
        expect(help_bool).toBeTruthy();

        let time_num_5 = 859
        let res_5 = smarterCalulateScore(number_of_length,number_of_unique,number_of_errors,time_num_5)
        expect(res_1==res_5).toBeTruthy();
    })


})
