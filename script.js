

const button = document.getElementById('convert-button')
const selectOne = document.getElementById('current-select-one')
const selectTwo = document.getElementById('currency-select-two')


const convertValues = async () => {
    const inputSelectOne = document.getElementById('input-select-one').value
    const currencyNameOne = document.getElementById('currency-name-one')
    const currencyNameTwo = document.getElementById('currency-name-Two')
    const currencyValueTextOne = document.getElementById('currency-value-text-one')
    const currencyValueTextTwo = document.getElementById('currency-value-text-two')

    const data = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL').then(response => response.json())
    console.log(data)


    const dolar = (Number(data.USDBRL.low) + Number(data.USDBRL.high)) / 2 
    const euro = (Number(data.EURBRL.low) + Number(data.EURBRL.high)) / 2  
    const bitcoin = (Number(data.BTCBRL.low) + Number(data.BTCBRL.high)) / 2



    realToCurrencys() 
    dolarToCurrencys() 
    euroToCurrencys() 
    equalCurrencys() 


    function formatCurrencyToReal(inputSelectOne) {
        const money = new Intl.NumberFormat('pt-BR',
            { style: 'currency', currency: 'BRL' }
        ).format(inputSelectOne)
        return money

    }

    function formatCurrencyToDolar(inputSelectOne) {
        const money = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(inputSelectOne)
        return money
    }

    function formatCurrencyToEuro(inputSelectOne) {
        const money = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }
        ).format(inputSelectOne)
        return money
    }

    function formatCurrencyToBitcoin(inputSelectOne) {
        const money = new Intl.NumberFormat('BTC',
            { style: 'currency', currency: 'BTC' }
        ).format(inputSelectOne)

        return money
    }


    function equalCurrencys() {
        if (selectOne.value === 'real' && selectTwo.value === 'real') {

            currencyValueTextOne.innerHTML = formatCurrencyToReal(inputSelectOne)
            currencyValueTextTwo.innerHTML = formatCurrencyToReal(inputSelectOne)
        }

        if (selectOne.value === 'dolar' && selectTwo.value === 'dolar') {
            currencyValueTextOne.innerHTML = formatCurrencyToDolar(inputSelectOne)
            currencyValueTextTwo.innerHTML = formatCurrencyToDolar(inputSelectOne)
        }

        if (selectOne.value === 'euro' && selectTwo.value === 'euro') {
            currencyValueTextOne.innerHTML = formatCurrencyToEuro(inputSelectOne)
            currencyValueTextTwo.innerHTML = formatCurrencyToEuro(inputSelectOne)
        }

        if (selectOne.value === 'bitcoin' && selectTwo.value === 'bitcoin') {
            currencyValueTextOne.innerHTML = formatCurrencyToBitcoin(inputSelectOne)
            currencyValueTextTwo.innerHTML = formatCurrencyToBitcoin(inputSelectOne)
        }

    } 


    function realToCurrencys() {
        if (selectOne.value === 'real' && selectTwo.value === 'dolar') {
            currencyValueTextOne.innerHTML = formatCurrencyToReal(inputSelectOne)
            currencyValueTextTwo.innerHTML = formatCurrencyToDolar(inputSelectOne / dolar)         
        }    

        if (selectOne.value === 'dolar' && selectTwo.value === 'real') {
            currencyValueTextOne.innerHTML = formatCurrencyToDolar(inputSelectOne)
            currencyValueTextTwo.innerHTML = formatCurrencyToReal(inputSelectOne * dolar)
        }

        if (selectOne.value === 'real' && selectTwo.value === 'euro') {
            currencyValueTextOne.innerHTML = formatCurrencyToReal(inputSelectOne)
            currencyValueTextTwo.innerHTML = formatCurrencyToEuro(inputSelectOne / euro)
        }

        if (selectOne.value === 'euro' && selectTwo.value === 'real') {
            currencyValueTextOne.innerHTML = formatCurrencyToEuro(inputSelectOne)
            currencyValueTextTwo.innerHTML = formatCurrencyToReal(inputSelectOne * euro)
        } 

        if (selectOne.value === 'real' && selectTwo.value === 'bitcoin') {
            currencyValueTextOne.innerHTML = formatCurrencyToReal(inputSelectOne)
            currencyValueTextTwo.innerHTML = `BTC ${(inputSelectOne / bitcoin).toFixed(7)}`
        }

        if (selectOne.value === 'bitcoin' && selectTwo.value === 'real') {
            currencyValueTextOne.innerHTML = formatCurrencyToBitcoin(inputSelectOne)
            currencyValueTextTwo.innerHTML = formatCurrencyToReal(inputSelectOne * bitcoin)
        } 
    }

    function dolarToCurrencys() {

        if (selectOne.value === 'dolar' && selectTwo.value === 'euro') {
            currencyValueTextOne.innerHTML = formatCurrencyToDolar(inputSelectOne)
            currencyValueTextTwo.innerHTML = formatCurrencyToEuro(inputSelectOne * (dolar / euro))
        }

        if (selectOne.value === 'euro' && selectTwo.value === 'dolar') {
            currencyValueTextOne.innerHTML = formatCurrencyToEuro(inputSelectOne)
            currencyValueTextTwo.innerHTML = formatCurrencyToDolar(inputSelectOne * (euro / dolar))
        }

        if (selectOne.value === 'dolar' && selectTwo.value === 'bitcoin') {
            currencyValueTextOne.innerHTML = formatCurrencyToDolar(inputSelectOne)
            currencyValueTextTwo.innerHTML = `BTC ${(inputSelectOne * (dolar / bitcoin)).toFixed(7)}`
        }

        if (selectOne.value === 'bitcoin' && selectTwo.value === 'dolar') {
            currencyValueTextOne.innerHTML = `BTC ${(inputSelectOne)}`            
            currencyValueTextTwo.innerHTML = formatCurrencyToDolar(inputSelectOne * (bitcoin / dolar))            
        }
    }

    function euroToCurrencys() {
        if (selectOne.value === 'euro' && selectTwo.value === 'bitcoin') {
            currencyValueTextOne.innerHTML = formatCurrencyToEuro(inputSelectOne)
            currencyValueTextTwo.innerHTML = `BTC ${(inputSelectOne * (euro / bitcoin)).toFixed(7)}`
        }

        if (selectOne.value === 'bitcoin' && selectTwo.value === 'euro') {
            currencyValueTextOne.innerHTML = `BTC ${(inputSelectOne)}`
            currencyValueTextTwo.innerHTML = formatCurrencyToEuro(inputSelectOne * (bitcoin / euro))            
        }
    }

}

