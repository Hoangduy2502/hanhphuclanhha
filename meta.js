exports.handler = async (event) => {
    const params = new URLSearchParams(event.queryStringParameters);
    const name = params.get("name") || "Bạn";

    return {
        statusCode: 200,
        headers: { "Content-Type": "text/html" },
        body: `
        <!DOCTYPE html>
        <html lang="vi">
        <head>
            <meta charset="UTF-8">
            <meta property="og:title" content="Thiệp Mời Cưới">
            <meta property="og:description" content="Kính mời ${name}">
            <meta property="og:image" content="https://thiepcuoi.ruoumucduynam.xyz/image.jpg">
            <meta property="og:url" content="https://thiepcuoi.ruoumucduynam.xyz/meta?name=${encodeURIComponent(name)}">
            <title>Thiệp Mời Cưới - ${name}</title>
        </head>
        <body>
            <h1>Xin chào, ${name}!</h1>
        </body>
        </html>
        `,
    };
};