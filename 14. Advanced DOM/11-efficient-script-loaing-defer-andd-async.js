/*
━ Regular ━'
• If script is at HEAD
LOADING: Parsing HTML → Fetch Script → Execute → Meanwhile the HTML waits for script to complete its execution → Finish Parsing HTML (DOMContentLoaded)
- Declaring script at the head is not considered a good practice

• If script is at BODY END
LOADING: Parsing HTML → Fetch Script → Execute
Scripts are fetched and executed after the HTML is completely parsed
- Declaring scripts at the end of the DOC is a good practice, still not the perfect method


━ Async ━
LOADING: Parsing HTML + Script Loading simultaneously → HTML parsing Waiting until script execution completes → Finish Parsing HTML (DOMContentLoaded)
Fetch Script → Execute
- 2 asynchronous task is executed
- Scripts are fetched asynchronously and executed immediately
- Scripts are not guaranteed to execute in order
- Use for 3rd-party scripts where order doesn't matter (e.g Google Analytics)


━ Defer ━
Parsing HTML + Script is fetched simultaneously without any stops → After complete HTML Parsing Script is executed
- No interruption in Parsing HTML
- Scripts are fetched asynchronously and executed after the HTML is completely parsed
- Scripts are executed in order
- This is overall the best solution! Use for your own scrips, and when order matters (e.g. including a library)
*/
