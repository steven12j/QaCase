
Test Case Mobile App and Web:
1. Verify if username field is clickable
2. Verify if username field is fillable with alphabet
3. Verify if username field is fillable with numbers
4. Verify if username field is fillable with special character
5. Verify if username field is fillable with non-latin character
6. Verify if api /user/who will be sent either by button or periodically after finish typing
7. Verify if api /user/who already success (code 200) will open microsoft login screen to enter password
8. Verify if api /user/who already failed (code 400) will not open microsoft login screen to enter password and show failure message
9. Verify if api /user/who already failed (code 500) will not open microsoft login screen to enter password and show failure message
10. Verify if api /user/who already failed (code 500) will not open microsoft login screen to enter password and show failure message
11. Verify if bad internet connection api user/who can still return response 200 and open microsoft login
12. Verify if no internet connection api user/who can still return response 200 and open microsoft login
13. Verify if password field is clickable
14. Verify if password field is fillable
15. Verify if app will sent request for user profile to /user/me after login and get response 200 with normal internet connection
16. Verify if app will sent request for user profile to /user/me after login and get response 200 if bad internet connection
17. Verify if app will sent request for user profile to /user/me after login and get response 200 if no internet connection
18. Verify if app will sent request for user profile to /user/me after login and get response not 200 will show failure message
19. Verify if app will sent request for request for list of master data /tenant/master and get response 200 if normal internet connection
20. Verify if app will sent request for request for list of master data /tenant/master and get response 200 if bad internet connection
21. Verify if app will sent request for request for list of master data /tenant/master and get response 200 if no internet connection
22. Verify if app will sent request for request for list of master data /tenant/master and get response not 200 will show failure message
23. Verify app will request data for endpoint locations and response 200
24. Verify app will request data for endpoint locations with no internet connections and response 200
25. Verify app will request data for endpoint sublocations and response 200
26. Verify app will request data for endpoint sublocations with no internet connections and response 200
27. Verify app will request data for endpoint areas and response 200
28. Verify app will request data for endpoint areas with no internet connections and response 200
29. Verify app will request data for endpoint employees and response 200
30. Verify app will request data for endpoint employees with no internet connections and response 200
31. Verify app will request data for endpoint forms and response 200
32. Verify app will request data for endpoint forms with no internet connections and response 200
33. Verify if updating master data for the first time will show prompt to restart app
34. Verify if updating master data for the second time will not show prompt to restart app