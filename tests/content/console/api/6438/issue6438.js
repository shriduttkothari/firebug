function runTest()
{
    FBTest.sysout("issue6438.START");

    FBTest.openNewTab(basePath + "console/api/6438/issue6438.html", function(win)
    {
        FBTest.openFirebug();
        FBTest.selectPanel("console");

        FBTest.enableConsolePanel(function(win)
        {
            var config = {tagName: "div", classes: "logRow"};

            // Wait for the log entry to be displayed
            FBTest.waitForDisplayedElement("console", config, function(row)
            {
                var expected = new RegExp("console.log\\(\\) allows patterns like %d, which are "+
                    "replaced by additional function arguments. Example: 100");

                // Test whether the message is displayed correctly
                FBTest.compare(expected, row.textContent, "Message must be displayed correctly");

                FBTest.testDone("issue6438.DONE");
            });

            FBTest.reload();
        });
    });
}
