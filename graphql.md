GraphQL
  - what:
    + new API standard that was invented by Facebook
    + an alternative to REST
    + declarative data fetching
      - client specify what data they need from an API instead of multiple 
      endpoints that return fixed data
  - why:
    +  minimizes / optimizes the data that needs to be transferred over
    the  network to improve operation in sloppy networks, low-powered devices
    + works well with different front-end frameworks and platforms
    + fast development // in discussion
  - compare to REST:
    - similarity:
      + based on the concept of resource
      + can be fetched via HTTP and can return JSON type
    - difference:
      + data fetching via REST requires multiple endpoints while data fetching
      via GraphQL requires only 1 endpoint
      + data fetching via REST can cause over / under fetching
      + data response via REST is defined by the server-side is fixed while
      data response via GraphQL is defined by the client-side and is more
      flexible
      + actions in REST are defined via endpoints and HTTP verbs while actions in
      GraphQL are defined by Schema: Query, Mutation, Subscription