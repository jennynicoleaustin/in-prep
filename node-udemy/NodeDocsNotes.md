Introduction to Node.js 

- runs in a single process, without creating a new thread for every request.
- Node.js provides a set of asynchronous I/O primitives in its standard library that prevent JavaScript code from blocking and generally, libraries in Node.js are written using non-blocking paradigms, making blocking behavior the exception rather than the norm.

Blocking vs non-blocking 
- blocking (synchronously)
  - operations that block further execution until that operation finishes 
- non-blocking (asynchronously)
  - does not block execution of additional js code. 

Node = non-blocking is the standard
- allows concurrent connections with a single server without the burden of managing concurrency

interpreted vs compiled? 
- JavaScript is internally compiled by V8 with just-in-time (JIT) compilation to speed up the execution.

