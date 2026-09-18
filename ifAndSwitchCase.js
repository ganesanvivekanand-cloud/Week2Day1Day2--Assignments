

const browserName='chrome'
const testType='frrbb'

function launchBrowser(browserName){


    if(browserName==='chrome'){


        console.log('Chrome Browser for launchBrowser function')
    }
    else{

        console.log('Unsupported Browser')
    }

}

function runTests(testType){


    switch (testType){


        case 'smoke':
            console.log('Smoke Testing')
            break;

        case 'regression':
            console.log('Regression Testing')
            break;

        case 'sanity':
            console.log('Functional Testing')
            break;

        default:
            console.log('Smoke')

}
}

launchBrowser(browserName)
runTests(testType)


