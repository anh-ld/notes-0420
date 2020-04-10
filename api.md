API
  - what:
    + Application programming interface
    + a method is given to developers to connect, communicate to applications,
    libraries
    + specifically, it provides access to some / all functions of an 
    application
    + i.e: Facebook API, Windows API, etc.
  - types:
    + Web API
    + OS API
  - modern API follows general rules (i.e HTTP, REST). It should be friendly,
  understandable and usable
  - should be designed for certain target

RESTful API

REST
  - what:
    + REpresentational State Transfer
    + architectural style to design api system, especially web service
    + or a set of rules to design web service api
    + focus on resource
  - 6 principles
  - pros:
    + better than the old concepts SOAP, WSDL
    + good performance
    + easy to learn and develop
    + scalable
  - cons:
    + only works in HTTP protocol
    + not so flexible
    + getting data requires multiple round-trip
    + under / over fetching
  - design:
    + endpoint should only include plural noun. i.e: /employees
    + methods: GET POST PUT DELETE
      - GET: /employees
      - GET: /employees/3
      - POST: /employees
      - PUT: /employees
      - DELETE: /employees
      - DELETE: /employees/3
    + response status code
      - 2xx: 200 OK, 201 CREATED, 204 NO CONTENT
      - 3xx
      - 4xx: 400 BAD REQUEST, 401 UNAUTHORIZED, 403 FORBIDDEN, 404 NOT FOUND
      - 5xx: 500 INTERNAL SERVER ERROR, 503 SERVICE UNAVAILABLE
    + query
      - sort: GET /companies?sort=rank_asc
      - filter: GET /companies?category=banking&location=india
      - search: GET /companies?search=Digital Mckinsey
      - paginate: GET /companies?page=23
    + versioning
      - to keep everything stable on updating something to API
      - version should start with 'v' and its version number
      - i.e: /v1.1/companies/34/employees