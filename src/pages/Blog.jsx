import React from "react";
import useTitle from "../Hooks/useTitle";

const Blog = () => {
  useTitle("Blog");
  return (
    <div className="mt-10 mb-20">
      <article className="mb-7 bg-teal-50 p-5 border-l-8 border-[#00F0B5]">
        <h3 className="text-xl font-bold">Difference between SQL and NoSQL</h3>
        <p className="text-justify">
          SQL is the programming language used to interface with relational
          databases. (Relational databases model data as records in rows and
          tables with logical links between them). NoSQL is a class of DBMs that
          are non-relational and generally do not use SQL.
        </p>
        <h5>There are 5 difference between SQL & noSQL</h5>
        <ul>
          <li>1. Language</li>
          <li>2. Scalability</li>
          <li>3. Structure</li>
          <li>4. Properties</li>
          <li>5. Support and communities</li>
        </ul>
      </article>

      <article className="mb-7 bg-teal-50 p-5 border-l-8 border-[#00F0B5]">
        <h3 className="text-xl font-bold">
          What is JWT, and how does it work?
        </h3>
        <p className="text-justify">
          JSON web token (JWT), pronounced "jot", is an open standard (RFC 7519)
          that defines a compact and self-contained way for securely
          transmitting information between parties as a JSON object. Again, JWT
          is a standard, meaning that all JWTs are tokens, but not all tokens
          are JWTs. Because of its relatively small size, a JWT can be sent
          through a URL, through a POST parameter, or inside an HTTP header, and
          it is transmitted quickly. A JWT contains all the required information
          about an entity to avoid querying a database more than once. The
          recipient of a JWT also does not need to call a server to validate the
          token.
        </p>
      </article>

      <article className="mb-7 bg-teal-50 p-5 border-l-8 border-[#00F0B5]">
        <h3 className="text-xl font-bold">How does JWT works?</h3>
        <p className="text-justify">
          JWT differ from other web tokens in that they contain a set of claims.
          Claims are used to transmit information between two parties. What
          these claims are depends on the use case at hand. For example, a claim
          may assert who issued the token, how long it is valid for, or what
          permissions the client has been granted. <br /> JWT is a string made
          up of three parts, separated by dots (.), and serialized using base64.
          In the most common serialization format, compact serialization, the
          JWT looks something like this: xxxxx.yyyyy.zzzzz.
        </p>
      </article>
      <article className="mb-7 bg-teal-50 p-5 border-l-8 border-[#00F0B5]">
        <h3 className="text-xl font-bold">
          What is the difference between javascript and NodeJS?
        </h3>
        <p className="text-justify">
          1. JavaScript is a client-side scripting language that is lightweight,
          cross-platform, and interpreted. Both Java and HTML include it.
          Node.js, on the other hand, is a V8-based server-side programming
          language. <br />
          2. JavaScript is a simple programming language that can be used with
          any browser that has the JavaScript Engine installed. Node.js, on the
          other hand, is an interpreter or execution environment for the
          JavaScript programming language. It requires libraries that can be
          conveniently accessed from JavaScript programming to be more helpful.{" "}
          <br />
          3. Any engine may run JavaScript. As a result, writing JavaScript is
          incredibly easy, and any working environment is similar to a complete
          browser. Node.js, on the other hand, only enables the V8 engine.
          Written JavaScript code, on the other hand, can run in any context,
          regardless of whether the V8 engine is supported. <br />
          4. A specific non-blocking operation is required to access any
          operating system. There are a few essential objects in JavaScript, but
          they are entirely OS-specific.
        </p>
      </article>
      <article className="mb-7 bg-teal-50 p-5 border-l-8 border-[#00F0B5]">
        <h3 className="text-xl font-bold">
          How does NodeJS handle multiple requests at the same time?
        </h3>
        <p className="text-justify">
          Node’s main JavaScript thread uses an event loop. When multiple
          requests are made, the first is processed while the rest are blocked
          (until the first is complete). Each request is processed one loop at a
          time until they’re all processed. The loop executes very quickly and
          you kind of have to go out of your way to create apps that block.
          There’s an important caveat to this: user requests (like web requests)
          are not the same as function requests. Multiple users can submit
          requests and they’ll be processed within nanoseconds of each other
          (not noticeable without tooling). This differs from a process calling
          the same function/memory space at the same time.
        </p>
      </article>
    </div>
  );
};

export default Blog;
