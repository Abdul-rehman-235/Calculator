let result = "0";
// clear function
const ClearFunction = () => {
    result = "0";
    document.getElementById('result').value = result
};
// value show function
const ValueFunction = (value) => {
    if (result === "0" && result !== value) {
        result = value;
    } else {
        result += value;
    }
    document.getElementById('result').value = result
}
// all equal function
const TotalFunction = () => {
    try {
        result = eval(result).toString();
    } catch (err) {
        result = "Error";
    }
    document.getElementById('result').value = result
}
