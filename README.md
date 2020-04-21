![CI](https://github.com/ajinx/zalenium/workflows/CI/badge.svg)

[繁中版](./README-tw.md) | [簡中版](./README-zh.md) | [Português (Brasil)](./README-pt_BR.md) | [Français](./README-fr.md) | [한국어](./README-ko.md) | [Nederlands](./README-nl.md) | [Indonesia](./README-id.md) | [ไทย](./README-th.md) | [Русский](./README-ru.md) | [Українська](./README-uk.md) | [Español](./README-es.md) | [Italiano](./README-it.md) | [日本語](./README-ja.md) | [Deutsch](./README-de.md) | [Türkçe](./README-tr.md) | [Tiếng Việt](./README-vi.md) | [Монгол](./README-mn.md) | [हिंदी](./README-hi.md) | [العربية](./README-ar.md) | [Polski](./README-pl.md) | [Македонски](./README-mk.md) | [ລາວ](./README-lo.md) | [Ελληνικά](./README-el.md)

# zalenium V1
Start Zalenium inside github actions workflow.

## Zalenium :
      A flexible and scalable container based Selenium Grid with video recording, live preview, basic auth & dashboard.
      
More documentation available at
      https://opensource.zalando.com/zalenium/
      

Action workflow example
```
on: [push]

jobs:
  tests:
    runs-on: ubuntu-latest
    name: <Any name> 
    steps:
    - name: <e.g. Zalenium >
      uses: ajinx/zalenium@v1.1
    - uses: actions/checkout@v2
    - run: npm ci  
    - name: <Any test job run name>
      run: <Test execution command e.g. mvn test, npm test etc>
 
 ```
In your test configuration, specify remote url as http://localhost:4444/wd/hub

This is still in BETA and might not work on Windows and MAC runners, Log any issues you noticed.

