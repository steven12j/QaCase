
Test Case Mobile App:
1. Verify if menu `Hazard` is clickable
2. Verify if clicking `Hazard` will show list of hazard reports, hit Safety Services, and return 200
3. Verify if clicking `Hazard` will show list of hazard reports, hit Safety Services, and return 200 if no internet connection
4. Verify if on the list of hazard reports, can fill forms to report hazard
5. Verify if field `Location` is input select field and is clickable
6. Verify if field `Location` is fillable
7. Verify if field `Location` is empty will have validation message
8. Verify field `Location`, clicking the option will fill the field with the correct option chosen
9. Verify field `Location`, editing a filled field and clicking another option will fill the field with the latest option chosen
10. Verify if field `Sublocation` is input select field and is clickable
11. Verify if field `Sublocation` is fillable
12. Verify if field `Sublocation` is empty will have validation message
13. Verify field `Sublocation`, clicking the option will fill the field with the correct option chosen
14. Verify field `Sublocation`, editing a filled field and clicking another option will fill the field with the latest option chosen
15. Verify if field `Area` is input select field and is clickable
16. Verify if field `Area` is fillable
17. Verify if field `Area` is empty will have validation message
18. Verify field `Area`, clicking the option will fill the field with the correct option chosen
19. Verify field `Area`, editing a filled field and clicking another option will fill the field with the latest option chosen
20. Verify if field `Area Description` is input text field and is clickable
21. Verify if field `Area Description` is fillable
22. Verify if field `Area Description` is empty will not have validation message
23. Verify if field `Area Description` has character requirements alphanumeric and special characters
24. Verify if field `Area Description` has max character limits
25. Verify if field `Evidence` is image picker field and is clickable
26. Verify if field `Evidence` is fillable
27. Verify if field `Evidence` is empty will have validation message
28. Verify if clicking field `Evidence` will open choose image
29. Verify if choosing image will fill the field `Evidence` with the correct image
30. Verify if editing filled field `Evidence` will change the field with the latest image
31. Verify if deleting filled field `Evidence` will remove the image
32. Verify if after deleting filled field `Evidence`, still can be clicked again to choose a new image
33. Verify if field `PIC` is input select field and is clickable
34. Verify if field `PIC` already prefilled with reporter name
35. Verify field `PIC`, editing a filled field and clicking another option will fill the field with the latest option chosen
36. Verify clicking submission button will hit Safety Backend Services and generate Hazard entry, then will hit Notification Services to push notification even if no internet connection
37. Verify with the new Hazard entry, the filled PIC (checking from User services) will receive followup task notifications from Notification Services and returns 200 even if no internet connection
38. Verify with the new Hazard entry, related members will receive Hazard notifications from Notification Services and returns 200 even if no internet connection
39. Verify user PIC (checking from User services) filled on Hazard entry need to click to open follow up task form
40. Verify if field `Evidence` is image picker field and is clickable
41. Verify if field `Evidence` is fillable
42. Verify if field `Evidence` is empty will have validation message
43. Verify if clicking field `Evidence` will open choose image
44. Verify if choosing image will fill the field `Evidence` with the correct image
45. Verify if editing filled field `Evidence` will change the field with the latest image
46. Verify if deleting filled field `Evidence` will remove the image
47. Verify if after deleting filled field `Evidence`, still can be clicked again to choose a new image
48. Verify if field `Resolution Date` is clickable
49. Verify if field `Resolution Date` clicked will open calendar
50. Verify if field `Resolution Date` is empty will have validation message
51. Verify field `Resolution Date`, clicking calendar date will input the correct date
52. Verify field `Resolution Date`, editing a filled calendar date will input the latest correct date
53. Verify clicking submit follow up task button will hit Safety Backend Services and generate Follow up task list, then will hit Notification Services to push notification even if no internet connection
54. Verify with the new Follow up task entry, Direct Supervisor of the area (checking from User services) will receive notification from Notification Services and returns 200 even if no internet connection