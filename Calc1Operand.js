function Calc(operatorSymbol)
{
    var operand = parseFloat(document.getElementById(txtOperand).value);
    var result = GetResult(operand, operatorSymbol);

    alert(result);

    if (result != null)
        document.getElementById('txtResult').value = result;
    else
        alert("BAD OPERATOR SYMBOL: " + operatorSymbol);
}

function GetResult(operand, operatorSymbol)
{
    switch(operatorSymbol)
    {
        case '1/x': return 1 / operand;
        case 'Σ': return (operand * (operand + 1)) / 2;
        case '!': return Factorial(operand);
        default: return TrigonometricFunction(operand, operatorSymbol);
    }
}

function Factorial(operand)
{
    var result = operand;

    for (index = operand - 1; index > 1; index--)
    {
        result = result * index;
    }

    return result;
}

function TrigonometricFunction(operand, operatorSymbol)
{
    var whichMeasurementUnit = WhichMeasurementUnit();
    var radians = ConvertToRadians(operand, whichMeasurementUnit);

    switch(operatorSymbol)
    {
        case 'sin': return Math.sin(radians);
        case 'cos': return Math.cos(radians);
        case 'tan': return Math.tan(radians);
        default: alert('INVALID TRIGONOMETRIC OPERATOR SYMBOL');
    }
}

function WhichMeasurementUnit()
{
    var el = document.getElementsByName('circleMeasurement');

    for (index = 0; index < el.length; index++)
    {
        if (el[index].checked)
            return el[index].value;
    }

    return null;
}

function ConvertToRadians(operand, whichMeasurementUnit)
{
    switch(whichMeasurementUnit)
    {
        case "RAD": return operand;
        case "DEG": return operand * Math.PI/180;
        case "GRD": return operand * Math.PI/200;
        default: alert('INVALID MEASUREMENT UNIT');
    }
}