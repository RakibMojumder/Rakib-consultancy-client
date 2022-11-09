export const jwtVerifyApi = user => {
    fetch("http://localhost:5000/jwt", {
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