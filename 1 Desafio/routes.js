const fs = require('fs');

const requestHandler = (req, res) => {

        const url = req.url
        const method = req.method

        if(url === '/')

            {

            res.setHeader('Content-Type', 'text/html')

            res.write('<html>');

            res.write('<head><title> Welcome! </title></head>');
            
            res.write('<body>')

            res.write('<h1> Welcome! </h1>')

            res.write('<h2> Username </h2>')

            res.write('<form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form>')

            res.write('</body>')

            res.write('</html>');

            return res.end();


    }

        if(url === '/user') 
            
        {
            res.setHeader('Content-Type', 'text/html')
            res.write('<html>');
            res.write('<head><title> User list </title></head>');
            res.write('<body>')
            res.write('<ul> <li> User 1 </li> <li> user 2 </li> <li> user 3 </li> <li> user 4 </li> <li> user 5 </li> </ul>')
            res.write('</body>')
            res.write('</html>');
            return res.end();

        }

        if(url === '/create-user' && method === 'POST')

        {
            const body = []

            req.on('data', (chunk) => 
            
            {
                console.log(chunk)
                body.push(chunk);
            });

            return req.on('end', () => {

                console.log(body)
                let parsedBody = Buffer.concat(body);
                console.log(parsedBody);
                parsedBody = parsedBody.toString();
                console.log(parsedBody);
                res.statusCode = 302;
                res.setHeader('Location', '/user');
                return res.end();
                
            });

    }
        res.statusCode = 404;
        return res.end()

};


// module.exports = {requestHandler};
// module.exports = {handler: requestHandler, someText: 'Some hard coded text'};
// exports.handler = requestHandler;

module.exports.handler = requestHandler;

