function concatString(strings, output)
{
    if (output == "log")
    {
        return console.log("(output: " + strings + ")")
    }

    else if (output == "alert")
    {
        return alert("(output: " + strings + ")");
    }

    else
    {
        return alert("Improper output mode detected.");
    }
}

concatString("hello","log");