const changeCurrencyOne = () => {
    const currencyNameOne = document.getElementById('currency-name-one')
    const currencyImgOne = document.getElementById('currency-img-one')

    if (selectOne.value === 'real') {
        currencyNameOne.innerHTML = 'Real Brasileiro'
        currencyImgOne.src = "./assets/brasil-real.png"
    }

    if (selectOne.value === 'dolar') {
        currencyNameOne.innerHTML = 'Dólar Americano'
        currencyImgOne.src = "./assets/estados-unidos (1) 1.png"
    }

    if (selectOne.value === 'euro') {
        currencyNameOne.innerHTML = 'Euro'
        currencyImgOne.src = "./assets/euro.png"
    }

    if (selectOne.value === 'bitcoin') {
        currencyNameOne.innerHTML = 'Bitcoin'
        currencyImgOne.src = "./assets/bitcoin 1.png"
    }
    convertValues()
}

 const changeCurrencyTwo = () => {
    const currencyNameTwo = document.getElementById('currency-name-two')
    const currencyImgTwo = document.getElementById('currency-img-two')

    if (selectTwo.value === 'dolar') {
        currencyNameTwo.innerHTML = 'Dólar Americano'
        currencyImgTwo.src = "./assets/estados-unidos (1) 1.png"
    }


    if (selectTwo.value === 'real') {
        currencyNameTwo.innerHTML = 'Real Brasileiro'
        currencyImgTwo.src = "./assets/brasil-real.png"
    }


    if (selectTwo.value === 'euro') {
        currencyNameTwo.innerHTML = 'Euro'
        currencyImgTwo.src = "./assets/euro.png"
    }

    if (selectTwo.value === 'bitcoin') {
        currencyNameTwo.innerHTML = 'Bitcoin'
        currencyImgTwo.src = "./assets/bitcoin 1.png"
    }
    convertValues()
}



button.addEventListener('click', convertValues)
selectOne.addEventListener('change', changeCurrencyOne)
selectTwo.addEventListener('change', changeCurrencyTwo)