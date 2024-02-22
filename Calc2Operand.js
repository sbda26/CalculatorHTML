const _bitwiseOperators = ['AND', 'OR', 'XOR', 'SHL', 'SHR'];

function Calc(operatorSymbol)
{
    var isBitwise = operatorSymbol in _bitwiseOperators; //operatorSymbol == 'AND' || operatorSymbol == 'OR' || operatorSymbol == 'XOR' || operatorSymbol == 'SHL' || operatorSymbol == 'SHR';
    var operand1 = GetValue('txtOperand1', isBitwise);
    var operand2 = GetValue('txtOperand2', isBitwise);
    var result = GetResult(operand1, operand2, operatorSymbol);

    if (result != null)
        document.getElementById('txtResult').value = result;
    else
        alert("BAD OPERATOR SYMBOL: " + operatorSymbol);
}

function GetValue(txtOperand, isBitwise)
{
    return isBitwise ? parseInt(document.getElementById(txtOperand).value) : parseFloat(document.getElementById(txtOperand).value);
}

function GetResult(operand1, operand2, operatorSymbol)
{
    switch(operatorSymbol)
    {
        case '+': return operand1 + operand2;
        case '-': return operand1 - operand2;
        case 'X': return operand1 * operand2;
        case '/': return operand1 / operand2;
        case 'x^y': return operand1 ** operand2;
        case 'AND': return operand1 & operand2;
        case 'OR': return operand1 | operand2;
        case 'XOR': return operand1 ^ operand2;
        case 'SHL': return operand1 << operand2;
        case 'SHR': return operand1 >> operand2;
        case 'MOD': return operand1 % operand2;
        case 'MED': return Median(operand1, operand2);
        default: return null;
    }
}

function Clear()
{
    document.getElementById('txtOperand1').value = null;
    document.getElementById('txtOperand2').value = null;
    document.getElementById('txtResult').value = null;
}

function Median(operand1, operand2)
{
    var lowest = (operand1 <= operand2) ? operand1 : operand2;
    var highest = (lowest == operand1) ? operand2 : operand1;
    var diff = highest - lowest;
    var half = diff / 2;
    var median = lowest + half;

    return median;
}
