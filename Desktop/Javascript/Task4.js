function conditionalFunction(input)
{
    if (!isNaN(input) && input != "")
    {
        return console.log("input is a number")
    }

    else if (input == "")
    {
        return alert("Nothing has been input");
    }

    else
    {
        return alert("input is not a number")
    }

}

conditionalFunction("B");

