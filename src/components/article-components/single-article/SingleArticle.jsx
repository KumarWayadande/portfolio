import axios from "axios";
import { useLoaderData } from "react-router-dom";
import ArticleBackButton from "./ArticleBackBtn";
import Heading from "./Heading";
import Contents from "./Contents";
import banner from "../../../../public/aero_function_banner-3.png";
import Date from "./Date";
import ExtLink from "./ExtLink";
import CodeEditor from "./CodeEditor";
import Image from "./Image";

export default function SingleArticle() {
  const result = useLoaderData();
  const { data } = result;

  if (!data.article) return <h1>Article not found</h1>;
  return (
    <div className="single-article-container mx-auto mt-15 md:mt-20 flex flex-col md:flex-row">
      <div className="back-aero-container md:basis-1/6 flex-col md:flex-row items-center">
        <div className="flex">
          <ArticleBackButton />
        </div>
      </div>
      <div className="article-contents-container max-w-2xl basis-10/12">
        <Date />
        <Heading extraClasses="mb-15">Understanding Arrow Functions in JavaScript</Heading>
        <Contents>
          The{" "}
          <ExtLink link="http://www.ecma-international.org/ecma-262/6.0/">
            2015 edition of the ECMAScript specification (ES6)
          </ExtLink>{" "}
          added arrow function expressions to the{" "}
          <ExtLink link="https://www.digitalocean.com/community/tutorial_series/how-to-code-in-javascript">
            Javascript
          </ExtLink>{" "}
          language. Arrow functions are a new way to write anonymous function
          expressions, and are similar to
          <ExtLink> lambda functions </ExtLink>in some other programming
          languages, such as <ExtLink>Python.</ExtLink>
        </Contents>
        <Image src={banner} className="rounded-xl my-10" />
        <Contents>
          Arrow functions differ from traditional functions in a number of ways,
          including the way their scope is determined and how their syntax is
          expressed. Because of this, arrow functions are particularly useful
          when passing a function as a parameter to a higher-order function,
          such as when you are looping over an <ExtLink>array</ExtLink> with{" "}
          <ExtLink>built-in iterator methods</ExtLink>. Their syntactic
          abbreviation can also allow you to improve the readability of your
          code.
        </Contents>
        <Contents>
          In this article, you will review function declarations and
          expressions, learn about the differences between traditional function
          expressions and arrow function expressions, learn about lexical scope
          as it pertains to arrow functions, and explore some of the syntactic
          shorthand permitted with arrow functions.
        </Contents>
        <Heading>Defining Functions</Heading>
        <hr className="border-slate-200 dark:border-[#35353b]" />
        <Contents>
          Before delving into the specifics of arrow function expressions, this
          tutorial will briefly review traditional JavaScript functions in order
          to better show the unique aspects of arrow functions later on.
        </Contents>
        <Contents>
          The <ExtLink>How To Define Functions in JavaScript</ExtLink> tutorial
          earlier in this series introduced the concept of function declarations
          and function expressions. A function declaration is a named function
          written with the <var>function</var> keyword. Function declarations
          load into the execution context before any code runs. This is known as
          hoisting, meaning you can use the function before you declare it.
        </Contents>
        <Contents>
          Here is an example of a sum function that returns the sum of two
          parameters:
        </Contents>
        <CodeEditor>
          {`function sum(a, b){
  return a + b;
}`}
        </CodeEditor>
        <Contents>
          You can execute the<var> sum</var> function before declaring the
          function due to hoisting:
        </Contents>
        <CodeEditor>
          {`sum(a, b);
function sum(a, b){
   return a + b;
}`}
        </CodeEditor>
        <Contents>Running this code would give the following output:</Contents>
        <CodeEditor isOutput>3</CodeEditor>
        <Contents>You can find the name of the function by logging the function itself:</Contents>
        <CodeEditor>{`console.log(sum);`}</CodeEditor>
        <Contents>This will return the function, along with its name:</Contents>
        <CodeEditor isOutput>{`ƒ sum(a, b) {
    return a + b
}`}</CodeEditor>
        <Contents>A function expression is a function that is not pre-loaded into the execution context, and only runs when the code encounters it. Function expressions are usually assigned to a variable, and can be anonymous, meaning the function has no name.</Contents>
        <Contents>In this example, write the same <strong>sum</strong> function as an anonymous function expression:</Contents>
        <CodeEditor>{`const sum = function (a, b) {
    return a + b
}`}</CodeEditor>
      <Contents>You`&apos;`ve now assigned the anonymous function to the <var>sum</var> constant. Attempting to execute the function before it is declared will result in an error:</Contents>
      <CodeEditor>
        {
          `sum(1, 2)

const sum = function (a, b) {
    return a + b
}`
        }
      </CodeEditor>
      <Contents>Running this will give:</Contents>
      <CodeEditor isOutput>{`Uncaught ReferenceError: Cannot access 'sum' before initialization`}</CodeEditor>
      <Contents>
      Also, note that the function does not have a named identifier. To illustrate this, write the same anonymous function assigned to <var>sum</var>, then log <var>sum</var> to the console:
      </Contents>
      <CodeEditor>
        {
          `const sum = function (a, b) {
  return a + b
}

console.log(sum)`
        }
      </CodeEditor>
      <Contents>This will show you the following:</Contents>
      <CodeEditor isOutput>{`ƒ (a, b) {
  return a + b
}`}</CodeEditor>
    <Contents>The value of sum is an anonymous function, not a named function.</Contents>
    <Contents>You can name <strong>function</strong> expressions written with the function keyword, but this is not popular in practice. One reason you might want to name a function expression is to make error stack traces easier to debug.</Contents>
    <Contents>Consider the following function, which uses an <ExtLink>if statement</ExtLink> to throw an error if the function parameters are missing:</Contents>
    <CodeEditor>
      {
`const sum = function namedSumFunction(a, b) {
    if (!a || !b) 
      throw new Error('Parameters are required.')
    
    return a + b
}

sum();`}
    </CodeEditor>
    <Contents>The highlighted section gives the function a name, and then the function uses the <strong>or ||</strong> operator to throw an error <ExtLink>object</ExtLink> if either of the parameters is missing.</Contents>
    
    <Contents>Running this code will give you the following:</Contents>
    <CodeEditor isOutput>{
`Uncaught Error: Parameters are required.
  at namedSumFunction (<anonymous>:3:23)
  at <anonymous>:1:1`}</CodeEditor>
    <Contents>In this case, naming the function gives you a quick idea of where the error is.</Contents>
    <Contents>An <ExtLink>arrow function expression</ExtLink> is an anonymous function expression written with the &quot;fat arrow&quot; syntax (=&gt;).</Contents>
    <Contents>Rewrite the <strong>sum</strong> function with arrow function syntax:</Contents>
    <CodeEditor>
{`const sum = (a, b) => {
   return a + b
}`}
    </CodeEditor>
    <Contents>Like traditional function expressions, arrow functions are not hoisted, and so you cannnot call them before you declare them. They are also always anonymous—there is no way to name an arrow function. In the next section, you will explore more of the syntactical and practical differences between arrow functions and traditional functions.</Contents>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  try {
    const articleId = params.id;
    return await axios.post("http://localhost:3000/articles/" + articleId, {
      articleId,
    });
  } catch (err) {
    throw new Error(err.message, { status: err.status });
  }
}
