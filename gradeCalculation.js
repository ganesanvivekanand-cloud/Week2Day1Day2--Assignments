

let score=100;


function studentsScore(score){


    switch(true){


        case score <35:
            console.log('Fail Grade')
            break;

        case score >=35 && score <50:
            console.log('Pass Grade')
            break;

         case score >= 50 && score <70:
            console.log('Average Grade')
            break;

        case score >=70 && score <100:
            console.log('Good Grade')
            break;
        case score===100:
            console.log('Excellent Grade')
            break;

        default:
            console.log('Invalid Grade')


    }



}


studentsScore(score)

