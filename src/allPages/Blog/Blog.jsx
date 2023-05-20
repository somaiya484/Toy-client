
const Blog = () => {
    return (
        <div className='bg-purple-50 p-10'>
            <div className="m-5 bg-purple-100 p-8 rounded-xl ">
                <h3  className="text-2xl text-purple-900 my-3 font-semibold">1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
                <h5 className="text-lg"><span className="font-bold text-purple-800 ">Ans:</span>  Re-issued, provided the refresh token is a valid one requesting permission to access confidential resources is <br /> the access token. on the other hand, A refresh token  helps to re-validate a user without them having to re-enter their login credentials multiple times. There are 2 place or option for store the access token LocalStorage and Cookies. <br /> And refresh token should store in persistent server-side storage which provides a higher level of security </h5>
            </div>
            <div className="m-5 bg-purple-100 p-8 rounded-xl">
                <h3 className="text-2xl text-purple-900 my-3 font-semibold" >2. Compare SQL and NoSQL databases?</h3>
                <h5 className="text-lg"><span className="font-bold text-purple-800 "> Ans:</span> SQL databases are table-based & NoSQL databases are document like key-value, column-wide stores or graph. <br /> SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.  For multi-row transaction  <br />SQL database should use. & NoSQL is better for unstructured data like documents or JSON. And it has flexibility to use a  <br /> format that best fits the data. </h5>
            </div>
            <div className="m-5 bg-purple-100 p-8 rounded-xl">
                <h3 className="text-2xl text-purple-900 my-3 font-semibold" >3. What is express js? What is Nest JS?</h3>
                <h5 className="text-lg"><span className="font-bold text-purple-800 ">Ans: </span>A minimalist and flexible web application framework which is easy to use is Express JS. Express js provides broad features for  <br /> building web and mobile applications. NextJS is a newer framework that provides additional features such as dependency  <br />, a modular architecture, and an intuitive CLI & it is build on top of express . And also Express js has a large community of developers.  </h5>
            </div>
            <div className="m-5 bg-purple-100 p-8 rounded-xl">
                <h3 className="text-2xl text-purple-900 my-3 font-semibold" >4. What is MongoDB aggregate and how does it work?</h3>
                <h5 className="text-lg"><span className="font-bold text-purple-800 ">Ans:</span> The way of processing a large number of documents in a collection by means of passing them through different  <br /> stages is called Aggregation. MongoDB Aggregations emphasize low number of results for large numbers of  <br /> entries Mongoose aggregate function returns an instance of Mongoose Aggregate class. Aggregate instances are thenable <br /> for chaining interface for building aggregation pipelines.</h5>
            </div>
        </div>
    );
};

export default Blog;