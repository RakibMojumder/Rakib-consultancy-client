export const jwtVerifyApi = user => {
    fetch("https://rakib-consultancy-server.vercel.app/jwt", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({ email: user.email }),
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            localStorage.setItem("user-access-token", data.token);
        });
}